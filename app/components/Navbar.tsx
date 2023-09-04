import { FC } from "react";
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { Provider, useDispatch, useSelector } from "react-redux";
import { actions } from "../store/cart/togleHandler.slice";
import { RootState } from "../store/store";

export const Navbar: FC = () => {
  const isClose = useSelector((state: RootState) => state.toggleHandler);
  const isOpen = isClose;
  const dispatch = useDispatch();

  return (
    <header className="bg-[#F5E6E0] fixed w-full z-10 shadow-md">
      <div className="container mx-auto flex items-center justify-between h-16">
        <div className="text-3xl">
          <Link href="/">
            <AiFillHome className="text-gray-800 cursor-pointer hover:text-blue-500 transition duration-300" />
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link
            href="/register"
            className="text-lg text-gray-800 hover:text-blue-500 transition duration-300">
            Sign In
          </Link>
          <button
            onClick={() => dispatch(actions.openHandler())}
            className="text-2xl text-gray-800 hover:text-blue-500 transition duration-300">
            <BsCart3 />
          </button>
        </div>
      </div>
    </header>
  );
};
