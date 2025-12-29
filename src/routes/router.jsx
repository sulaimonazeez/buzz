import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from ".././components/Navbar";
import MusicDashboard from ".././pages/MyMusic";
//import Home from '.././pages/home';
import Search from '.././pages/search';
import Playlist from ".././pages/PlayList";
import Header from ".././components/nav/Header";


const AllRoute = () =>{
  return (
    <BrowserRouter>
       <Header />
       <Routes>
       <Route path='/' element={<MusicDashboard />} />
       <Route path='/search' element={<Search />} />
       <Route path='/playlist/:id' element={<Playlist />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AllRoute;