const { auth } = require('express-oauth2-jwt-bearer');
require('dotenv').config();

const jwtCheck = auth({
  audience: process.env.AUDIENCE,
  issuerBaseURL: process.env.ISSUER_URL,
  tokenSigningAlg: 'RS256'
});

module.exports = jwtCheck;