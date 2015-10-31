var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      //console.log('INSIDE CONTROLLER GET =========================== ');



    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // parse / get information from the request
      console.log( '============================= ');
      models.messages.post(res, req.body);     
      console.log(req.body);
      // ... write that information to the correct table in the DB


    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      //console.log('INSIDE USERS GET =========================== '); 

    },
    post: function (req, res) {
      //console.log('INSIDE USERS POST =========================== ');
      models.users.post(res, req.body);
    }
  }
};

