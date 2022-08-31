import React, { useState, useEffect } from "react";
import './App.css';
import {Routes, Route, HashRouter} from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import MyAppbar from './components/Appbar';
import PrivateRoute  from './Privateroute';
import { AuthProvider } from './context/AuthContext'
import { AuthWrapper } from "./AppWrapper";
import Page2 from "./components/page2";

const  App = () => {



    return (
    <AuthProvider>
      <AuthWrapper >
      <div className="App">
        <HashRouter>
        
          <MyAppbar/>
          <header className="App-header">
          <Routes>
              <Route exact path='/page2' element={<PrivateRoute/>}>
                <Route exact path='/page2' element={<Page2/>}/>
              </Route>
            <Route path="login" element={<Login />} /> 
            <Route path="register" element={<Register />} />
            <Route exact path='/' element={<Home/>}/>
          </Routes>
          </header>
          
        </HashRouter>
      </div>
      </AuthWrapper>
    </AuthProvider>
    );
}

export default App;
