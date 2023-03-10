import React from 'react'
import "./Similars.css";


export const Similars = (props) => {

    let movieId = props.movieId;
    movieId = movieId.substring(1)

    const API_KEY = props.api_key;
    const API_URL_SIMILARS = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/similars`

    getSimilars(API_URL_SIMILARS);

    async function getSimilars(simailars_url) {
        const similars_resp = await fetch(simailars_url,{
            headers:{
                "Content-Type": "application/json",
                "X-API-KEY": API_KEY,
            }
        }) 

        const resp_similars_Data = await similars_resp.json();
        console.log(resp_similars_Data.items);
        showSimilars(resp_similars_Data);

    }

    function showSimilars(similarsData) {
        const moviesEl = document.querySelector(".similars_blocks")

        similarsData.items.forEach(similar => {
            const movieEl = document.createElement("div")
            movieEl.classList.add("similar") 
            movieEl.innerHTML = `
                    <div class="similars_block">
                        <div class="similar_cover_inner">
                            <img src=${similar.posterUrlPreview}/>
                        </div>
                        <div class="similar-info">
                            <div class="similar-title">${similar.nameRu}</div>
                            <a class="similar-more-info" href="/FilmPage/:${similar.filmId}"></a>
                        </div>
                    </div> 
            `
            moviesEl.appendChild(movieEl);
        });
    }
        
    return (
        <div className='Similars'>
            <div className='similars_title'>Похожие фильмы</div>
            <div className='similars_blocks'></div>
        </div>
        
    )
}
