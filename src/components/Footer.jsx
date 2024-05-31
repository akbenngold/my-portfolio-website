import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaHashnode, FaLinkedin, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer p-10 bg-neutral-800 text-neutral-content flex justify-between gap-12 section-container">
      <aside className="text-7xl">OJ.</aside>
      <nav className="flex flex-col gap-4 items-center">
        <h6 className="footer-title">Social</h6>
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
        <p> @akbenngold</p>
      </nav>
    </footer>
  );
}

export default Footer;
