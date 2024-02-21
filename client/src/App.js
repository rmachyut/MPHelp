import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import NoPage from './pages/noPage'
import Library from './pages/library'
import SongList from './pages/songlist'
import styled from "styled-components"

const App = () => {
    return (
        <div className='main-body'>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="*" element={<NoPage />} />
                    <Route index element={<Library />} />
                    <Route path="/library" element={<Library/>} />
                    <Route index element={<SongList />} />
                    <Route path="/songlist" element={<SongList/>} />
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;