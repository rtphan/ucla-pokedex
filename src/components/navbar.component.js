import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './logout-button.component';

export default function Navbar(props) {
    return (
        <nav>
            <Link to="/">Pokedex</Link>
            <div>
                <ul>
                    <li>
                        <Link to="/favorites">Favorites</Link>
                    </li>
                </ul>
            </div>
            <Logout signOut={props.signOut}/>
        </nav>
    )
}