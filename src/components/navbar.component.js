import React from 'react';
import Logout from './logout-button.component'

export default function Navbar(props) {
    return (
        <div>
            <h1>This is the Navbar!</h1>
            <Logout signOut={props.signOut}/>
        </div>
    )
}