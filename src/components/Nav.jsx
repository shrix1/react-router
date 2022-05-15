import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <div className="flex justify-around items-center h-[8vh] bg-sky-400">
        <Link to="/">
          <h1 className="text-4xl uppercase">shri</h1>
        </Link>

        <ul className="list-none flex justify-between items-center gap-10 underline">
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/store">
            <li>Store</li>
          </Link>
        </ul>
      </div>
    </>
  );
};
export default Nav;
