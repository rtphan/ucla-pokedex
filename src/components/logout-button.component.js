import React from 'react';

export default function Logout(props) {
    return (
        <div>
            <button
				onClick={props.signOut}>
				Sign out
      		</button>
        </div>
    );
}