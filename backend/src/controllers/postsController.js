const connection = require('../db/connection');

module.exports = {
    async posts(req, res) {
        const {
            location,
            date,
        } = req.query;
        const check = await connection('posts')
            .where('location', location)
            .andWhere('date', date)
            .select('*').first();
        if(!check) return res.status(404).send("Requests doesn't exist");
        return res.json(check);
    },

    async create(req, res) {
        const {
            news,
            twitter,
            info,
            date,
            location,
        } = req.body;

        const check = await connection('posts')
            .where('location', location)
            .andWhere('date', date)
            .select('*').first();
        
        if(check) return res.status(400).send("Page already exists");
        await connection('posts').insert({
            news,
            twitter,
            info,
            date,
            location,
        });
        res.status(200).send("Post created!");
    },
}