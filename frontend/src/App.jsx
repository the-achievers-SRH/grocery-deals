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

function App() {
    return (
        <div className="App">
  
        <Header/>
        <main className='py-0'>
            <Container>
            <h1>Welcome to Grocerilla</h1> 
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/products' element={<ProductList/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/login' element={<Login/>} />
            </Routes>
            </Container>
        </main>
        <Footer/>

        {/* routes */}
         
  
        {/* <Switch>
          <Route path="/" exact component={Home} />
        </Switch> */}
      </div>
    );
  }
  
  export default App;
  