import "./index.css";
import React from "react";
import {Route, Routes} from "react-router-dom"
import Instruments from "./layout/Instruments";
import Quotes from "./layout/Quotes";

export default function App() {
    return (
            <div className="App">
                <Routes>
                    <Route path="/" element={ <Instruments/> } />
                    <Route path="quotes/:symbol" element={ <Quotes/> } />
                </Routes>
            </div>
    );
}

