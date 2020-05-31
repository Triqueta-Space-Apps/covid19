const express = require("express");

const app = express();

app.get('/', (req, res) => {
    return res.json({
        response: 'Hello, World!'
    });
});
app.listen(3000);