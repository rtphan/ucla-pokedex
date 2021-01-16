import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from '../components/navbar.component';
import Favorites from '../components/favorites.component';
import PokemonList from '../components/pokemon-list.component';

export default function Main(props) {
    return (
        <Router>
            <Navbar signOut={props.signOut}/>
            <br/>
            <Route path="/" exact component={PokemonList} />
            <Route path="/favorites" component={Favorites} />
        </Router>
    );
}