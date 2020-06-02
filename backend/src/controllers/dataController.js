const connection = require('../db/connection');
var https = require('follow-redirects').https;
var fs = require('fs');

module.exports = {
    async data(request, response) {
        const{
            country} = request.query;
        var path = '/dayone/country/' + country;
        var options = {
        'method': 'GET',
        'hostname': 'api.covid19api.com',
        'path': path,
        'headers': {
        },
        'maxRedirects': 20
        };

        var req = https.request(options, function (res) {
        var chunks = [];

        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res.on("end", function (chunk) {
            var body = Buffer.concat(chunks);   
            console.log(body.toString());
        });

        res.on("error", function (error) {
            console.error(error);
        });
        });

        req.end();

        console.log(req);
        return response.sendStatus(200);
    }
}