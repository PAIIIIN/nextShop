import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-600 py-10 text-white">
      <div className="flex flex-col items-center space-y-4">
        <ul className="flex items-center space-x-4">
          <li>
            <a
              className="text-2xl hover:-translate-y-2"
              href="https://www.instagram.com/s1lentce/">
              <AiOutlineInstagram />
            </a>
          </li>
          <li>
            <a
              className="text-2xl hover:-translate-y-2"
              href="https://github.com/PAIIIIN">
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a
              className="text-2xl hover:-translate-y-2"
              href="https://twitter.com/S1LENTCE">
              <BsTwitter />
            </a>
          </li>
        </ul>
        <ul className="flex space-x-4">
          <li>
            <a className="text-xl" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="text-xl" href="#">
              About
            </a>
          </li>
          <li>
            <a className="text-xl" href="#">
              Services
            </a>
          </li>
          <li>
            <a className="text-xl" href="#">
              Team
            </a>
          </li>
          <li>
            <a className="text-xl" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <p className="text-center mt-8">2023 S1lence &copy;</p>
    </footer>
  );
};

export { Footer };
