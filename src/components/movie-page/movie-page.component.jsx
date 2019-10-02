import React,{useState, useEffect} from 'react'
import Axios from 'axios';

export const Movie = (props) =>{
    let [selectedMovie, setSelectedMovie] = useState({});
    useEffect(()=>{
        loadMovie();
    }, [props.match.params.movieId])

    const loadMovie = () => {
        Axios.get(`https://api.themoviedb.org/3/movie/${props.match.params.movieId}?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`)
        .then(response => {
            setSelectedMovie(response.data);
        })
    }
    
    return(
        <div>
            <div>
                <a href="/" className="btn btn-primary">Back</a>
            </div>
            <div className="container">
                {selectedMovie !== null &&
                <div>
                    <div className="movie-container">
                        <h3>{selectedMovie.original_title}</h3>
                        <img src={`https://image.tmdb.org/t/p/w780/${selectedMovie.backdrop_path}`}/>
                        <p><a href={`${selectedMovie.homepage}`}>{selectedMovie.original_title} - Home Page</a></p>
                        <p>{selectedMovie.overview}</p>
                        <p>{console.log(selectedMovie)}</p>
                    </div>
                </div>}
            </div>
        </div>
    )
}