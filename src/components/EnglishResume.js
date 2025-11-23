import React from "react";
import Header from "./Header";
import meImage from "../assets/images/me.png";


const EnglishResume = () => {
  const [mailto, setMailto] = React.useState("");

  React.useEffect(() => {
    const user = "geceavsar";
    const atSign = String.fromCharCode(64); // "@"
    const domain = ["gm", "ail"].join("");
    const tld = String.fromCharCode(99, 111, 109); // "com"
    const email = `${user}${atSign}${domain}.${tld}`;
    setMailto(`mailto:${email}`);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center px-4 bg-transparent fade-in-2s">

    <Header barType="en" />

      <main className="mt-8 w-full max-w-4xl p-6">
      <section className="mb-8">
        <img src={meImage} alt="Gizem in 2023" className="rounded-lg w-48 mx-auto mb-4" />
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-white dark:opacity-70">
          software developer for a while, computer engineer often, sometimes geek. <br />
          usually embeds code somewhere.
          </ul>
      </section>

      <section className="mb-8">
          <h2 className="text-xl font-medium text-gray-800 dark:text-white dark:opacity-70 border-b pb-2 mb-4">Work experience</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-white dark:opacity-70">
            <li>
              <strong>Software Engineer</strong> – Asis CT (now)
              <p className="text-sm text-gray-600 dark:text-white dark:opacity-70">
                GNU/Linux, C++, Qt/QML, BitBake, gRPC, CMake, Bash, Docker, Jira
              </p>
            </li>
            <li>
              <strong>Software Engineer</strong> – Siemens (Aug 2020 - Oct 2024)
              <p className="text-sm text-gray-600 dark:text-white dark:opacity-70">
                GNU/Linux, C++, Qt/QML, Python, CMake, Bash, Docker, Azure DevOps
              </p>
            </li>
            <li>
              <strong>Software Engineering Intern</strong> – GE Aviation (Jul 2019 - Jan 2020)
              <p className="text-sm text-gray-600 dark:text-white dark:opacity-70">
                LaTeX, Bash, AWK, Docker, DokuWiki, Jenkins
              </p>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-medium text-gray-800 border-b pb-2 mb-4 dark:text-white dark:opacity-70">Education</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-white dark:opacity-70">
            <li>
              <strong>Computer Engineering</strong> – Istanbul Technical University
              <ul className="list-circle pl-6 space-y-2 text-gray-700 dark:text-white dark:opacity-70">
                <li>MSc - ongoing</li>
                <li>BSc - 2021</li>
              </ul>
            </li>
            <li>
              <strong>Control and Automation Engineering</strong> – Istanbul Technical University
              <ul className="list-circle pl-6 space-y-2 text-gray-700 dark:text-white dark:opacity-70">
                <li>BSc - 2019</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-medium text-gray-800 border-b pb-2 mb-4 dark:text-white dark:opacity-70">Contact</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-white dark:opacity-70">
              {mailto ? (
                <a className="underline" href={mailto}>{mailto.replace("mailto:", "")}</a>) : 
                ("geceavsar [at] gmail [dot] com")}
          </ul>
        </section>         
      </main>
    </div>
  );
};

export default EnglishResume;
