import React, {Component} from 'react'
import {connect} from 'react-redux' ;
import ItemsList from "./Components/ItemsList/";
import {loadItems} from "./actions/itemActions"
import {actions, links, names, imageLinks} from "./config";
import {BrowserRouter as Router, Route} from "react-router-dom";
import RenderedItemList from "./Components/RenderedItemList";
import MainPage from "./Components/MainPage";
import Header from "./Components/Header";
import PersonalPage from './Components/PersonalPage'


class App extends Component {
    componentDidMount() {
        this.props.loadMovies();
        this.props.loadPersons();
        this.props.loadVehicles();

    }

    render() {
        let {movies, persons, vehicles, loadPersons, loadVehicles} = this.props;

        return <Router>
            <div style={{backgroundColor: "#192752", minHeight: '100vh'}} className="App">
                <Route path={'/'} component={Header}/>
                <Route exact path={'/'} component={MainPage}/>
                <Route exact path={`/${names.PERSONS}`} render={() => <ItemsList
                    itemsList={persons.list[0]} arrOfKeys={["name", "height", "mass"]}
                    imageLink={imageLinks.PERSONS} num={2}/>
                }/>
                <Route exact path={`/${names.VEHICLES}`} render={() => <ItemsList
                    itemsList={vehicles.list[0]} arrOfKeys={["name"]}
                    imageLink={imageLinks.VEHICLES} num={2} />
                }/>
                <Route exact path={`/${names.MOVIES}`} render={() => <ItemsList
                    itemsList={movies.list[0]} arrOfKeys={["title"]}
                    imageLink={imageLinks.MOVIES} />
                }/>
                <Route exact path={`/${names.PERSONS}/:id`} render={(props) => <RenderedItemList
                    match={props.match} list={persons.list} load={loadPersons}
                    arrOfKeys={["name", "height", "mass"]} imageLink={imageLinks.PERSONS}/>}/>
                <Route  path={`/${names.MOVIES}/item/:id`} render={(props) => <PersonalPage match={props.match} kind={names.MOVIES} arrOfKeys={["title"]} imageLink={imageLinks.MOVIES}/>}/>

                <Route  path={`/${names.PERSONS}/item/:id`} render={(props) => <PersonalPage match={props.match} kind={names.PERSONS} arrOfKeys={["name", "height", "mass"]} imageLink={imageLinks.PERSONS}/>}/>

                <Route exact path={`/${names.VEHICLES}/:id`} render={(props) => <RenderedItemList
                    match={props.match} list={vehicles.list} load={loadVehicles}
                       arrOfKeys={["name"]} imageLink={imageLinks.VEHICLES}/>}/>

                <Route path={`/${names.VEHICLES}/item/:id`} render={(props) => <PersonalPage match={props.match} kind={names.VEHICLES} arrOfKeys={["name"]} imageLink={imageLinks.VEHICLES}/>}/>

            </div>
        </Router>
    }
}


const mapStateToProps = (store) => ({
        movies: store.movies,
        persons: store.persons,
        vehicles: store.vehicles,
});

const mapDispatchToProps = (dispatch) => {
    return {
        loadMovies: () => dispatch(loadItems(actions.LOAD_MOVIES, links.MOVIES, names.MOVIES)),
        loadPersons: (num) => dispatch(loadItems(actions.LOAD_PERSONS, links.PERSONS, names.PERSONS, num)),
        loadVehicles: (num) => dispatch(loadItems(actions.LOAD_VEHICLES, links.VEHICLES, names.VEHICLES, num))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


