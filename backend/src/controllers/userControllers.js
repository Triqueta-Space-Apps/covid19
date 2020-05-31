const connection = require('../db/connection');

module.exports = {
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
        
        if(check) return res.status(400).send("User already exists");
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