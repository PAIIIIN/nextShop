import { FC, useState } from "react";
// Redux
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../store/store";
import { actions as cartItemAction } from "../store/cart/cart.slice";
import { useDispatch } from "react-redux";
import { actions as handleCloseAction } from "../store/cart/togleHandler.slice";
//interface
import { IProducts } from "../interface/data.interface";
// next Image
import Image from "next/image";
// react icons
import { BsTrash } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { current } from "@reduxjs/toolkit";

export const Cart: FC = () => {
  const dispatch = useDispatch();
  const Items = useSelector((state: RootState) => state.CartItems);
  const isOpen = useSelector((state: any) => state.toggleHandler);
  const prices = Items.map(
    (product: IProducts) => parseFloat(product.price) * product.quantity
  );
  const totalPrice = prices.reduce(
    (accumulator: number, currentValue: number) => accumulator + currentValue,
    0
  );

  return (
    <div
      className={`w-full bg-white fixed top-0 h-full 
    md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] shadow-2xl overflow-scroll ${
      isOpen ? "right-0" : "-right-full"
    }`}>
      <button
        className="flex justify-end w-full"
        onClick={() => dispatch(handleCloseAction.closeHandler())}>
        <AiFillCloseCircle />
      </button>
      {Items
        ? Items.map((product: IProducts) => {
            return (
              <div className="flex items-center  w-full" key={product.id}>
                <Image
                  alt="product image"
                  src={product.image}
                  width={100}
                  height={100}
                />
                <div className="flex flex-col justify-between">
                  <div className="flex justify-between">
                    <h3>{product.title}</h3>
                    <p>${product.price}</p>
                    <div>
                      <p>quantity: {product.quantity}</p>
                      <button
                        onClick={() =>
                          dispatch(cartItemAction.increaseQuantity(product))
                        }>
                        +
                      </button>
                      <button
                        onClick={() =>
                          dispatch(cartItemAction.decreaseQuantity(product))
                        }>
                        -
                      </button>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() =>
                        dispatch(cartItemAction.deleteFromCart(product))
                      }>
                      <BsTrash />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        : null}
      <div>
        {totalPrice ? <p>total price: ${totalPrice.toFixed(2)}</p> : null}
      </div>
    </div>
  );
};
