const { default: axios } = require('axios');
const mongoose = require('mongoose');
const { use } = require('../routes/routes');

const fetchUsers  = async (req,res,next) => {
    try {

        const Token = req.headers.authorization.split(' ')[1];
        //console.log(Token);
        const user = await axios.get(process.env.FETCH_USER,{
            headers:{
                authorization: `Bearer ${Token}`
            }
        })
        //console.log(user.data);

        const{
            name,
            picture,
            email,
            nickname
        } = user.data;

        //console.log(nickname);
        req.users = {
            name,
            picture,
            email,
            nickname
        };
        next();
    } catch (error) {
        console.log(error);
    }
}

module.exports = fetchUsers;