import React from 'react';
import Navbar from '../components/navbar.component';
import SearchBar from '../components/searchbar.component';
import PokemonList from '../components/pokemon-list.component';

export default function Main(props) {
    return (
        <div>
            <h1>This is the Main Page!</h1>
            <Navbar signOut={props.signOut}/>
            <SearchBar />
            <PokemonList />
        </div>
    );
}