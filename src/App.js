import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Classroom from "./pages/Classroom";
import Assesment from "./pages/Assesment";
import Store from "./pages/Store";
import Calender from "./pages/Calender";
import News from "./pages/News";
import Blog from "./pages/Blog";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";
import MySettings from "./pages/MySettings";
import Myaccount from "./pages/Myaccount";
const App = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
           <Route path='/' element={<Dashboard/>}/>
           <Route path='/classroom' element={<Classroom/>}/>
           <Route path='/assesment' element={<Assesment/>}/>
           <Route path='/store' element={<Store/>}/>
           <Route path='/calender' element={<Calender/>}/>
           <Route path='/news' element={<News/>}/>
           <Route path='/blog' element={<Blog/>}/>
           <Route path='*' element={<PageNotFound/>}/>
           <Route path="/profile" element={<Profile/>}>
                  <Route path="/profile/myaccount" element={<Myaccount/>}/>
                  <Route path="/profile/mysettings" element={<MySettings/>}/>
           </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App