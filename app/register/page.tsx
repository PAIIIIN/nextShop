"use client";

import SignIn from "@/app/components/signIn";
import Layout from "../layout/Layout";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { Cart } from "../components/Cart";

const SignInPage = () => {
  return (
    <Provider store={store}>
      <Layout>
        <div className="max-w-md w-full mx-auto bg-white p-8 rounded-md shadow-md">
          <SignIn />
          <Cart />
        </div>
      </Layout>
    </Provider>
  );
};

export default SignInPage;
