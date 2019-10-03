import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios';

export const Movie = (props) =>{
    let [selectedMovie, setSelectedMovie] = useState({});
    useEffect(()=>{
        Axios.get(`https://api.themoviedb.org/3/movie/${props.match.params.movieId}?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`)
        .then(response => {
            setSelectedMovie(response.data);})
    }, [props.match.params.movieId])
    
    return(
        <div>
            <div>
                <Link className="btn btn-primary" to="/">Back</Link>
            </div>
            <div className="container">
                {selectedMovie !== null &&
                <div>
                    <div className="movie-container">
                        <h3>{selectedMovie.original_title}</h3>
                        <img src={`https://image.tmdb.org/t/p/w780/${selectedMovie.backdrop_path}`} alt="Movie Backdrop"/>
                        <p><a href={`${selectedMovie.homepage}`}>{selectedMovie.original_title} - Home Page</a></p>
                        <p>{selectedMovie.overview}</p>
                        
                    </div>
                </div>}
            </div>
        </div>
    )
}