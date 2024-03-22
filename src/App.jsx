import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Card from './components/Cards/Card'
import BoxSection from './components/Box/Box'
import LeftSection from './components/LeftSection/LeftSection'
import Home from './pages/basic pages/Home'
import {Routes,Route} from "react-router-dom" 
import Signup from "./authcomponents/Signup.jsx"
import Adminpanel from './adminpanel/Adminpanel.jsx'
import Login from './authcomponents/Login.jsx'
import  Application  from './adminpanel/Application.jsx'
import Getlawyers from './adminpanel/Getlawyers.jsx'
import Chatting from './chatting/Chatting.jsx';
import LegalResources from './legalcomponnents/Legalresources.jsx'
import { BrowserRouter } from 'react-router-dom';
import Front from "./homepage/Front.jsx"
import Chatsection from './chatting/Chatsection.jsx'
function App() {


  return (
    <BrowserRouter>

  <Routes>
<Route path='/' element={<Front/>}/>
<Route path='/signup' element={<Signup/>}></Route>
<Route path='/admin-panel' element={<Adminpanel/>}>
</Route>
  <Route path='/login' element={<Login/>}> </Route>
<Route path='/application' element={<Application/>}></Route>
<Route path='/getlawyer' element={<Getlawyers/>}/>
<Route path='/chatting' element={<Chatting/>}></Route>
<Route path='/legal' element={<LegalResources/>}> </Route>
<Route path='/chatsection' element={<Chatsection/>}></Route>
  </Routes>  


  </BrowserRouter>





  );
}

export default App
