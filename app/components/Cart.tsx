import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { actions as cartItemAction } from "../store/cart/cart.slice";
import { useDispatch } from "react-redux";
import { actions as handleCloseAction } from "../store/cart/togleHandler.slice";
import { IProducts } from "../interface/data.interface";
import Image from "next/image";
import { BsTrash } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

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
      className={`w-full bg-white fixed top-0 h-full md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] shadow-2xl overflow-scroll ${
        isOpen ? "right-0" : "-right-full"
      }`}>
      <button
        className="flex justify-end w-full"
        onClick={() => dispatch(handleCloseAction.closeHandler())}>
        <FaArrowRight className="text-4xl text-gray-800 hover:text-blue-500 transition duration-300 cursor-pointer" />
      </button>
      {Items
        ? Items.map((product: IProducts) => {
            return (
              <div
                className="flex items-center w-full border-b border-gray-300 py-4"
                key={product.id}>
                <div className="w-24 h-24 relative rounded-full overflow-hidden">
                  <Image
                    alt="product image"
                    src={product.image}
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col ml-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {product.title}
                    </h3>
                    <p className="text-lg text-gray-800">${product.price}</p>
                    <div className="flex items-center space-x-2"></div>
                  </div>
                  <div>
                    <div>
                      <p className="text-lg text-gray-800">
                        Quantity: {product.quantity}
                      </p>
                      <button
                        onClick={() =>
                          dispatch(cartItemAction.increaseQuantity(product))
                        }
                        className="text-xl text-blue-500 hover:text-blue-800 transition duration-300">
                        +
                      </button>
                      <button
                        onClick={() =>
                          dispatch(cartItemAction.decreaseQuantity(product))
                        }
                        className="text-xl text-red-500 hover:text-red-800 transition duration-300">
                        -
                      </button>
                    </div>
                    <button
                      onClick={() =>
                        dispatch(cartItemAction.deleteFromCart(product))
                      }
                      className="text-xl text-red-500 hover:text-red-800 transition duration-300">
                      <AiFillCloseCircle />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        : null}
      <div className="mt-4">
        {totalPrice ? (
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold text-gray-800">Total Price:</p>
            <p className="text-lg text-gray-800">${totalPrice.toFixed(2)}</p>
            <button
              onClick={() => dispatch(cartItemAction.clearCart())}
              className="text-2xl text-red-500 hover:text-red-800 transition duration-300">
              <BsTrash />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};
