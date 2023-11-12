import React from "react";
import "./App.css";
import Popcorn from "./pages/Popcorn";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";

export default function App() {
    return (
        <div>
            <h1>Hello, React</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="popcorn" element={<Popcorn/>}></Route>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="product" element={<Product/>}></Route>
                    <Route path="*" element={<NotFound></NotFound>} />
                </Routes>
            </BrowserRouter>
        </div>

    );
}



