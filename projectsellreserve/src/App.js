import { Slide, ToastContainer } from "react-toastify";
import React from "react";
import Router from "./routes/Router";
import Spinner from "./components/Spinner";
import useLoading from "./hooks/useLoading";

export default function App() {
  const { loading } = useLoading();

  return (
    <>
      {loading && <Spinner />}
      <Router />
      <ToastContainer
        autoClose="1000"
        theme="light"
        position="bottom-center"
        transition={Slide}
      />
    </>
  );
}
