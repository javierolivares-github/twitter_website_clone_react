import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppContext from './utilities/Context';
import Layout from './components/atoms/layout/Layout';
import Navbar from './components/patterns/navbar/Navbar';
import Home from './components/screens/Home';
import Explore from './components/screens/Explore';
import Notifications from './components/screens/Notifications';
import Bookmarks from './components/screens/Bookmarks';
import Lists from './components/screens/Lists';
import Profile from './components/screens/Profile';

const App = () => {
  return (
    <>
    <BrowserRouter>
        <AppContext>
            <Layout>
                <Navbar />
                <Routes>
                  <Route path="/home" element={<Home/>}/>
                  <Route path="/explore" element={<Explore/>}/>
                  <Route path="/notifications" element={<Notifications />}/>
                  <Route path="/bookmarks" element={<Bookmarks/>}/>
                  <Route path="/lists" element={<Lists/>}/>
                  <Route path="/profile" element={<Profile/>}/>
                </Routes>
            </Layout>
        </AppContext>
    </BrowserRouter>
    </>
  )
}


export default App;