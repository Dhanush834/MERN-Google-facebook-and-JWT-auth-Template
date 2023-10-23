import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  Auth0Provider
} from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_Auth0_DOMAIN}
      clientId={process.env.REACT_APP_Auth0_CLIENTID}
      scope='openid profile email'
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience:process.env.REACT_APP_Auth0_audience
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
