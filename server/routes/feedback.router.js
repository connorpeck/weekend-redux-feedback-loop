const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// post 

router.post('/', (req, res) => {
    console.log('/feedback POST with req.body', req.body);
    const queryString = `INSERT INTO feedback (feeling, understanding, support, comments) VALUES ($1, $2, $3, $4);`;
    const values = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments];
    pool.query(queryString, values).then((result) => {
        res.sendStatus(201);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})


module.exports = router