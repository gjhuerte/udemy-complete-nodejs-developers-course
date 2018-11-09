const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=4241%20St%20Peter',
    json: true,
}, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
});