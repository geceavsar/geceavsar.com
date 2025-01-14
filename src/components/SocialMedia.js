import React from "react";

const SocialMedia = () => {
const socialLinks = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/geceavsar/",
        src: require("../assets/images/LinkedIn.svg").default,
    },
    {
        name: "Twitter",
        url: "https://twitter.com/gecedevonly",
        src: require("../assets/images/Twitter.svg").default,
    },
    {
        name: "GitHub",
        url: "https://github.com/geceavsar",
        src: require("../assets/images/GitHub.svg").default,
    },
];

  return (
    <div className="flex justify-center space-x-6 mt-6 fade-in-2s">
      {socialLinks.map((social) => (
        <a key={social.name} href={social.url} aria-label={social.name} target="_blank" rel="noreferrer">
          <img
            src={social.src}
            alt={social.name}
            width="24"
            height="24"
            class="svg-blue-on-hover"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
