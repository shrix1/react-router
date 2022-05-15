import { useNavigate, Link } from "react-router-dom";
//useNavigate is hook used in reactRouting

const Store = () => {
  const navigate = useNavigate();
  const pageRedirect = () => {
    navigate("/");
  };

  return (
    <>
      <h1
        className="text-6xl text-center mt-10 bg-sky-100 h-[90px]
       text-fuchsia-400"
      >
        store page
      </h1>
      <button
        onClick={pageRedirect}
        className="border-4 border-slate-800 bg-sky-400 ml-[850px] mt-6 
        p-4 rounded-md"
      >
        go to main page
      </button>
      <Link to="/">
        <button>go </button>
      </Link>
    </>
  );
};

export default Store;
