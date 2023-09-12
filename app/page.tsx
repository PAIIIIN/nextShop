"use client";
// NEXT
import Image from "next/image";
// React Query
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
// Components
import { Products } from "./components/Products";
import { Cart } from "./components/Cart";
// Layout
import Layout from "./layout/Layout";
// Redux
import { Provider } from "react-redux";
import { store } from "./store/store";

import "./styles/style.scss";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <Provider store={store}>
      <Layout>
        <QueryClientProvider client={queryClient}>
          <main className="py-16">
            <div className="mx-auto">
              <div className="hero flex">
                <div className="w-[50%] bg-[#F2ebe2] flex text-center items-center justify-center text-6xl">
                  <a href="#products">
                    Level Up Your Style <br /> With Us.
                  </a>
                </div>
                <div className="hero-image"></div>
              </div>
              <Products />
              <Cart />
            </div>
          </main>
        </QueryClientProvider>
      </Layout>
    </Provider>
  );
}
