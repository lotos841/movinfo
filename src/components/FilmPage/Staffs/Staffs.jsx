import React from 'react'
import './Staffs.css';

export const Staffs = (props) => {

    let movieId = props.movieId;
    movieId = movieId.substring(1)

    const API_URL_STAFF = `https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${movieId}`
    const API_KEY = props.api_key;

    getStaff(API_URL_STAFF)

    async function getStaff(staff_url) {
        const staff_resp = await fetch(staff_url,{
            headers:{
                "Content-Type": "application/json",
                "X-API-KEY": API_KEY,
            }
        })

        const resp_staff_Data = await staff_resp.json();
        console.log(resp_staff_Data);
        showStaff(resp_staff_Data)
        
    }

    function showStaff(staffData){
        const moviesEl = document.querySelector(".Staff")
            const movieEl = document.createElement("div")
            movieEl.classList.add("Staff")
            movieEl.innerHTML = `
                    <div class="staffs_title">Актеры/Режисеры</div>
                    <div class="staffs_blocks">
                        <div class="movie_page_staff_block">
                            <img src=${staffData[0].posterUrl}/>
                            <h3>${staffData[0].nameRu}</h3>
                            <h4>${staffData[0].professionText}</h4>
                        </div> 
                        <div class="movie_page_staff_block">
                            <img src=${staffData[1].posterUrl}/>
                            <h3>${staffData[1].nameRu}</h3>
                            <h4>${staffData[1].professionText}</h4>
                        </div> 
                        <div class="movie_page_staff_block">
                            <img src=${staffData[2].posterUrl}/>
                            <h3>${staffData[2].nameRu}</h3>
                            <h4>${staffData[2].professionText}</h4>
                        </div> 
                        <div class="movie_page_staff_block">
                            <img src=${staffData[3].posterUrl}/>
                            <h3>${staffData[3].nameRu}</h3>
                            <h4>${staffData[3].professionText}</h4>
                        </div> 
                        <div class="movie_page_staff_block">
                            <img src=${staffData[4].posterUrl}/>
                            <h3>${staffData[4].nameRu}</h3>
                            <h4>${staffData[4].professionText}</h4>
                        </div> 
                        <div class="movie_page_staff_block">
                            <img src=${staffData[5].posterUrl}/>
                            <h3>${staffData[5].nameRu}</h3>
                            <h4>${staffData[5].professionText}</h4>
                        </div> 
                        <div class="movie_page_staff_block">
                            <img src=${staffData[6].posterUrl}/>
                            <h3>${staffData[6].nameRu}</h3>
                            <h4>${staffData[6].professionText}</h4>
                        </div> 
                        <div class="movie_page_staff_block">
                            <img src=${staffData[7].posterUrl}/>
                            <h3>${staffData[7].nameRu}</h3>
                            <h4>${staffData[7].professionText}</h4>
                        </div> 
                    </div>
            `
            moviesEl.appendChild(movieEl);
        ;
    }

    return (
        <div>
            <div className='Staff'></div>
        </div>
    )
}
