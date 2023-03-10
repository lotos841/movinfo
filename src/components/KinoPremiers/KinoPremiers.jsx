import React from 'react'
import { FilmCard } from '../FilmCard/FilmCard';

import Classes from './KinoPremiers.module.css'

export const KinoPremiers = (props) => {

    const API_URL_KinoPremiers = `https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2023&month=JANUARY`
    const API_KEY = props.api_key;

    getDesc(API_URL_KinoPremiers)


    async function getDesc(films_url) {
        const desc_resp = await fetch(films_url,{
            headers:{
                "Content-Type": "application/json",
                "X-API-KEY": API_KEY,
            }
        })

        const resp_kinopremiers_data = await desc_resp.json();
         showMovies(resp_kinopremiers_data);
        
    }

    function showMovies(data) {
        {
            const moviesEl = document.querySelector(".KinoPremiers")
    
            data.items.forEach(data => {
                const movieEl = document.createElement("div")
                movieEl.classList.add("KinoPremiers") 
                movieEl.innerHTML = `
                        <div class="similars_block">
                            <div class="similar_cover_inner">
                                <img src=${data.posterUrlPreview}/>
                            </div>
                            <div class="similar-info">
                                <div class="similar-title">${data.nameRu}</div>
                                <a class="similar-more-info" href="/FilmPage/:${data.filmId}">Подробнее ${data.filmId}</a>
                            </div>
                        </div> 
                `
                moviesEl.appendChild(movieEl);
            });
        }
    }

    

    return (
        <div className={Classes.KinoPremiers}>
            
        </div>
    )
}
