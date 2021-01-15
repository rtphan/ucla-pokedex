import React from 'react';
import useAuthentication from './hooks/useAuthentication.hook';
import Logout from './components/logout-button.component'

function App() {
	const { googleID, accessToken, signIn, signOut} = useAuthentication();

	return (accessToken) ? 
		<div>
			<h1>Greetings user {googleID}</h1>
			<Logout signOut={signOut} />
		</div> :
		<div>
			<h1>Welcome to the Pokedex Project!</h1>
			<button
				onClick={signIn}>
				Sign In
      		</button>
		</div>
}

export default App;
