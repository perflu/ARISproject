import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import './App.css'
import MainPage from "./page/MainPage";
import Login from "./page/Login"
import Signup from "./page/Signup"
import BookDetailPage from "./page/BookDetailPage";
import MyPage from "./page/MyPage";
export default function App(){
    return(
        <Router>
           <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/SignUp" element={<Signup/>} />
                <Route path="/BookDetailPage" element={<BookDetailPage/>} />
                <Route path="/MyPage" element={<MyPage/>} />
            </Routes>
        </Router>
    )
}