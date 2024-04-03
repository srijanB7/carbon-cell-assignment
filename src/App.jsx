import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Population from "./pages/Population/Population";
import Crypto from "./pages/Crypto/Crypto";
import Home from "./pages/Home/Home";
import "./App.css";

function App() {
    return (
        <div className="page">
            <div className="left">
                <Sidebar />
            </div>
            <div className="right">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/population" element={<Population />} />
                    <Route path="/crypto" element={<Crypto />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
