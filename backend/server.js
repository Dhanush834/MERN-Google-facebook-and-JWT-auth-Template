const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./db/connectDB.js');
const Routes = require('./routes/routes');
const ProtectedRoutes  = require('./routes/protectedroutes.js');
const { auth } = require('express-oauth2-jwt-bearer');

const jwtCheck = require('./middlewares/TokenVerification.js');


const PORT = process.env.PORT || 5000;
const corsoptions = {
    credentials: true,
    origin: 'http://localhost:3000'
}

const app = express();
app.use(express.json());
app.use(cors());
app.use('/', Routes);
app.use('/protected',jwtCheck,ProtectedRoutes);

const Database = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
    }
    catch (err) {
        console.log(err);
    }
}

const server = app.listen(PORT, () => {
    console.log(`Server on ${PORT}`);
});

Database();