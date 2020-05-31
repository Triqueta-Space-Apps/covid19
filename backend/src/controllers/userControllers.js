const connection = require('../db/connection');

module.exports = {
    async list(req, res) {
        const {
            page = 1 
        } = req.query;
        const check = await connection('users')
            .limit(15)
            .offset((page - 1) * 15)
            .select('*');
        return res.json(check);
    },
    async register(req, res){
        const{
            email,
            username,
            password,
            name,
            city,
            state,  
            country,
        } = req.body;
        const check = await connection('users')
            .where('username', username)
            .orWhere('email', email)
            .select('*').first();
        
        //if(check) return res.status(400).send("User already exists");
        await connection('users').insert({
            email,
            username,
            password,
            name,
            city,
            state,
            country,
        });
        return res.status(201).send("User " + username + " created.");
    }
    
}