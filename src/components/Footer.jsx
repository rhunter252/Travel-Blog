import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-slate-400 max-w-7xl mx-auto py-10 flex items-center justify-center text-center flex-col">
        <h3 className="text-xl mb-4 text-slate-800">Share on social media</h3>
        <ul className="text-sm text-slate-600 mt-4 flex items-center justify-center flex-wrap gap-3">
          <li>
            <BsFacebook className="text-2xl text-slate-800 hover:text-blue-800" />
          </li>
          <li>
            <BsInstagram className="text-2xl text-slate-800 hover:text-blue-800" />
          </li>
          <li>
            <BsTwitter className="text-2xl text-slate-800 hover:text-blue-800" />
          </li>
          <li>
            <BsGithub className="text-2xl text-slate-800 hover:text-blue-800" />
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
