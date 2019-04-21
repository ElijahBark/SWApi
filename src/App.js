import React, {Component} from 'react'
import {connect} from 'react-redux' ;
import ItemsList from "./Components/ItemsList";
import {loadItems} from "./actions/itemActions"
import {ACTIONS, LINKS, NAMES} from "./config";


class App extends Component {
    componentDidMount() {
        this.props.loadMovies();
        this.props.loadPersons(1);
        this.props.loadPersons(2);

        // this.props.loadVehicles();
    }

    render() {
        let {movies, persons} = this.props;

        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">SWapi</h1>
                </header>
                <ItemsList itemsList={movies.list[0]} arrOfKeys={["title"]}/>
                <ItemsList itemsList={persons.list[0]} arrOfKeys={["name","height"]}/>
                <ItemsList itemsList={persons.list[1]} arrOfKeys={["name"]}/>
                {/*<ItemsList itemsList={items.vehiclesList} arrOfKeys={["name"]} name={'vehicles'}/>*/}
                {/*<ItemsList itemsList={moviesList[0]} arrOfKeys={["title"]} name={"films"}/>*/}
            </div>
        )
    }
}



const mapStateToProps = (store) => {
    return {
        movies: store.movies,
        persons: store.persons
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadMovies: () => dispatch(loadItems(ACTIONS.LOAD_MOVIES, LINKS.MOVIES, NAMES.MOVIES )),
        loadPersons: (num) => dispatch(loadItems(ACTIONS.LOAD_PERSONS, LINKS.PERSONS, NAMES.PERSONS, num))
        // loadVehicles: () => dispatch(loadItems("https://swapi.co/api/vehicles/", "vehicles", "LOAD_VEHICLES"))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


