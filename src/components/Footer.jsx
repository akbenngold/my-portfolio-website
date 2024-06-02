import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaHashnode, FaLinkedin, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer p-10 bg-neutral-800 text-neutral-content flex flex-col  gap-12 section-container items-center">
      <div className="flex justify-between items-center w-[100%]">
        <aside className="text-4xl md:text-7xl">OJ_</aside>
        <nav className="flex flex-col gap-4 items-center">
          <h6 className="footer-title">Socials</h6>
          <div className="flex gap-4">
            <a href="https://x.com/akbenngold" target="_blank">
              <FaXTwitter size="1.5rem" />
            </a>
            <a href="https://github.com/akbenngold" target="_blank">
              <FaGithub size="1.5rem" />
            </a>
            <a href="https://hashnode.com/akbenngold" target="_blank">
              <FaHashnode size="1.5rem" />
            </a>
            <a href="https://linkedin.com/akbenngold" target="_blank">
              <FaLinkedin size="1.5rem" />
            </a>

            <a href="mailto:akbenngold@gmail.com" target="_blank">
              <AiOutlineMail size="1.5rem" />
            </a>
          </div>
        </nav>
      </div>
      <p className="">© Ojima || 2024</p>
    </footer>
  );
}

export default Footer;
