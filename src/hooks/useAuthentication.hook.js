import { useState } from 'react';
import { useGoogleLogin, useGoogleLogout } from 'react-google-login';
import { refreshTokenSetup } from '../utils/refreshToken.util';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

export default function useAuthentication() {
    const [googleID, setGoogleID] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const onSuccess = res => {
        console.log('Login Success. Current User: ', res.profileObj);
        setGoogleID(res.googleId);
        console.log(`GoogleId: ${res.googleId}, AccessToken: ${res.accessToken}`);
        setAccessToken(res.accessToken);
        alert(`Login Sucessful. Hello ${res.profileObj.name}!`);
        refreshTokenSetup(res);
    };

    const onLogoutSuccess = () => {
        console.log('Logout Success.');
        setAccessToken(null);
        alert('Logout Sucessful.');
    };

    const onFailure = res => {
        console.log('Login/Logout Failure. Response: ', res);
        alert('Failed to properly authenticate.');
    };

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: 'offline'
    });

    const { signOut } = useGoogleLogout({
        clientId,
        onLogoutSuccess,
        onFailure
    });

    return { googleID, accessToken, signIn, signOut };
}