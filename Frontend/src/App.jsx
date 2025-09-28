import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import SearchResults from './Routes/SearchResults.jsx'
import Experiment from './Routes/Experiment.jsx'; // Assuming you want to use Experiment component as well
import Home from "./Routes/Home.jsx"
import HomeExperiment from './Routes/HomeExperiment.jsx'
import RoomDetails from './Routes/RoomDetails.jsx';
import FavoritesPage from './Routes/FavoritesPage.jsx';
import UpdateRoomForm from './pages/UpdateRoomForm.jsx';
import BookMark from './Routes/BookMark.jsx';
import LoginUser from './pages/LoginUser.jsx';
import LoginOwner from './pages/LoginOwner.jsx';
import PostProperty from './pages/PostProperty.jsx';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/searchResult" element={<SearchResults/>} />
      <Route path='/ex' element={<Experiment  />} />
      <Route path='/homePage' element={<HomeExperiment  />} />
      <Route path='/roomDetails' element={<RoomDetails  />} />
      <Route path='/fp' element={<FavoritesPage></FavoritesPage>}></Route>
      <Route path='/update' element={<UpdateRoomForm></UpdateRoomForm>}></Route>
      <Route path='/bookmarks' element={<BookMark></BookMark>}></Route>
      <Route path='/user/login' element={<LoginUser></LoginUser>}></Route>
      <Route path='/seller/login' element={<LoginOwner></LoginOwner>}></Route>
      <Route path='/seller/upload' element={<PostProperty></PostProperty>}></Route>
    </Routes>
    </>
  )
}



export default App

