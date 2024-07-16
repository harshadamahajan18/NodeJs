// TYPES OF WRITING FUNCTIONS:

// const { json } = require("express");

// function add(a, b){
//   return a + b;
// }

// var add = function(a, b){
//   return a + b;
// }

// var add = (a, b) => {return a + b;}

// var add = (a, b) => a + b;

// var result = add(267,6);
// console.log(result);

// (function(){
//   console.log('prince is added');
// })();

// CALLBACK FUNCTION:
// function callback(){
//   console.log('now adding is successfully complete');
// }

// const add = function(a, b, callback){
//   var result = a+b;
//   console.log('result: ' +result); // main function work complete
//   callback();
// }

// add(3,10908, callback);
// o/p:-
//  result: 10911
// now adding is successfully complete

// function callback(){
//   console.log('prince is calling a callback function');
// }

// const add = function(a, b, callback){
//   var result = a+b;
//   console.log('result: '+result);
//   callback();
// }

// add(3, 4, callback);

// const add = function(a, b, callback){
//   var result = a+b;
//   console.log('result: '+result);
//   callback();
// }

// add(2, 3, function(){
//   console.log('Add completed');
// })

// add(2, 3, ()=>console.log('Add completed'));

// Core modules in nodejs

// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('greeting.txt', 'Hi ' + user.username + '!\n', ()=>{
//   console.log('file is created');
// })

// console.log(os);
// console.log(fs)

// Importing files in nodejs

// const notes = require('./notes.js');
// var _ = require('lodash');

// console.log('server file is available')
// var age = notes.age;
// var result = notes.addNumber(age+12,45)
// console.log(age)
// console.log('result is now: '+result)

// var data = ["person", "person", 1, 2, 1, 2, 'name', 'age', '2'];

// var filter = _.uniq(data);
// console.log(filter)

// CONVERT JSON TO JS OBJECT

// const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.name);

// CONVERT OBJECT TO JSON STRING

// const objectToConvert = {
//   name: "Alice",
//   age: 30
// };
// const jsonStringified = JSON.stringify(objectToConvert);
// console.log(jsonStringified);

// CREATE SERVER IN NODEJS

const express = require('express')
const app = express()
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());  // req.body

app.get('/', function (req, res) {
  res.send('Welcome to my hotel.. How i can help you? We have list of menus')
})

// Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

// Use the router
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);

app.listen(3000, ()=>{
  console.log('listening on port 3000')
})