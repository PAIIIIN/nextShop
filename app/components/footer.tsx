import React from "react";
import Link from "next/link";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F2ebe2] py-10 text-gray-800">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <ul className="flex items-center space-x-4">
          <li>
            <Link
              href="https://www.instagram.com/s1lentce/"
              className="text-xl hover:text-blue-500 transition duration-300">
              <AiOutlineInstagram />
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/PAIIIIN"
              className="text-xl hover:text-blue-500 transition duration-300">
              <AiFillGithub />
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/S1LENTCE"
              className="text-xl hover:text-blue-500 transition duration-300">
              <BsTwitter />
            </Link>
          </li>
        </ul>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/"
              className="text-xl hover:text-blue-500 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-xl hover:text-blue-500 transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="text-xl hover:text-blue-500 transition duration-300">
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/team"
              className="text-xl hover:text-blue-500 transition duration-300">
              Team
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-xl hover:text-blue-500 transition duration-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <p className="text-center mt-8">2023 S1lence &copy;</p>
    </footer>
  );
};

export { Footer };
