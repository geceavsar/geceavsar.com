import React from "react";
import Header from "./Header";

const TurkceOzgecmis = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 bg-transparent fade-in-2s">

    <Header language="tr" />

    <main className="mt-8 w-full max-w-4xl p-6">
        <section className="mb-8">
          <h2 className="text-xl font-medium text-gray-800 border-b pb-2 mb-4">Kariyer</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>freelancer</strong> (şu an)
              <p className="text-sm text-gray-600">
                veri yapıları, algoritmalar, React, Node.js, Tailwind CSS, bir sürü şey
              </p>
            </li>
            <li>
              <strong>Software Engineer</strong> – Siemens (Ağu 2020 - Eki 2024)
              <p className="text-sm text-gray-600">
                GNU/Linux, C++, Qt/QML, Python, CMake, Bash, Docker, Azure DevOps
              </p>
            </li>
            <li>
              <strong>Software Engineering Intern</strong> – GE Aviation (Ağu 2019 - Oca 2020)
              <p className="text-sm text-gray-600">
                LaTeX, Bash, AWK, Docker, DokuWiki, Jenkins
              </p>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-medium text-gray-800 border-b pb-2 mb-4">Eğitim</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Bilgisayar Mühendisliği</strong> – İstanbul Teknik Üniversitesi, 2021
            </li>
            <li>
              <strong>Kontrol ve Otomasyon Mühendisliği</strong> – İstanbul Teknik Üniversitesi, 2019
            </li>
          </ul>
        </section>

      </main>
    </div>
  );
};

export default TurkceOzgecmis;
