import React from "react";
import "./App.css";
import Popcorn from "./pages/Popcorn";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="popcorn" element={<Popcorn/>}></Route>
                <Route path="/" element={<Home/>}></Route>
                <Route path="product" element={<Product/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}



