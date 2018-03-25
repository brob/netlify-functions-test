// functions/yes_no.js

exports.handler = function(event, context, callback) {

  const {yes = 'yes', no = 'no'} = event.queryStringParameters;
  callback(null, {
    headers: {
      "Access-Control-Allow-Origin" : "*"
    },
    statusCode: 200,
    body: Math.floor(Math.random() * 2) ? yes : no,
  });
};