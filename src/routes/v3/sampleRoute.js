var router = require('express').Router();

let route_version = 3;

router.get('/', (req, res) => {
    res.send(`This is version ${route_version}`);
});

module.exports = router;