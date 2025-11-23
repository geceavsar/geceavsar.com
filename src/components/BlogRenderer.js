import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import Header from "./Header";
import postsData from "../generated/posts.json";

const toArray = (value) => (Array.isArray(value) ? value : []);

const formatDate = (value) => {
  try {
    return new Intl.DateTimeFormat("tr", { dateStyle: "long" }).format(
      new Date(value)
    );
  } catch {
    return value;
  }
};

const BlogRenderer = () => {
  const markdownComponents = useMemo(
    () => ({
      h1: ({ node, children, ...props }) => (
        <h1
          className="mt-12 mb-6 text-4xl font-semibold text-slate-900 dark:text-white dark:opacity-90"
          {...props}
        >
          {children}
        </h1>
      ),
      h2: ({ node, children, ...props }) => (
        <h2
          className="mt-10 mb-4 text-3xl font-semibold text-slate-900 dark:text-white dark:opacity-90"
          {...props}
        >
          {children}
        </h2>
      ),
      h3: ({ node, children, ...props }) => (
        <h3
          className="mt-8 mb-3 text-2xl font-semibold text-slate-900 dark:text-white dark:opacity-90"
          {...props}
        >
          {children}
        </h3>
      ),
      h4: ({ node, children, ...props }) => (
        <h4
          className="mt-6 mb-3 text-xl font-semibold text-slate-900 dark:text-white dark:opacity-90"
          {...props}
        >
          {children}
        </h4>
      ),
      p: ({ node, children, ...props }) => (
        <p className="mt-4 leading-7 text-slate-700 dark:text-gray-200" {...props}>
          {children}
        </p>
      ),
      ul: ({ node, children, ...props }) => (
        <ul
          className="mt-4 list-disc pl-6 text-slate-700 marker:text-slate-400 dark:text-gray-200 dark:marker:text-gray-400"
          {...props}
        >
          {children}
        </ul>
      ),
      ol: ({ node, children, ...props }) => (
        <ol
          className="mt-4 list-decimal pl-6 text-slate-700 marker:text-slate-400 dark:text-gray-200 dark:marker:text-gray-400"
          {...props}
        >
          {children}
        </ol>
      ),
      blockquote: ({ node, children, ...props }) => (
        <blockquote
          className="mt-6 border-l-4 border-blue-200 pl-4 text-slate-600 italic dark:border-blue-400/40 dark:text-gray-200"
          {...props}
        >
          {children}
        </blockquote>
      ),
      code: ({ inline, className, children, ...props }) => {
        if (inline) {
          return (
            <code
              className="rounded bg-slate-100 px-1.5 py-0.5 text-sm dark:bg-slate-800 dark:text-slate-100"
              {...props}
            >
              {children}
            </code>
          );
        }

        return (
          <code
            className="block overflow-x-auto rounded-lg bg-slate-900/90 p-4 text-sm text-slate-100 dark:bg-slate-800"
            {...props}
          >
            {children}
          </code>
        );
      },
      a: ({ node, children, ...props }) => (
        <a
          className="text-blue-600 underline-offset-2 hover:underline dark:text-blue-400"
          {...props}
        >
          {children}
        </a>
      ),
      table: ({ node, children, ...props }) => (
        <div className="mt-6 overflow-x-auto">
          <table
            className="w-full border-collapse text-left text-sm text-slate-700 dark:text-gray-200"
            {...props}
          >
            {children}
          </table>
        </div>
      ),
      th: ({ node, children, ...props }) => (
        <th
          className="border-b border-slate-200 px-3 py-2 font-semibold dark:border-gray-600"
          {...props}
        >
          {children}
        </th>
      ),
      td: ({ node, children, ...props }) => (
        <td className="border-b border-slate-100 px-3 py-2 dark:border-gray-700" {...props}>
          {children}
        </td>
      ),
    }),
    []
  );

  const { slug } = useParams();
  const allPosts = useMemo(
    () => (Array.isArray(postsData) ? postsData : []),
    []
  );

  const sortedPosts = useMemo(
    () =>
      [...allPosts].sort(
        (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
      ),
    [allPosts]
  );

  if (slug) {
    const post = sortedPosts.find((entry) => entry.slug === slug);
    const tags = toArray(post?.tags);

    if (!post) {
      return (
        <div className="min-h-screen flex flex-col items-center px-4 bg-transparent fade-in-2s text-gray-800 dark:text-white dark:opacity-80">
          <Header barType="blog" />
          <main className="mt-8 w-full max-w-4xl p-6">
            <div className="rounded-lg border border-gray-200 p-8 text-center dark:border-gray-700">
              <h2 className="text-2xl font-semibold dark:text-white dark:opacity-90">Gönderi bulunamadı :(</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Üzgünüm, aradığınız gönderi mevcut değil ya da gönderiyi taşımış olabilirim.
              </p>
              <Link
                to="/blog"
                className="mt-6 inline-flex items-center gap-2 text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
              >
                ← Tüm gönderilere geri dön
              </Link>
            </div>
          </main>
        </div>
      );
    }

    return (
      <div className="min-h-screen flex flex-col items-center px-4 bg-transparent fade-in-2s text-gray-800 dark:text-white dark:opacity-80">
        <Header barType="blog" />
        <main className="mt-8 w-full max-w-4xl p-6">
          <article>
            <header className="border-b border-gray-200 pb-6 dark:border-gray-700">
              <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                {formatDate(post.publishedAt)} · {post.readingTimeMinutes} dakikalık okuma
              </p>
              <h1 className="mt-4 text-3xl font-semibold dark:text-white dark:opacity-90">
                {post.title}
              </h1>
              {post.description && (
                <p className="mt-3 text-gray-600 dark:text-gray-300">{post.description}</p>
              )}
              {tags.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-300">
                  {tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-gray-200 px-3 py-0.5 dark:border-gray-600"
                    >
                      #{tag}
                    </li>
                  ))}
                </ul>
              )}
            </header>
            <div className="mt-8 space-y-6 text-gray-700 dark:text-gray-200">
              <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={markdownComponents}
              >
                {post.content}
              </ReactMarkdown>
            </div>
            <footer className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-700">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
              >
                ← Tüm gönderilere geri dön
              </Link>
            </footer>
          </article>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center px-4 bg-transparent fade-in-2s text-gray-800 dark:text-white dark:opacity-80">
      <Header barType="blog" />
      <main className="mt-8 w-full max-w-4xl p-6">
        <section>
          <header className="text-center">
            <h1 className="text-3xl font-semibold dark:text-white dark:opacity-90">Blog</h1>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Teknik notlar, incelemeler ve zaman buldukça yazdığım şeyler.
            </p>
          </header>
          <div className="mt-10">
            {sortedPosts.length === 0 && (
              <p className="text-center text-gray-600 dark:text-gray-300">
                Henüz yayınladığım bir gönderi yok.
              </p>
            )}
            {sortedPosts.length > 0 && (
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {sortedPosts.map((post) => {
                  const tags = toArray(post.tags);
                  return (
                    <article key={post.slug} className="py-6">
                      <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        {formatDate(post.publishedAt)} · {post.readingTimeMinutes} dakikalık okuma
                      </p>
                      <Link to={`/blog/${post.slug}`}>
                        <h2 className="mt-2 text-2xl font-semibold text-gray-800 hover:text-blue-600 dark:text-white dark:opacity-90 dark:hover:text-blue-400">
                          {post.title}
                        </h2>
                      </Link>
                      {post.description && (
                        <p className="mt-2 text-gray-600 dark:text-gray-300">{post.description}</p>
                      )}
                      {tags.length > 0 && (
                        <ul className="mt-3 flex flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-300">
                          {tags.map((tag) => (
                            <li
                              key={tag}
                              className="rounded-full border border-gray-200 px-3 py-0.5 dark:border-gray-600"
                            >
                              #{tag}
                            </li>
                          ))}
                        </ul>
                      )}
                      <Link
                        to={`/blog/${post.slug}`}
                        className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        Devamı →
                      </Link>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogRenderer;
