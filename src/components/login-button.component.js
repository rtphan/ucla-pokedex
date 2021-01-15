import React from 'react';

export default function Login(props) {

	return (
		<div>
			<button
				onClick={props.signIn}>
				Sign In with Google
			</button>
		</div>
	);
}