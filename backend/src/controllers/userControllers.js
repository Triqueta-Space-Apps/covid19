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
        return res.status(201).send("User " + username + " created.");;
    }
    
}