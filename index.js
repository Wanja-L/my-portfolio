const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 5000;

app.get('/api/projects', (req, res) => {
    // Return projects as json
    res.json(projectsData);
});

app.listen(port);
console.log(`My Portfolio is listening on ${port}`);

let projectsData = [
    {
        name: 'Python playaround on GitHub',
        html_url: 'http://www.google.com',
        description: 'I played around with python'
    }
];