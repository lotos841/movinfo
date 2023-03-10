import React from 'react'
import './FilmStills.css'

export const FilmStills = (props) => {

    let movieId = props.movieId;
    movieId = movieId.substring(1)

    const API_URL_IMGS_STILLSL = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/images?type=STILL&page=1`;
    const API_URL_IMGS_SHOOTING = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/images?type=SHOOTING&page=1`;
    const API_KEY = props.api_key;

    getDesc(API_URL_IMGS_STILLSL, API_URL_IMGS_SHOOTING )

    async function getDesc(stills_url, shooting_url) {
        const imgs_stills_resp = await fetch(stills_url,{
            headers:{
                "Content-Type": "application/json",
                "X-API-KEY": API_KEY,
            }
        })

        const imgs_shooting_resp = await fetch(shooting_url,{
            headers:{
                "Content-Type": "application/json",
                "X-API-KEY": API_KEY,
            }
        })

        let resp_stills_Data = await imgs_stills_resp.json();
        if(resp_stills_Data.items == 0) {
            resp_stills_Data = await imgs_shooting_resp.json();
        }

        showDesc(resp_stills_Data,);
    }

    function showDesc(stillImgsData){
        const moviesEl = document.querySelector(".Still")
            const movieEl = document.createElement("div")
            movieEl.classList.add("Still")
            movieEl.innerHTML = `
                <div class="movie_page_still_imgs">
                    <img class="movie_page_still_img" src=${stillImgsData.items[0].imageUrl} alt=""/>
                    <img class="movie_page_still_img" src=${stillImgsData.items[1].imageUrl} alt=""/>
                    <img class="movie_page_still_img" src=${stillImgsData.items[2].imageUrl} alt=""/>
                </div>
            `
            moviesEl.appendChild(movieEl);
        ;
    }


    return (
        <div className='Still'></div>
    )
}
