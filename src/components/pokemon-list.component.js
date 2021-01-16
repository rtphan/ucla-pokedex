import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { POKEMON_LIMIT } from '../constants/values.const';
import sprites from '../constants/sprites.const';
import Pokemon from './pokemon.component'
import SearchBar from './searchbar.component'

const PokemonTest = props => {
    const {id, name} = props.pokemon
    return (
        <div>
            <img name={id} onClick={props.onClick} src={sprites[id]}/>
            <span>{name}</span>
        </div>
    )
};

export default function PokemonList() {
    const [pokemon, setPokemon] = useState([]);
    const [limit, setLimit] = useState(20);
    const [offset, setOffset] = useState(0);
    // prev and next are URLSearchParams, getting limit and offset are obtained by using prev.get('limit') or prev.get('offset')
    const [page, setPage] = useState({next: null, prev: null}); 

    // Checks if parameters don't reach the end bounds of undesirable information
    const isLegalPage = (params) => {
        // TODO
        return true;
    }

    /*
        next:"https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
        previous:null
    */
    const setNewPage = (next, prev) => {
        const nextParams = (next) ? new URLSearchParams(next.search) : null;
        const prevParams = (prev) ? new URLSearchParams(prev.search) : null;
        // console.log(nextParams.toString());
        // console.log(prevParams.toString());
        setPage(prevPage => ({
            prev: (prevParams) ? prevParams : prevPage.prev,
            next: (nextParams && isLegalPage(nextParams)) ? nextParams : prevPage.next
        }));
    }

    const setNewParams = (event) => {
        const { name } = event.target;
        const params = page[name];
        if (limit !== params.get('limit')) {
            // TODO
        }
        if (offset !== params.get('offset')) {
            //console.log(name + " setting here: " + params.get('offset'));
            //console.log("current offset: " + offset + ", prev: " + page['prev'].get('offset') + ", next: " + page['next'].get('offset'))
            setOffset(params.get('offset'));
        }
    }

    const handleClick = (event) => {
        const { name } = event.target
        axios.get(process.env.REACT_APP_API_URI + '/pokemon/' + name)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log('pokemon-list.component: ' + error);
            });
    }

    useEffect(() => {
        const params = {
            limit,
            offset
        };
        axios.get(process.env.REACT_APP_API_URI + '/pokemon/', {params})
            .then(response => {
                // console.log(`Pokemon List: ${response.data}`);
                // console.log(`Pokemon Next: ${response.data.next}, Pokemon Previous: ${response.data.previous}`);
                const nextURL = (response.data.next) ?  new URL(response.data.next) : null;
                const prevURL = (response.data.previous) ?  new URL(response.data.previous) : null;
                setNewPage(nextURL, prevURL);
                setPokemon(response.data.results);
            })
            .catch(error => {
                console.log('pokemon-list.component: ' + error);
            });
    }, [offset]) // eslint-disable-line react-hooks/exhaustive-deps

    const names = pokemon.map(poke => <PokemonTest onClick={handleClick} key={poke.id} pokemon={poke} />);

    return (
        <div>
            <SearchBar />
            <button
                onClick={setNewParams}
                name="prev">
                Previous
            </button>
            <button
                onClick={setNewParams}
                name="next">
                Next
            </button>
            {names}
            <button
                onClick={setNewParams}
                name="prev">
                Previous
            </button>
            <button
                onClick={setNewParams}
                name="next">
                Next
            </button>
        </div>
    )
}