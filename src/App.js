import Nav from "./components/Nav";
import About from "./components/About";
import Store from "./components/Store";
import Error from "./components/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Nav />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// BrowserRouter -> is basically a div like thing we add the routing
//                 components in it to route to the particular page

//        Routes -> is nothing but when we specify the route path we need
//                 use it a paired tag

//          Route -> by using Route we set path to the components using
//                  "path"  attribute and path to navigate to the componet as
//                  "element" attribute

//path="*" => is random wrong stuff eg;- /sasasa it route top error page
