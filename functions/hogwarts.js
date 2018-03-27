// functions/hogwarts.js


const houses = [
    {
        'name': 'Gryffindor',
        'main_color': '174,0,1',
        'secondary_color': '238,186,48'
    },
    {
        'name': 'Ravenclaw',
        'main_color': '34,47,91',
        'secondary_color': '93,93,93'
    },
    {
        'name': 'Slytherin',
        'main_color': '42,98,61',
        'secondary_color': '93,93,93'
    },
    {
        'name': 'Hufflepuff',
        'main_color': '236,185,57',
        'secondary_color': '114,98,85'
    }
]


exports.handler = function(event, context, callback) {
    var randomHouse = houses[Math.floor(Math.random()*houses.length)];
    callback(null, {
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      statusCode: 200,
      body: randomHouse,
    });
  };