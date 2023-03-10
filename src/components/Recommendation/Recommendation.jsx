import React from 'react';

import './Recommendation.css';

const RecommendationSwiper = (props) => {

    let movieId = props.id;

    const API_KEY = props.api_key;
    const API_URL = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`;
    const API_URL_IMG = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/images?type=SCREENSHOT&page=1`;
    const API_URL_VIDEOS = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/videos`

    getMovies(API_URL, API_URL_IMG, API_URL_VIDEOS);

    async function getMovies(desc_url, imgs_url, videos_url){
        const desc_resp = await fetch(desc_url,{
            headers:{
                "Content-Type": "application/json",
                "X-API-KEY": API_KEY,
            }
        })

        const imgs_resp = await fetch(imgs_url,{
            headers:{
                "Content-Type": "application/json",
                "X-API-KEY": API_KEY,
            }
        })

        const videos_resp = await fetch(videos_url,{
            headers:{
                "Content-Type": "application/json",
                "X-API-KEY": API_KEY,
            }
        })

        const resp_desc_Data = await desc_resp.json();
        const resp_imgs_Data = await imgs_resp.json();
        const resp_videos_Data = await videos_resp.json();
        console.log(resp_desc_Data)
        console.log(resp_imgs_Data)
        console.log(resp_videos_Data)
        showMovies(resp_desc_Data, resp_imgs_Data, resp_videos_Data)
        
    }

    function showMovies(descData,imgsData, videosData){
        const moviesEl = document.querySelector(".recommendation")
            const movieEl = document.createElement("div")
            movieEl.classList.add("recom")
            movieEl.innerHTML = `
                <div class="recom_Movies">
                    <div class="recom_section">
                        <img class="recom_movie_img" src=${imgsData.items[1].imageUrl} alt=""/>
                        <div class="recom_movie_info">
                            <div class="recom_movie_name">${descData.nameRu}</div>
                            <div class="recom_movie_trailer"><a href="${videosData.items[0].url} target="_blank"">Трейлер</a></div>
                        </div>
                    </div>   
                </div>
            `
            moviesEl.appendChild(movieEl);
        ;
    }

    return(
        <div className="recommendation">

        </div>
        
    )
}

export default RecommendationSwiper;