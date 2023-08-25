import { FC, useState } from "react";
// NEXT
import Link from "next/link";
// React Icons
import { BsCart3 } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/cart/togleHandler.slice";
import { RootState } from "../store/store";

export const Navbar: FC = () => {
  const isClose = useSelector((state: RootState) => state.toggleHandler);
  const isOpen = isClose;
  const dispatch = useDispatch();
  return (
    <header className="className='bg-[#F5E6E0] fixed w-full z-10'">
      <div className="container flex items-center justify-between mx-auto h-full">
        <div>
          <Link href="/">
            <AiFillHome />
          </Link>
        </div>
        <div className="flex w-[200px] justify-between">
          <Link href="/register">sign in</Link>
          <button onClick={() => dispatch(actions.openHandler())}>
            <BsCart3 />
          </button>
        </div>
      </div>
    </header>
  );
};
