// functions/hogwarts.js
let houses = {
    "0": {
       "name": "Gryffindor",
       "main_color": "174,0,1",
       "secondary_color": "238,186,48"
    },
    "1": {
       "name": "Ravenclaw",
       "main_color": "34,47,91",
       "secondary_color": "93,93,93"
    },
    "2": {
       "name": "Slytherin",
       "main_color": "42,98,61",
       "secondary_color": "93,93,93"
    },
    "3": {
       "name": "Hufflepuff",
       "main_color": "236,185,57",
       "secondary_color": "114,98,85"
    }
 };


exports.handler = function(event, context, callback) {
    console.log(houses);
    var randomHouse = houses[Math.floor(Math.random()*Object.keys(houses).length)];
    console.log(randomHouse);

    let jsonResponse = JSON.stringify(randomHouse);
    console.log(jsonResponse);
    callback(null, {
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      statusCode: 200,
      body: jsonResponse,
    });
  };