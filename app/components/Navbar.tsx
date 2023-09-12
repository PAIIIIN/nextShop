import { FC } from "react";
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/cart/togleHandler.slice";
import { RootState } from "../store/store";

export const Navbar: FC = () => {
  const isClose = useSelector((state: RootState) => state.toggleHandler);
  const dispatch = useDispatch();

  return (
    <header className="bg-[#F2ebe2] fixed w-full z-10 shadow-md p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-gray-800 hover:text-blue-500 transition duration-300">
          <AiFillHome className="text-2xl" />
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/register"
              className="text-lg text-gray-800 hover:text-blue-500 transition duration-300">
              Sign In
            </Link>
          </li>
          <li>
            <button
              onClick={() => dispatch(actions.openHandler())}
              className="text-2xl text-gray-800 hover:text-blue-500 transition duration-300">
              <BsCart3 />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
