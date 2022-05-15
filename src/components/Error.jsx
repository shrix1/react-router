import { useNavigate } from "react-router";
//useNavigate is hook used in reactRouting

export default function Error() {
  const navigate = useNavigate();
  const pageRedirect = () => {
    navigate("/");
  };
  //syntax = hook("path") => eg:- navigate("/about")

  return (
    <>
      <h1 className="text-6xl text-center mt-10 bg-sky-100 h-[90px] text-slate-600">
        Error page 404
      </h1>
      <button
        onClick={pageRedirect}
        className="border-4 border-slate-800 bg-sky-400 ml-[850px] mt-6 p-4"
      >
        go to main page
      </button>
    </>
  );
  //by onClick to do the hook to navigate to main page
}
