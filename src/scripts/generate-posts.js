const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const ROOT_DIR = path.resolve(__dirname, "..", "..");
const POSTS_DIR = path.join(ROOT_DIR, "content", "posts");
const OUTPUT_DIR = path.join(ROOT_DIR, "src", "generated");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "posts.json");

const SUPPORTED_EXTENSIONS = new Set([".md", ".markdown", ".mdx"]);

const slugify = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const normaliseTags = (rawTags) => {
  if (!rawTags) {
    return [];
  }

  if (Array.isArray(rawTags)) {
    return rawTags
      .map((tag) => slugify(String(tag)))
      .filter(Boolean);
  }

  if (typeof rawTags === "string") {
    return rawTags
      .split(",")
      .map((tag) => slugify(tag))
      .filter(Boolean);
  }

  return [];
};

const readingTime = (content) => {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const wordsPerMinute = 200;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
};

const ensureDirectories = () => {
  fs.mkdirSync(POSTS_DIR, { recursive: true });
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
};

const parsePost = (filePath) => {
  const filename = path.basename(filePath);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  if (!content.trim()) {
    console.warn(`Skipping "${filename}" because it has no body content.`);
    return null;
  }

  const slugSource = data.slug || path.parse(filename).name;
  const slug = slugify(slugSource);
  if (!slug) {
    console.warn(`Skipping "${filename}" because the slug could not be generated.`);
    return null;
  }

  const title = data.title ? String(data.title).trim() : slug;
  const description = data.description ? String(data.description).trim() : "";

  let publishedAt;
  if (data.date) {
    const parsedDate = new Date(data.date);
    if (!Number.isNaN(parsedDate.getTime())) {
      publishedAt = parsedDate.toISOString();
    } else {
      console.warn(`"${filename}" has an invalid date field. Falling back to file modification time.`);
    }
  }
  if (!publishedAt) {
    const stats = fs.statSync(filePath);
    publishedAt = stats.mtime.toISOString();
  }

  return {
    slug,
    title,
    description,
    publishedAt,
    tags: normaliseTags(data.tags),
    readingTimeMinutes: readingTime(content),
    content: content.trim(),
  };
};

const generate = () => {
  ensureDirectories();

  const entries = fs
    .readdirSync(POSTS_DIR)
    .filter((file) => SUPPORTED_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .map((file) => path.join(POSTS_DIR, file));

  const posts = [];
  const seenSlugs = new Set();

  for (const filePath of entries) {
    const post = parsePost(filePath);
    if (!post) {
      continue;
    }

    if (seenSlugs.has(post.slug)) {
      console.warn(`Duplicate slug "${post.slug}" detected. Skipping "${filePath}".`);
      continue;
    }

    seenSlugs.add(post.slug);
    posts.push(post);
  }

  posts.sort((a, b) => {
    const dateDiff = new Date(b.publishedAt) - new Date(a.publishedAt);
    if (dateDiff !== 0) {
      return dateDiff;
    }
    return a.title.localeCompare(b.title);
  });

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2));

  console.log(`Generated ${posts.length} blog ${posts.length === 1 ? "post" : "posts"} into ${path.relative(ROOT_DIR, OUTPUT_FILE)}.`);
};

generate();
