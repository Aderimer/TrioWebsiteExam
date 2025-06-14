var client = require('../redis.js');
async function cache(req, res, next) {
    const data = await client.get(req.originalUrl);
    if (data !== null) {
        res.render('tutorials', {tutorials: JSON.parse(data)});
    } else {
        next();
    }
}

module.exports = cache;