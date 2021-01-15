import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonTest = props => (
    <h2>{props.pokemon.name}</h2>
)

export default function PokemonList() {
    const [pokemon, setPokemon] = useState([]);
    const [limit, setLimit] = useState(1);
    const [offset, setOffset] = useState(1);

    useEffect(() => {
        if (offset > 0) {
            setOffset(0);
        }
    }, [limit]);

    useEffect(() => {
        const params = {
            limit,
            offset
        }
        axios.get(process.env.REACT_APP_API_URI + '/pokemon/', {params})
            .then(response => {
                //console.log(`Pokemon List: ${response.data.results}`);
                setPokemon(response.data.results);
            })
            .catch(error => {
                console.log('pokemon-list.component: ' + error);
            });
    }, [offset])

    const names = pokemon.map(poke => <PokemonTest key={poke.name} pokemon={poke} />)

    return (
        <div>
            <h1>This is the Pokemon List!</h1>
            {names}
        </div>
    )
}