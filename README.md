# Pokedex Project

Source code for https://rtphan.github.io/ucla-pokedex/ \
The purpose of this project is to create a full stack React application consisting of a landing page, a pokemon list view showing the pokemon portrait and their name, and a backend service handling user authentication. \
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Disclaimer

This application is still under development, but has been halted as of **2021/1/16**. \
The website currently **does not** work due to critical bugs on various browsers and cannot be fixed until further notice. \
As of now, there also does not exist any CSS or UI libraries until the main features have been fully developed.

## Requirements

* Fetch Pokemon using the [PokeAPI](https://pokeapi.co/)
    > Pokemon are retrieved by a set amount by calling the express server, retrieved in a JSON object containing the id, name, and url
    * **Status**: `Completed`
* List View Pagination
    > The list of pokemon is paginated by calling next or previous, the list is refreshed to display the next set of pokemon accordingly
    * **Status**: `Completed`
* User authentication to view pokemon list
    > Users are authenticated by Google OAuth client. Once the user is logged in, the main page will display with the main page
    * **Status**: `Completed`
* Popup upon clicking on Pokemon List item that displays: name, portrait, abilities, type, stats, moves, etc.
    > Currently, no popup shows up but just console logs the JSON object containing all the necessary information to display
    * **Status**: `In Progress`
* Search for pokemon
    > Users are able to type into a search bar a pokemon name or id, and will currently console log the relevant pokemon JSON object
    * **Status**: `Completed`

## Bonus Features

* Pagination of the List View using Infinite Scrolling
    * **Status**: `Not Implemented`
* Django for backend service
    * **Status**: `Not Implemented`
* Favorite a pokemon
    * **Status**: `Not Implemented`
* React Hooks
    * **Status**: `In Progress`
* Material UI
    * **Status**: `Not Implemented`

## Directory List

* `./backend` - Code for the backend server using Express.js
    * `./backend/configs` - The config files for the server. Currently holds different port numbers depending if running on development or production
    * `./routes` - Handlers for RESTful calls for the server. Currently holds server handling for retrieving pokemon information for client
    * `./backend/.env` - Contains environment variables such as the MongoDB URI, and node environment variables
* `./build` - The compiled React app code
* `./public` - All files exposed to the internet after building
* `./src` - Code for the frontend application using React.js
    * `./src/components` - Components used in the React app
    * `./src/constants` - Constants such as sprite urls and value constants are located here
    * `./src/hooks` - Custom hooks used within the app. Currently holds the logic for authenticating a user using Google OAuth Client
    * `./src/pages` - Pages used to redirect user upon login and logout
    * `./src/utils` - Utility functions used within the app

## Setup

1. Install node.js on your machine
2. Run `npm install` on the main directory and `./backend`
3. Copy `.env.example` and `./backend/.env.example` to `.env` and `./backend/.env`, respectively and fill in the environment variables

## Running Dev

The server will launch on `localhost:3001` by calling `nodemon server` \
The react app can run in developer mode using `npm start`

## Building for Production

To build for production, go to `package.json` and configure "homepage" to your production website. \
This application was deployed using GitHub pages, and could be deploying using:
```
npm run deploy
```

## Potential Features

* JEST Unit Testing
* HTTPS Support for Express server
* More OAuth authentication methods (GitHub, Facebook, etc.)
* Pokemon List Sorting and Filtering (by name, type, abilities, etc.)
* Partial Live Searching (possibly impossible due to PokeAPI implementation)

## Sources

All sources used to help create this application and its features will be placed here, included with a hyperlink.

* Google Authentication for React Applications
    * https://github.com/Sivanesh-S/react-google-authentication