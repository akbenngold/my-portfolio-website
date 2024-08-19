import React from "react";
import SectionTitle from "./SectionTitle";
import { CiGlobe, CiMobile3, CiSignpostDuo1} from "react-icons/ci";
import { IoDocumentTextOutline } from "react-icons/io5";
import Button from "./Button";

const categories = [
  { title: "Web Development", icon: <CiGlobe /> },
  { title: "Mobile Apps", icon: <CiMobile3 /> },
  { title: "Technical Articles", icon: <IoDocumentTextOutline /> },
];

const projects = [
  {
    title: "Foodi",
    icon: <CiGlobe size="4rem" />,
    desc: "A restaurant webapp where users can login and order food online. Also has an admin panel. Built with MERN stack and Firebase",
    sourcecode: "github.com",
    livesite: "akbenngold.github.com",
  },
  {
  title: "Chatter",
  icon: <CiSignpostDuo1 size="4rem" />,
  desc: "Microblogging webapp where users can login, make posts, follow other users, like and comment. Built with React, Firebase, Typescript",
   sourcecode: "github.com",
     livesite: "https://www.chattershub.netlify.app",
  },
  // {
  //   title: "Web Development",
  //   icon: <CiGlobe size="4rem" />,
  //   desc: "Ecommerce website sh Ecommerce website shEcommerce website shEcommerce website shEcommerce website shEcommerce website shEcommerce website shEcommerce website sh",
  //   sourcecode: "github.com",
  //   livesite: "akbenngold.github.com",
  // },
  {
    title: "Articles on Hashnode",
    icon: <IoDocumentTextOutline size="4rem" />,
    desc: "Check out my techincal articles on hashnode. I write about React, TypeScript, How-To's, Responsive design and best practices",
    livesite: "https://hashnode.com/@akbenngold",
  },
];

function Porfolio() {
  return (
    <div className="section-container py-20 px-16" id="portfolio">
      <SectionTitle
        title="Projects"
        subtitle="Open cards to see details about each project."
        // subtitle="Open cards to see projects on related category."
      />
      <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          return (
            <li className="rounded-md border-2 border-black p-4 flex flex-col gap-4 max-w-[100%]">
              {project.icon}
              <h2 className="text-xl font-medium">{project.title}</h2>
              <p>{project.desc}</p>
              <div className="flex flex-col gap-2">
                <button
                  className={`btn border-2 border-black bg-none rounded-full text-xs ${
                    project.livesite === "https://hashnode.com/@akbenngold" &&
                    "hidden"
                  }`}
                >
                  <a href={project.sourcecode}>Source Code</a>{" "}
                </button>
                <Button>
                  <a className="text-xs" href={project.livesite}>
                    {project.livesite === "https://hashnode.com/@akbenngold"
                      ? "Open"
                      : "Live Site"}
                  </a>
                </Button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Porfolio;
