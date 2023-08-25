import Image from "next/image";
import { getProducts } from "../services/data";
import { useQuery, useQueryClient } from "react-query";
import { IProducts } from "../interface/data.interface";
import { FC } from "react";
import { useDispatch } from "react-redux";
// style
import style from "../styles/style.module.scss";
import { actions } from "../store/cart/cart.slice";

export const Products: FC = () => {
  const queryClient = useQueryClient();
  const { data } = useQuery(["products"], getProducts);
  const dispatch = useDispatch();

  return (
    <div>
      {data ? (
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]
        max-w-sm mx-auto md:max-w-none md:mx-0">
          {data
            .filter(
              (product: IProducts) =>
                product.category === "men's clothing" ||
                product.category === "women's clothing"
            )
            .map((product: IProducts) => {
              return (
                <div className={style.product} key={product.id}>
                  <Image
                    src={product.image}
                    alt="product image"
                    width={120}
                    height={100}
                  />
                  <h2>{product.title}</h2>
                  <p>${product.price}</p>
                  <button onClick={() => dispatch(actions.addToCart(product))}>
                    Add to Cart
                  </button>
                </div>
              );
            })}
        </div>
      ) : (
        <h1>Data Not Found</h1>
      )}
    </div>
  );
};
