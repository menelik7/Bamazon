//Copyright Menelik Tefera 2017
//menelikworku@gmail.com
//GT Coding Bootcamp
//Bamazon

var mysql = require("mysql");
var inquirer = require("inquirer");
var result = [];
var item = "";
var stock = 0;
var idContainer = [];
var chosenItem = false;
require("console.table");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Username
  user: "root",

  // Password
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  // console.log("connected as id " + connection.threadId);
  console.log("\n\rHello dear customer - here is a list of available items: \n\r");
  customerView();
});

IF YOU WISH TO SEE THE REST OF THIS CODE, CONTACT THE OWNER!
