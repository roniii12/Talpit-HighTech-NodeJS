const fs = require('fs');
let data = require('./db');
module.exports = {
   getUserById : function(id) {
       return data[id];
   }
};