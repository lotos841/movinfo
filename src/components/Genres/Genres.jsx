import React, { useState, useEffect} from "react";
import "./Genres.css"
import {RiKnifeFill, RiCriminalFill, RiHeartFill, RiMickeyFill, RiFootballFill} from 'react-icons/ri';
import {GiDramaMasks, GiWesternHat, GiPistolGun, GiAk47U} from 'react-icons/gi'
import {FaRedhat,FaFantasyFlightGames, FaMap, FaRegLaughBeam} from 'react-icons/fa'
import {BsFlower2} from 'react-icons/bs'
import {MdOutlineMenuBook, MdSkipNext} from 'react-icons/md'

import { NavLink, useParams } from "react-router-dom";


const API_URL_SEARCH = "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";


function Genres(props){

    let [genreId, setGenreId] = useState(1)

    useEffect(() => {
        getMovies(`https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=${genreId}&order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1`);
    }, [genreId])


    const [pageValue, setPageValue] = useState(1)

    useEffect(() => {
        getMovies(`https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=${genreId}&order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=${pageValue}`)
    }, [pageValue])


    const API_KEY = props.api_key;
    
    const [searchIsNull, setSearchIsNull] = useState(true);

    async function getMovies(url){
        const resp = await fetch(url,{
            headers:{
                "Content-Type": "application/json",
                "X-API-KEY": API_KEY,
            }
        })
        const respData = await resp.json();
        console.log(respData);
        showMovies(respData);
        
    }
    
    function showMovies(data){
        const moviesEl = document.querySelector(".movies")

        document.querySelector (".movies").innerHTML = " ";
        let movieCollection = 'films' in data? 'films': 'items';
        data[movieCollection].forEach((movie) => {
            const nullInfo = "---"

            const cheackRating = function() {
                return movie.ratingImdb ?? movie.rating ?? movie.ratingKinopoisk ?? nullInfo; 
            }
            const cheackCountry = function() {
                return movie.countries[0]?.country ?? nullInfo; 
            }
            const cheackGenres = function(){
                return movie.genres[0].genre ?? nullInfo;
            }
            const cheackName = function() {
                return movie.nameRu ?? movie.nameEn ?? movie.nameOriginal ?? nullInfo; 
            }
            const cheackYear = function() {
                return movie.year ?? nullInfo; 
            }

            const cheackId = function() {
                console.log("list id " + movie.filmId)
                return movie.filmId ?? "0";
            }

            const movieEl = document.createElement("div")
            movieEl.classList.add("movie")
            movieEl.innerHTML =` 
                <div class="section">
                    <div class="movie">
                        <div class="movie-cover-inner">
                            <img class="movie-cover" src="${movie.posterUrlPreview}"></img>
                            <div class="movie-cover-darkened"></div>
                        </div>
                        <div class="movie-info">
                            <div class="movie-title">${cheackName()}</div>
                            <div class="movie-dop-info">
                                <div class="movie-rating">${cheackRating()}</div>
                                <div class="movie-year">${cheackYear()}</div>
                                <div class="movie-country">${cheackCountry()}</div>
                                <div class="movie-genres">${cheackGenres()} </div>
                                <a class="movie-more-info" href="/FilmPage/:${movie.kinopoiskId}"></a>
                            <div/>
                        </div>
                    </div>
                </div>
            `;
            moviesEl.appendChild(movieEl) 
        });   
    }
    const [searchValue, setSearchValue] = useState("")
    const searchBox = document.querySelector(".search-box")
    
    const searchHendler = (e) =>{
        setSearchValue(e.target.value)
        const apiSearchUrl = `${API_URL_SEARCH}${searchValue}`;
        if (searchValue) {

            setSearchIsNull(false);
            getMovies(apiSearchUrl);
        }
        else{
            setSearchIsNull(true);
        }
    }

    return(
        
//1триллеры 2драма 3криминал 4мелодрама 5детектив 6фантастика 7приключения 8биография 10вестерн 11боевик 12фэнтэзи 13комедия 14воненные 15история 16 27музыка 18,19 33мультфильмы
//21спорт 22документальный  24аниме 26новости 29церимонии 30реальное тв 32ток-шоу 
       <div id="movies" className="Genres">
            <div className="genres-nav">
                <div onClick={() => setGenreId(1)} className="genre-link">{<RiKnifeFill className="genre-icon"/>} Триллеры</div>
                <div onClick={() => setGenreId(2)} className="genre-link">{<GiDramaMasks className="genre-icon"/>} Драмы</div>
                <div onClick={() => setGenreId(3)} className="genre-link">{<RiCriminalFill className="genre-icon"/>} Криминал</div>
                <div onClick={() => setGenreId(4)} className="genre-link">{<RiHeartFill className="genre-icon"/>} Мелодрама</div>
                <div onClick={() => setGenreId(5)} className="genre-link">{<FaRedhat className="genre-icon"/>} Детектив</div>
                <div onClick={() => setGenreId(6)} className="genre-link">{<FaFantasyFlightGames className="genre-icon"/>} Фантастика</div>
                <div onClick={() => setGenreId(7)} className="genre-link">{<FaMap className="genre-icon"/>} Приключения</div>
            </div>
            <div className="genres-nav">
                <div onClick={() => setGenreId(8)} className="genre-link">{<MdOutlineMenuBook className="genre-icon"/>} Биография</div>
                <div onClick={() => setGenreId(10)} className="genre-link">{<GiWesternHat className="genre-icon"/>} Вестерн</div>
                <div onClick={() => setGenreId(11)} className="genre-link">{<GiPistolGun className="genre-icon"/>} Боевик</div>
                <div onClick={() => setGenreId(13)} className="genre-link">{<FaRegLaughBeam className="genre-icon"/>} Комедии</div>
                <div onClick={() => setGenreId(14)} className="genre-link">{<GiAk47U className="genre-icon"/>} Военные</div>
                <div onClick={() => setGenreId(18)} className="genre-link">{<RiMickeyFill className="genre-icon"/>} Мультфильмы</div>
                <div onClick={() => setGenreId(24)} className="genre-link">{<BsFlower2 className="genre-icon"/>} Аниме</div>
            </div>
            <div className="Populars">
                <div className="movies-section">
                    <div className="movies-content">
                        <div className="search-box">
                            <input 
                            className='search_input'
                            type="text" 
                            placeholder="поиск" 
                            value={searchValue}
                            onChange={e => searchHendler(e)}/>
                        </div>
                        <div className="movies"></div>
                    </div>
                    <button onClick={() => setPageValue(pageValue+1)} className="next_page_btn"><a href="#movies"><MdSkipNext/></a></button>   
                </div>
            </div>  
       </div>
    );
}


export default Genres;