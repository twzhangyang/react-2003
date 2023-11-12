import React from "react";
import "./App.css";
import Popcorn from "./pages/Popcorn";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Bank from "./pages/Bank";

export default function App() {
    return (
        <div>
            <h1>Hello, React</h1>
            <ul>
                <li><Link to='/popcorn'>Popcorn</Link></li>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/product'>Product</Link></li>
                <li><Link to='/bank'>Bank</Link></li>
            </ul>
                <Routes>
                    <Route path="popcorn" element={<Popcorn/>}></Route>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="product" element={<Product/>}></Route>
                    <Route path="bank" element={<Bank/>}></Route>
                    <Route path="*" element={<NotFound></NotFound>}/>
                </Routes>
        </div>

    );
}



