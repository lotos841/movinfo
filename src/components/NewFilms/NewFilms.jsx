import React, { useState, useEffect} from "react";
import "./NewFilms.css";
import {GrLinkNext} from 'react-icons/gr';
import {BiTime} from 'react-icons/bi'
import { NavLink, useParams } from "react-router-dom";


const API_URL_POPULAR = `https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2023&month=JANUARY`;
const API_URL_SEARCH = "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";


function NewFilms(props){

    const API_KEY = props.api_key;

    const [searchIsNull, setSearchIsNull] = useState(true);

    if(searchIsNull){
        getMovies(API_URL_POPULAR);
    }

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
            // movieEl.addEventListener("click", () => openModal(movie.filmId))
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
        <div className="NewFilms">
            <div className="movies-section">
                <div className="movies-content">
                    <div className="search-box">
                        <input 
                            className='search_input'
                            type="text" 
                            placeholder="поиск" 
                            value={searchValue}
                            onChange={e => searchHendler(e)}
                        />
                    </div>
                    <div className="movies"></div>
                </div>   
            </div>
        </div>  
    );
}


export default NewFilms;