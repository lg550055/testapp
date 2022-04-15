import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Login from './components/Login';
import Profile from './components/Profile';
import NotFound from './components/NotFound';

export default function App() {
  const initialstate = localStorage.getItem('token');
  const [token, setToken] = useState(initialstate);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/profile' element={token ? <Profile/> : <Login setToken={setToken}/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
