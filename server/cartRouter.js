const express = require('express');
const fs = require('fs');
const router = express.Router();
const handler = require('./handler');


router.get('/', (req, res) => {
    fs.readFile('server/db/userCart.json', 'utf-8', (err, data) => {
        if(err){
            res.sendStatus(404, JSON.stringify({result:0, text: err}));
        } else {
            res.send(data);
        }
    })
});
router.put('/:id', (req, res) => {
    if (req.body.visible != null) {
        handler(req, res, 'add', 'server/db/userCart.json');
    }
    else if (req.body.quantity < 0) {
        handler(req, res, 'del', 'server/db/userCart.json');
    }
    else {
        handler(req, res, 'change', 'server/db/userCart.json');
    }
});
router.get('/total', (req, res) => {
            res.send(JSON.stringify({sum: sum, quantity: totalQuantity}));
        })

module.exports = router;