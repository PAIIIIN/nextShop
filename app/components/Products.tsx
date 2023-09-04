import Image from "next/image";
import { getProducts } from "../services/data";
import { useQuery, useQueryClient } from "react-query";
import { IProducts } from "../interface/data.interface";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../store/cart/cart.slice";
import { AiFillEye } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

export const Products: FC = () => {
  const queryClient = useQueryClient();
  const { data } = useQuery(["products"], getProducts);
  const dispatch = useDispatch();

  const handleAddToCart = (
    id: number,
    title: string,
    price: string,
    quantity: number,
    image: string
  ) => {
    dispatch(actions.addToCart({ id, quantity, title, price, image }));
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      {data ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-screen-xl mx-auto">
          {data
            .filter(
              (product: IProducts) =>
                product.category === "men's clothing" ||
                product.category === "women's clothing"
            )
            .map((product: IProducts) => {
              return (
                <div
                  key={product.id}
                  className="bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-transform duration-300 ease-in-out">
                  <div className="relative h-40 w-40 mx-auto">
                    <Image
                      src={product.image}
                      alt="product image"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {product.title}
                    </h2>
                    <div className="flex items-center space-x-2">
                      <AiFillEye className="text-gray-600 text-xl" />
                      <button
                        onClick={() =>
                          handleAddToCart(
                            product.id,
                            product.title,
                            product.price,
                            1,
                            product.image
                          )
                        }
                        className="bg-blue-500 text-white px-3 py-1 rounded-lg">
                        <AiOutlinePlus className="text-xl" />
                      </button>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-700">${product.price}</p>
                </div>
              );
            })}
        </div>
      ) : (
        <h1 className="text-2xl font-semibold text-center mt-8">
          Data Not Found
        </h1>
      )}
    </div>
  );
};
