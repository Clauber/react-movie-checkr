import React from 'react'
import axios from 'axios'
import {SearchBox} from'../search-box/search-box.component'
import {CarouselList} from '../carousel-list/carousel-list.component'
import './app.style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component{
    state={
        popularMovies:{},
        upcomingMovies:{},
        nowPlaying:{},
        searchValue:"",
        activeItemIndex: 0
    }
    componentDidMount(){
        this.getPopularMovies();
        this.getUpcomingMovies();
        this.getNowPlaying();
    }
    getPopularMovies(){
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&page=1`)
        .then((Response)=>{
            this.setState({popularMovies: Response.data})
        })
    }
    getUpcomingMovies(){
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&page=1`)
        .then((Response)=>{
            this.setState({upcomingMovies: Response.data})
        })
    }
    getNowPlaying(){
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&page=1`)
        .then((Response)=>{
            this.setState({nowPlaying: Response.data})
        })
    }
    onInputChange(e){
        // this.setState({searchValue: e.target.value})
        e.target.value = "";
    }
    render(){
        // console.log(this.state)
        return(
            <div id="movie-checkr">
                <SearchBox placeholder='Search for a movie/actor/producer' value={this.state.searchValue} onChange={(e) => this.onInputChange(e)}/>
                <div className="container movie-container">
                    <div id="popular-movies" >
                        <h3>Popular Movies</h3>
                        <CarouselList items ={this.state.popularMovies.results}/>
                    </div>
                </div>
                <div className="container movie-container">
                    <div id="upcoming-movies" >
                    <h3>Upcoming Movies</h3>
                    <CarouselList items ={this.state.upcomingMovies.results}/>
                    </div>
                </div>
                <div className="container movie-container">
                    <div id="upcoming-movies" >
                    <h3>Now Playing</h3>
                    <CarouselList items ={this.state.nowPlaying.results}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App