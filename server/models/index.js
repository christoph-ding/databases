var db = require('../db');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: "1234",
  database: "chat"
});

connection.connect(function(err){
  if (err) throw err;
});

module.exports = {
  messages: {
    get: function (req, res) {
      var queryString = "select * from messages;"
      connection.query(queryString, [], function(err, result){
        if(err) throw err;
        console.log(result);
        console.log("ALMOST THERE ==================== ");
        res.status(200);  
        res.send(result);      
        // res.status(200).json(result);
      })
    }, // a function which produces all the messages

    post: function (res, body) {
      console.log("msg post!!");
      var queryString = "insert into messages (msgText, roomname) values(?, ?);";
      connection.query(queryString, [body.message, body.roomname], function(err, result){
        if(err) throw err;
        res.send({objectid: result.insertId});
      });
      
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    
    post: function (res, body) {
      var queryString = "insert into users (username) values(?)";
      //var queryString = "select * from users";
        connection.query(queryString, body.username, function(err, result){
          if(err) throw err;
          //res.writeHead(201, {});
          res.send({objectid: result.insertId});
        });
      
    }
  }
};

