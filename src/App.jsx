import "./App.css";

import { Routes, Route, Link, } from "react-router-dom";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import About from "./Components/About/About";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div className="App">

      {/* navbar */}
      <nav>
        <h1>Grocery Deals Tracker</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </nav>

      {/* routes */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>

      {/* <Switch>
        <Route path="/" exact component={Home} />
      </Switch> */}
    </div>
  );
}

export default App;
