import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import ProtectedRoute from "./pages/ProtectedRoute";
import Layout from "./pages/Layout";
import Freq from "./pages/freq";
import Recommendations from "./pages/Recommendations";
import Home from "./pages/Home"
import Login from "./pages/Login";

function App() { 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} >
            <Route path="/" element={<Home/>}/>                
            <Route path="/login" element={<Login/>}/>                
            <Route path="user" element={<ProtectedRoute/>}>
              <Route index element={<Freq/>}/>              
              <Route path="recommendation" element={<Recommendations/>}/>
            </Route>   
          </Route>     
        </Routes>
      </BrowserRouter>
             
    </>
  )
}

export default App
