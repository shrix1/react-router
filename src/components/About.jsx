import { useNavigate } from "react-router";
//useNavigate is hook used in reactRouting

const About = () => {
  const navigate = useNavigate();
  const pageRedirect = () => {
    navigate("/");
  };

  return (
    <>
      <h1
        className="text-5xl text-center bg-slate-500 
      text-fuchsia-300 h-[80px] mt-10"
      >
        About page
      </h1>

      <button
        onClick={pageRedirect}
        className="border-4 border-slate-800 bg-sky-400 
        mt-6 p-4 rounded-md ml-[850px]"
      >
        go to main page
      </button>
    </>
  );
};

export default About;
