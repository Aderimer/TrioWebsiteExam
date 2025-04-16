require('dotenv').config();
const { createClient } = require('redis');
const redisClient = createClient({
    url: process.env.VALKEY_URI
});
redisClient.connect().catch(console.error);

module.exports = redisClient;