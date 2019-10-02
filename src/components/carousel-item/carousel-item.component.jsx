import React from 'react'

export const CarouselItem = ({item}) => {
    return(
        <div className="card">
                <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="Movie Poster"/>
                <div className="card-body">
                    <h5 className="card-title">{item.original_title} ({item.release_date.substring(0,4)})</h5>
                    <p className="card-text">{`${item.overview}`.length > 90 ? `${item.overview}`.substring(0,87)+`...` :
                     `${item.overview}`}</p>
                    <a href={`/movie/${item.id}`} className="btn btn-primary">Read More</a>
                </div>
                </div>
    )
}