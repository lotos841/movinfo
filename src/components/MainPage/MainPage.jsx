import React from 'react'
import MovieList from '../MovieList/MovieList'
import Recommendation from '../Recommendation/Recommendation'
import "./MainPage.css";

export const MainPage = (props) => {
  return (
    <div className='MainContent'>
        {/* <div className='slider middle'>
            <div className='slides'>
                <input type='radio' name="r" id="1" checked/>
                <input type='radio' name="r" id="2" checked/>
                <input type='radio' name="r" id="3" checked/>
                <input type='radio' name="r" id="4" checked/>

                <div className='slide'><img src="" alt="" /></div>


            </div>

            <div className='navigetion'>
              <label className='bar' for="r1"></label>
              <label className='bar' for="r2"></label>
              <label className='bar' for="r3"></label>
              <label className='bar' for="r4"></label>
            </div>

        </div> */}
        <MovieList api_key={props.api_key}/>
    </div>
  )
}

