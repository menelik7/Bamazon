//Copyright Menelik Tefera 2017
//menelikworku@gmail.com
//GT Coding Bootcamp
//Bamazon 

var mysql = require("mysql");
var inquirer = require("inquirer");
var result = [];
var idContainer = [];
var itemId = "";
var itemIndex = "";
var item = "";
var stock = 0;
var newQty = 0;
var totalProfit = [];
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
  console.log("\n\rWelcome back Mr. Supervisor!\n\r");
  menuOptions();
});


function ViewProductSalesByDepartment() {
  console.log("\r");
  connection.query("SELECT departments.department_id, departments.department_name, departments.over_head_costs, products.product_sales FROM departments INNER JOIN products ON departments.department_id=products.item_id", 
  function(err, res) {
    if (err) throw err;
    for (i=0; i < res.length; i++){
      totalProfit.push({
        total_profit: res[i].product_sales - res[i].over_head_costs
      });
      result.push({
        department_id: res[i].department_id,
        department_name: res[i].department_name,
        over_head_costs: res[i].over_head_costs,
        product_sales: res[i].product_sales,
        total_profit: totalProfit[i].total_profit.toFixed(2)
      });
    }
    console.table(result);
    menuOptions();
  }) 
}


function menuOptions() {
  inquirer
    .prompt({
      name: "menuOptions",
      type: "list",
      message: "What would you like to do?",
      choices: ["View Product Sales by Department", "Exit"]
    })
    .then(function(input) {
      switch (input.menuOptions) {

        case "View Product Sales by Department":
          result = [];
          ViewProductSalesByDepartment();
          break;

        case "Exit":
          console.log("\nThanks for visiting Bamazon!")
          connection.end();
          return;
          break;
      }
    });
}