import React from 'react'

import Classes from "./FilmCard.module.css"

export const FilmCard = (props) => {
    console.log(21)
  return (
    <div className={Classes.FilmCard}>
        <div>{props.nameRu}</div>
    </div>
  )
}
