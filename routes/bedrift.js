var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.json("Bedrift");
})

module.exports = router;