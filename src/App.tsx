import React from "react";
import "./App.css";
import Popcorn from "./pages/Popcorn";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Bank from "./pages/Bank";
import {Counter} from "./components/counter/Counter";
import {write} from "fs";

export default function App() {
    return (
        <div>
            <h1>Hello, React</h1>
            <ul>
                <li><Link to='/popcorn' style={linkClass}>Popcorn</Link></li>
                <li><Link to='/' style={linkClass}>Home</Link></li>
                <li><Link to='/product' style={linkClass}>Product</Link></li>
                <li><Link to='/bank' style={linkClass}>Bank</Link></li>
                <li><Link to='/counter' style={linkClass}>Counter</Link></li>
            </ul>
                <Routes>
                    <Route path="popcorn" element={<Popcorn/>}></Route>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="product" element={<Product/>}></Route>
                    <Route path="bank" element={<Bank/>}></Route>
                    <Route path="counter" element={<Counter/>}></Route>
                    <Route path="*" element={<NotFound></NotFound>}/>
                </Routes>
        </div>

    );
}

const linkClass = {
    color: 'white',
    fontSize: '20'
}



