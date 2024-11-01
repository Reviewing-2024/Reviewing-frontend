import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assert/layout.css';

import Header2 from './components/section/header2';
import Header from './components/section/header';   
import Main from './components/section/main';       
import Footer from './components/section/footer';   

import Home from './components/pages/home';
import Inflearn from './components/pages/inflearn';
import InflearnGenre from './components/pages/inflearnGenre';
import Coddingapple from './components/pages/coddingapple';
import Codeit from './components/pages/codeit';
import Youtube from './components/pages/youtube';
import Search from './components/pages/search';
import Detail from './components/pages/detail';
import LoginRegister from './components/pages/LoginRegister';
 
const App = () => {
    return (
        <BrowserRouter>
            <Header2 />
            <Header />
            <Main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/inflearn' element={<Inflearn />} />   
                    <Route path="/inflearn/:genre" element={<InflearnGenre />} />
                    <Route path='/coddingapple' element={<Coddingapple />} />
                    <Route path='/codeit' element={<Codeit />} />
                    <Route path='/youtube' element={<Youtube />} />
                    <Route path='security' element={<Search />} />
                    <Route path='chatGPT' element={<Search />} />
                    <Route path='python' element={<Search />} />
                    <Route path='uxui' element={<Search />} />
                    <Route path='data' element={<Search />} />
                    <Route path='/detail/:id' element={<Detail />} />
                    <Route path='/user' element={<LoginRegister />} />
                </Routes>
            </Main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;