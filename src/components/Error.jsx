import React from "react";
import { useNavigate } from "react-router";

export default function Error() {
  const navigate = useNavigate();
  const pageRedirect = () => {
    navigate("/");
  };
  return (
    <>
      <h1 className="text-6xl text-center mt-10 bg-sky-100 h-[90px] text-slate-600">
        Error page
      </h1>
      <button
        onClick={pageRedirect}
        className="border-4 border-slate-800 bg-sky-400 ml-[850px] mt-6 p-4"
      >
        go to main page
      </button>
    </>
  );
}
