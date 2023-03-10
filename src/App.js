import './App.css';

import Navbar from "./components/Navbar/Navbar";
import RaitingNavigetion from "./components/RaitingNavigetion/RaitingNavigetion";
import Ff from "./components/ff/Ff";

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { MainPage } from './components/MainPage/MainPage';
import FilmPage from './components/FilmPage/FilmPage';
import { KinoPremiers } from './components/KinoPremiers/KinoPremiers';
import PopularFilms from './components/PopularFilms/PopularFilms';
import NewFilms from './components/NewFilms/NewFilms';
import Genres from './components/Genres/Genres';

function App() {  
    //7f3a1f24-403a-4080-a0b2-ce48cbe440a9 rinat tocen
    //90691cf2-fecf-4937-bb87-aff505ba0d56 ken token
    //40aab727-4e9f-472c-8074-28a3382087eb gg token
    const API_KEY = "90691cf2-fecf-4937-bb87-aff505ba0d56"

    return (
      <div className="app">
            <BrowserRouter>
                <Navbar/>
                <RaitingNavigetion/>
                <Ff/>
                <Routes>
                  <Route element={<MainPage api_key={API_KEY}/>} path="main"/>
                  <Route element={<FilmPage api_key={API_KEY}/>} path="FilmPage/:id"/>
                  <Route element={<KinoPremiers api_key={API_KEY}/>} path="news"/>
                  <Route element={<PopularFilms api_key={API_KEY}/>} path="popular"/>
                  <Route element={<NewFilms api_key={API_KEY}/>} path="newFilms"/>
                  <Route element={<Genres api_key={API_KEY}/>} path="genres"/>
                </Routes>
            </BrowserRouter>
      </div> 
    );
}

export default App;
