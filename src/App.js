import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import 'antd/dist/antd.min.css';

import HomePage from './pages/HomePage'
import ItemPage from './pages/ItemPage'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/items" element={<ItemPage />} />
                </Routes>
            </BrowserRouter>
        </>

    );
}

export default App;
