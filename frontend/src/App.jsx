import "./App.css";

import { Routes, Route, Link, } from "react-router-dom";
import About from "./Components/About/About";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/HomePage/HomePage";
import ProductList from "./Components/ProductList/ProductList";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {Container} from 'react-bootstrap'
import Products from "./Pages/Products/Products";
import Product from "./Pages/Product/Product";

function App() {
  return (
    <div className="App">

      <Header/>
      <main className='py-3'>
        <Container>
        <h1>Welcome to Grocerilla</h1>
        </Container>
      </main>

      {/* navbar */}
      {/* <nav>
        <h1>Grocery Deals Tracker</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </nav> */}

      {/* routes */}
        {/* <Routes>
          <Route path='/' element={<Home/>} exact />
          <Route path='/products' element={<Products/>} />
          <Route path='/product/:id' element={<Product/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/login' element={<Login/>} />
        </Routes> */}

        <Route path='/' component={Home} exact />
        <Route path='/products' component={Products} />
        <Route path='/product/:id' component={Product} />
        <Route path='/about' component={About} />
        <Route path='/login' component={Login} />

      {/* <Switch>
        <Route path="/" exact component={Home} />
      </Switch> */}
      <Footer/>
    </div>
  );
}

export default App;
