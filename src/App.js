import React from 'react'
import {connect} from 'react-redux' ;
import Movies from "./Components/Movies";
import {changeMovies} from "./actions/MoviesActions"

const App = ({movies, changeMovies}) => {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">SWapi</h1>
            </header>
            <Movies moviesList={movies.moviesList}/>
            <button onClick={changeMovies} >change</button>
        </div>
    )
};

const mapStateToProps = (store) => {
    console.log(store);
    return {
        movies: store.movies,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeMovies: () => dispatch(changeMovies())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


