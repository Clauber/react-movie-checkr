import React from 'react'
import axios from 'axios'
import {SearchBox} from'../search-box/search-box.component'
import {CarouselList} from '../carousel-list/carousel-list.component'
import {withRouter} from 'react-router-dom'
import './app.style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component{
    state={
        popularMovies:{},
        upcomingMovies:{},
        nowPlaying:{},
        searchValue:"",
        searchedMovies:{},
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
    onSearchChange(e){
        this.setState({searchValue: e.target.value});
        if(this.state.searchValue.length > 4)
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&query=${this.state.searchValue}&page=1`)
            .then((Response)=>{
                this.setState({searchedMovies: Response.data});
                // console.log(this.state.searchedMovies);
            })
        // e.target.value = "";
    }
    render(){
        let movies = null;
        if(this.state.searchValue.length < 5){
            movies = (
                <div className="movies">
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
        else if(this.state.searchedMovies !== undefined){
            movies= (
            <div className="movies">
                <div className="container movie-container">
                    <div className="searched-movies">
                        <h3>Results for: {this.state.searchValue}</h3>
                        <CarouselList items = {this.state.searchedMovies.results}/>
                    </div>
                </div>
            </div>
            )
        }
        return(
            <div id="movie-checkr">
                <SearchBox placeholder='Search for a movie/actor/producer' value={this.state.searchValue} onChange={(e) => this.onSearchChange(e)}/>
                {movies}
            </div>
        )
    }
}

export default withRouter(App)