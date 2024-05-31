import React from "react";
import SectionTitle from "./SectionTitle";
import { CiGlobe, CiMobile3 } from "react-icons/ci";
import { IoDocumentTextOutline } from "react-icons/io5";

const categories = [
  { title: "Web Development", icon: <CiGlobe /> },
  { title: "Mobile Apps", icon: <CiMobile3 /> },
  { title: "Technical Articles", icon: <IoDocumentTextOutline /> },
];

const projects = [
  {
    title: "Foodie",
    icon: <CiGlobe size="4rem" />,
    desc: "Ecommerce website sh Ecommerce website shEcommerce website shEcommerce website shEcommerce website shEcommerce website shEcommerce website shEcommerce website sh",
  },
  {
    title: "Web Development",
    icon: <CiGlobe size="4rem" />,
    desc: "Ecommerce website sh Ecommerce website shEcommerce website shEcommerce website shEcommerce website shEcommerce website shEcommerce website shEcommerce website sh",
  },
  {
    title: "Web Development",
    icon: <CiGlobe size="4rem" />,
    desc: "Ecommerce website sh Ecommerce website shEcommerce website shEcommerce website shEcommerce website shEcommerce website shEcommerce website shEcommerce website sh",
  },
  {
    title: "Web Development",
    icon: <CiGlobe size="4rem" />,
    desc: "Ecommerce website sh Ecommerce website shEcommerce website shEcommerce website shEcommerce website shEcommerce website shEcommerce website shEcommerce website sh",
  },
];

function Porfolio() {
  return (
    <div className="section-container py-16 px-16" id="portfolio">
      <SectionTitle
        title="Projects"
        subtitle="Open cards to see details about each project."
        // subtitle="Open cards to see projects on related category."
      />
      <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          return (
            <li className="rounded-md border-2 border-black p-6 flex flex-col gap-7 max-w-[100%]">
              {project.icon}
              <h2 className="text-xl font-medium">{project.title}</h2>
              <p>{project.desc}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Porfolio;
