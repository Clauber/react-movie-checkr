import React from 'react'
import {Link} from 'react-router-dom'

export const CarouselItem = props => {
    console.log(props)
    return(
        <div className="card">
                <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${props.item.poster_path}`} alt="Movie Poster"/>
                <div className="card-body">
                    <h5 className="card-title">{props.item.original_title} 
                    {props.item.release_date.length > 0 ? ` (${props.item.release_date.substring(0,4)})`: null}</h5>
                    <p className="card-text">{`${props.item.overview}`.length > 90 ? `${props.item.overview}`.substring(0,87)+`...` :
                     `${props.item.overview}`}</p>
                     <Link to={`/movie/${props.item.id}`} className="btn btn-primary">Read more</Link>
                    {/* <a href={`${process.env.PUBLIC_URL}/movie/${props.item.id}`} className="btn btn-primary">Read More</a> */}
                </div>
                </div>
    )
}