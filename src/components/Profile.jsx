import React from "react";
import pic from "../assets/my-toonme.png";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Profile = () => {
  return (
    <>
      <div className="max-w-2xl my-20 mx-auto grid grid-cols-1 md:gap-8 bg-white md:grid-cols-2 rounded-lg shadow-lg md:place-items-center overflow-hidden">
        <article>
          <img src={pic} alt="Randy Hunter" className="md:h-64 object-cover" />
        </article>

        <article className="p-8 md:p-0 md:pr-8">
          <h3 className="text-2xl mb-4 text-slate-800">Randy Hunter</h3>
          <p>Front end web developer in ReactJS, based in North Carolina.</p>

          <ul className="flex items-center justify-start gap-2 pt-1">
            <li>
              <a href="https://www.linkedin.com/in/rhunter252/">
                <BsLinkedin className="text-2xl text-slate-800 hover:text-blue-800" />
              </a>
            </li>
            <li>
              <a href="https://github.com/rhunter252">
                <BsGithub className="text-2xl text-slate-800 hover:text-blue-600" />
              </a>
            </li>
          </ul>
        </article>
      </div>
    </>
  );
};

export default Profile;
