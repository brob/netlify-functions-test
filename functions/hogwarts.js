// functions/hogwarts.js

const houses = [
    'Gryffindor',
    'Ravenclaw',
    'Slytherin',
    'Hufflepuff'
];


exports.handler = function(event, context, callback) {
    var randomHouse = houses[Math.floor(Math.random()*myArray.length)];
    const {yes = 'yes', no = 'no'} = event.queryStringParameters;
    callback(null, {
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      statusCode: 200,
      body: randomHouse,
    });
  };