const Test = async (req,res)=>{
    if(req.users){
        console.log(req.users.name);
    }   
}

module.exports = Test;