import Nav from "./components/Nav";
import About from "./components/About";
import Store from "./components/Store";
import { BrowerRouter ,Route , Switch } form "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <About />
      <Store />
    </>
  );
}

export default App;
