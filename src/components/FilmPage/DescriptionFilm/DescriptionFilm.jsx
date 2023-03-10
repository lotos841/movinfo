import React from 'react'
import './DescriptionFilm.css'


export const DescriptionFilm = (props) => {

    let movieId = props.movieId;
    movieId = movieId.substring(1)
    const API_DESC_URL = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`;
    const API_URL_IMG = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/images?type=WALLPAPER&page=1`;
    const API_URL_VIDEOS = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/videos`
    const API_KEY = props.api_key;
    

    getDesc(API_DESC_URL, API_URL_IMG,API_URL_VIDEOS)

    async function getDesc(desc_url, img_url, video_url) {
        const desc_resp = await fetch(desc_url,{
            headers:{
                "Content-Type": "application/json",
                "X-API-KEY": API_KEY,
            }
        })
        
        const img_resp = await fetch(img_url,{
            headers:{
                "Content-Type": "application/json",
                "X-API-KEY": API_KEY,
            }
        })

        const video_resp = await fetch(video_url,{
            headers:{
                "Content-Type": "application/json",
                "X-API-KEY": API_KEY,
            }
        })

        const resp_desc_Data = await desc_resp.json();
        const resp_img_Data = await img_resp.json();
        const resp_video_Data = await video_resp.json();

        if(resp_img_Data.items == 0) {
            resp_img_Data.items[0] = {imageUrl : "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/932ba569050301.5b72f1f3ab66f.png"}
        }
        if(resp_video_Data.items == 0) {
            resp_video_Data.items[0] = {url : "https://www.youtube.com/@InratingRu/videos"}
        }
        showDesc(resp_desc_Data, resp_img_Data, resp_video_Data)
    }

    function showDesc(descData, imgData, videosData){
        const moviesEl = document.querySelector(".Desc")
            const movieEl = document.createElement("div")
            movieEl.classList.add("Desc")
            movieEl.innerHTML = `
            <div class="film_section">
                    <img class="movie_page_img" src=${imgData.items[0].imageUrl} alt=""/>
                    <div class="movie_page_info">
                        <div class="movie_page_info_header">
                            <img class="movie_page_poster" src=${descData.posterUrl} alt=""/>
                            <div class="movie_page_info_header_name_desc">
                                <div class="movie_page_name">${descData.nameRu} (${descData.year})</div>
                                <div class="movie_page_slogan">"${descData.slogan}"</div>
                                <div class="movie_page_genre"><span>жанры:</span> ${descData.genres.map((genre) => `${genre.genre}`)}</div>
                                <div class="movie_page_time"><span>время:</span> ${descData.filmLength} минут</div>
                                <div class="movie_page_country"><span>страна:</span> ${descData.countries.map((country) => `${country.country}`)}</div>
                                <div class="movie_page_trailer"><a href="${videosData.items[0].url}">трейлер</a></div>
                                <div class="movie_page_site"><a href="${descData.webUrl}" target="_blank">кинопоиск</a></div>
                            </div>
                            <div class="movie_page_rating">${descData.ratingImdb ?? descData.rating ?? descData.ratingKinopoisk}</div>
                        </div>
                        <div class="movie_page_description"><span>Описание:</span> ${descData.description}</div>
                    </div>
                </div>  
            `
            moviesEl.appendChild(movieEl);
        ;
    }
    
    return (
        <div>
            <div className='Desc'></div>
        </div>
    )
}