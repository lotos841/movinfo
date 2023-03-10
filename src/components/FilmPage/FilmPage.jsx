import React from 'react'
import { useParams } from 'react-router-dom';
import { DescriptionFilm } from './DescriptionFilm/DescriptionFilm';

import './FilmPage.css';

import { FilmStills } from './FilmStills/FilmStills';
import { Similars } from './Similars/Similars';
import { Staffs } from './Staffs/Staffs';

const FilmPage = (props) => {

    const API_KEY = props.api_key;

    const {id} = useParams();

    let movieId = id;

    console.log("movieId "+ movieId);
    
    return (
        <div className='FilmPage'>
            <DescriptionFilm movieId={movieId} api_key={API_KEY}/>
            <FilmStills movieId={movieId} api_key={API_KEY}/>
            <Staffs movieId={movieId} api_key={API_KEY}/>
            <Similars movieId={movieId} api_key={API_KEY}/>
        </div>
    )
}

export default FilmPage