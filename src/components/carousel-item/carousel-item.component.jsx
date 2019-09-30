import React from 'react'

export const CarouselItem = ({item}) => {

    return(
        <div className="card">
                <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="Movie Poster"/>
                <div className="card-body">
                    <h5 className="card-title">{item.original_title}</h5>
                    <p className="card-text">{`${item.overview}`.length > 150 ? `${item.overview}`.substring(0,147)+`...` :
                     `${item.overview}`}</p>
                    <a href="#" className="btn btn-primary not-ready" onClick={(e)=>{e.preventDefault()}}>Read More</a>
                </div>
                </div>
    )
}