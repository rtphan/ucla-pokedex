import React from 'react';
import useAuthentication from './hooks/useAuthentication.hook';
import Main from './pages/main.page';
import Landing from './pages/landing.page';
import Footer from './components/footer.component'

function App() {
	const { googleID, accessToken, signIn, signOut } = useAuthentication();

	return (
		<div>
			{(accessToken) ? <Main signOut={signOut} googleID={googleID} /> : <Landing signIn={signIn} />}
			<Footer />
		</div>
	);
		
}

export default App;
