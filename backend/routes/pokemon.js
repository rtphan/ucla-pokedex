const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const router = require('express').Router();
const axios = require('axios');

// Retrieve a list of pokemon
/*
    req: {
        limit: 20 (default),
        offset: 0 (default)
    }
    res: {
        next: "link",
        prev: "link",
        results: {
            {
                name: "bulbasaur",
                url: "link"
            },
            {...}
        }
    }
*/
router.route('/').get((req, res) => {
    const request = {
        limit: (req.body.limit) ? req.body.limit : 20,
        offset: (req.body.offset) ? req.body.offset : 0
    }

    axios.get(`${process.env.POKEAPI_URI}/pokemon?limit=${request.limit}&offset=${request.offset}`).then(response => {
        const resData = {
            next: response.data.next,
            previous: response.data.previous,
            results: response.data.results
        }
        res.json(resData);
    })
    .catch(err => {
        res.status(400).json(err)
    });
});

// Helper function to parse the name out of each list of objects
/*
    list: list of objects containing a 'name' entry
    res: [ name1, name2, ...]
*/
const nameExtraction = (list, type) => {
    var res = [];
    list.forEach(obj => {
        res.push(obj[type].name)
    });

    return res;
}

// Retrieve the information of a particular pokemon
/*
    id: pokemon name or id (req.params.id)
    res: {
        next: "link",
        prev: "link",
        results: {
            {
                name: "bulbasaur",
                url: "link"
            },
            {...}
        }
    }
*/
router.route('/:id').get((req, res) => {
    axios.get(`${process.env.POKEAPI_URI}/pokemon/${req.params.id}`).then(response => {
        const resData = {
            id: response.data.id,
            name: response.data.name,
            stats: response.data.stats,
            abilities: nameExtraction(response.data.abilities, 'ability'),
            moves: nameExtraction(response.data.moves, 'move'),
            types: nameExtraction(response.data.types, 'type')
        }

        res.json(resData);
    })
    .catch(err => {
        res.status(400).json(err)
    });
});


module.exports = router;