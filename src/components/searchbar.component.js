import React, { useState } from 'react';
import axios from 'axios';
import Pokemon from './pokemon.component'

export default function SearchBar() {
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState();
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (event) => {
        const { value } = event.target;
        setSearch(value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.get(process.env.REACT_APP_API_URI + '/pokemon/' + search)
            .then(response => {
                setPokemon(response.data);
                setIsSuccess(true);
            })
            .catch(error => {
                console.log('search-bar.component: ' + error);
            });
    };

    return (isSuccess) ? <Pokemon data={pokemon} /> :
        <form onSubmit={handleSubmit}>
            <input 
                value={search}
                onChange={handleChange}
                placeholder="Search a pokemon using a name or an id"/>
            <button>Search</button>
        </form>
}