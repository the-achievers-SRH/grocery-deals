import "./App.css";

import Home from "./Components/Home/Home";

import { Routes, Route, Link, } from "react-router-dom";

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
        </Routes>

      {/* <Switch>
        <Route path="/" exact component={Home} />
      </Switch> */}
    </div>
  );
}

export default App;
