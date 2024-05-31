import React from "react";
import SectionTitle from "./SectionTitle";
import { MdOutlineScreenshotMonitor, MdSpeed } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { GrConnect } from "react-icons/gr";
import { GoBug } from "react-icons/go";
import Button from "./Button";

const services = [
  { title: "Responsive Design", icon: <MdOutlineScreenshotMonitor /> },
  { title: "Performance Optimization", icon: <MdSpeed /> },
  { title: "Testing and Debugging", icon: <GoBug /> },
  { title: "User Documentation", icon: <IoDocumentTextOutline /> },
  { title: "Developer Documentation", icon: <FaCode /> },
  { title: "API Integration", icon: <GrConnect /> },
];
function Services() {
  return (
    <div className="section-container py-16 flex flex-col items-center gap-8">
      <SectionTitle title="Services" subtitle="Services I am providing you." />
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {services.map((service) => {
          return (
            <li className="bg-neutral-300 text-xs md:text-base py-2 px-3 rounded-md font-semibold flex gap-4 items-center">
              {service.icon} {service.title}
            </li>
          );
        })}
      </ul>{" "}
      <Button className="text-xs" size="small">
        View All
      </Button>
    </div>
  );
}

export default Services;
