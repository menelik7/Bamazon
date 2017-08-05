//Copyright Menelik Tefera 2017
//menelikworku@gmail.com
//GT Coding Bootcamp
//Bamazon

var mysql = require("mysql");
var inquirer = require("inquirer");
var result = [];
var item = "";
var itemIndex = "";
var stock = 0;
var idContainer = [];
var chosenItemId = false;
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

//Connect to the database.
connection.connect(function(err) {
  if (err) throw err;
  // console.log("connected as id " + connection.threadId);
  console.log("\n\rHello dear customer - here is a list of available items: \n\r");
  customerView();
});

//Function that displays to the customer all the available items.
function customerView() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      result.push({
        item_id: res[i].item_id,
        product_name: res[i].product_name,
        // department_name: res[i].department_name,
        price: res[i].price,
        // stock_quantity: res[i].stock_quantity
      });
    }
    // console.log(result);
    console.table(result);
    chooseAnItem();
  });
}

//Function that prompts the customer to choose an item.
function chooseAnItem() {
  inquirer
    .prompt({
      name: "buyAnItem",
      type: "input",
      message: "Please enter the item_id of the product you are interested in or enter 0 to exit: ",
    })
    .then(function(answer) {
      chosenItemId = answer.buyAnItem;
      if (chosenItemId === "0") {
        console.log("\n\rThank you for visiting Bamazon!\n\r");
        connection.end();
        return;
      }
      connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
          idContainer.push(res[i].item_id)
        }
        itemIndex = idContainer.indexOf(Number(chosenItemId));
         if (itemIndex != -1){
          item = res[itemIndex].product_name;
          console.log("\n\rYou have chosen " + item + "\n\r");
          enterAmount();
         } else {
          console.log("\n\rPlease enter a valid item_id...\n\r");
          return chooseAnItem();
         }
      });
    });
}

//Function to enter amount of the item the customer wishes to order.
function enterAmount() {
  inquirer
    .prompt({
      name: "enterAmount",
      type: "input",
      message: "PLease enter the quantity you would like to purchase: ",
    })
    .then(function(answer) {
      var amount = answer.enterAmount;
      console.log("\r");
      connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
         stock = res[itemIndex].stock_quantity;
         var total = res[itemIndex].price * amount;
          if (amount <= stock){
            console.log("Your order of " + amount + " " + item + "(s) has been succefully placed.\r\n" +
                        "Your total is: $" + total.toFixed(2) + " + tax.\n\r");
            connection.query(
            "UPDATE products SET ? WHERE ?",[
                {
                  stock_quantity: res[itemIndex].stock_quantity - amount,
                },
                {
                  item_id: res[itemIndex].item_id
                },
                {
                  product_sales: res[itemIndex].product_sales + total.toFixed(2)
                }
              ]
            );
            connection.query(
            "UPDATE products SET ? WHERE ?",[
              {
                product_sales: res[itemIndex].product_sales + Number (total.toFixed(2))
              },
              {
                item_id: res[itemIndex].item_id
              }
            ]
          );
            keepShoppingOrExit();
          } else {
            console.log("Sorry we only have " + stock + " currently in stock.  PLease lower the quantity of your order.\n\r")
            return enterAmount();
          }
      });
    });
}

//Function to give the customer to exit or keep shopping.
function keepShoppingOrExit() {
  inquirer
    .prompt({
      name: "keepShoppingOrExit",
      type: "list",
      message: "What would you like to do?",
      choices: ["Continue shopping", "Exit"]
    })
    .then(function(input) {
      console.log("\r");
      switch(input.keepShoppingOrExit) {

       case "Continue shopping":
          result = [];
          customerView();
          break;

       case "Exit":
          console.log("Thanks for visiting Bamazon!");
          connection.end();
          return;
          break;
      }
    });
}



