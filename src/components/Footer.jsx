import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-slate-400 max-w-7xl mx-auto py-10 flex items-center justify-center text-center flex-col">
        <h3 className="text-xl mb-4">Share on social media</h3>
        <ul className="text-sm mt-4 flex items-center justify-center flex-wrap gap-3">
          <li>
            <a
              href="https://www.facebook.com/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <BsFacebook className="text-2xl text-slate-800 dark:text-slate-100 hover:text-blue-800 cursor-pointer" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <BsInstagram className="text-2xl text-slate-800 dark:text-slate-100 hover:text-blue-800" />
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <BsTwitter className="text-2xl text-slate-800 dark:text-slate-100 hover:text-blue-800" />
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <BsGithub className="text-2xl text-slate-800 dark:text-slate-100 hover:text-blue-800" />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
