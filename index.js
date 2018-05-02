'use strict';
var fse = require('fs-extra');
var o=require('o.js');
exports.generateSchema = function(url,project_root) {
  console.log("getting schema of resource");

  o(url).get(function(data) {
   console.log(data); //returns metadata
   var file_a=project_root+"/schema.txt"
   fse.ensureFile(file_a, err => {
          console.log(err) 
     fse.outputFile(file_a, 'hello!', err => {
        console.log(err) // => null
      })
    })
   }, function(status) {
  console.error(status); // error with status
 })
}
