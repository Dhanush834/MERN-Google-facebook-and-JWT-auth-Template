import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, Typography } from '@mui/material';
import axios from 'axios';

const Auth0Login = () => {

  const {
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    getAccessTokenSilently
  } = useAuth0();

  const NormalCall = async () => {
    const res = await axios.get('http://localhost:5000/');
    console.log(res.data);
  }

  const ProtectedCall = async () => {

    try {

      const token = await getAccessTokenSilently();
      //console.log('Token:', token);
      const res = await axios.get('http://localhost:5000/protected/', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log(res.data);

    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div>
      <Button variant="contained" onClick={loginWithRedirect}>Login</Button>
      <Button variant="contained" onClick={logout} sx={{ ml: '5vw' }}>Logout</Button>

      <Typography sx={{ mt: '5vw' }}>
        {isAuthenticated ? 'Authed' : 'Not Authed'}
      </Typography>

      <Typography sx={{ mt: '5vw' }}>
        {isAuthenticated && (
          <pre>
            {JSON.stringify(user, null, 2)}
          </pre>)}
      </Typography>

      <Box>
        <Button variant="contained" onClick={NormalCall}>Without Protected API Requests</Button>
        <Button variant="contained" sx={{ ml: '5vw' }} onClick={ProtectedCall}>Protected API Requests</Button>
      </Box>
    </div>
  )
}

export default Auth0Login
