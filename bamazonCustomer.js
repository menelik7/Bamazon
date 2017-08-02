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

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  // console.log("connected as id " + connection.threadId);
  console.log("\n\rHello dear customer - here is a list of available items: \n\r");
  customerView();
});

//Fucntion that displays available items to the customer
function customerView() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      result.push({item_id: res[i].item_id,
                    product_name: res[i].product_name,
                    // department_name: res[i].department_name,
                    price: "$ " + res[i].price,
                    // stock_quantity: res[i].stock_quantity
                    });
    }
    // console.log(result);
    console.table(result);
    chooseAnItem();
  });
}

//Function that allows user to choose an item to buy.
function chooseAnItem() {
  inquirer
    .prompt({
      name: "buyAnItem",
      type: "input",
      message: "Please enter the item_id of the product you are interested in, or enter 0 to exit: ",
    })
    .then(function(answer) {
      choice = answer.buyAnItem;
      console.log("\r");
      if (choice > 0) {
        connection.query("SELECT * FROM products", function(err, res) {
          var idContainer = [];
          for (i=0; i < res.length; i++){
            idContainer.push(res[i].item_id)
          }
          chosenItem = idContainer.indexOf(Number(choice));
          item = res[chosenItem].product_name;
          console.log("You have chosen " + item + "!\n\r");
          enterAmount();
        });
      } else {
        console.log("Thanks for visiting Bamazon!");
        connection.end();
        return;
      }
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
         stock = res[chosenItem].stock_quantity;
         var total = res[chosenItem].price * amount;
          if (amount <= stock){
            console.log("Your order of " + amount + " " + item + "(s) has been succefully placed.\r\n" + 
                        "Your total is: $" + total.toFixed(2) + " + tax.\n\r");
            var query = connection.query(
              "UPDATE products SET ? WHERE ?",[
                {
                  stock_quantity: res[chosenItem].stock_quantity - amount,
                },
                {
                  item_id: res[chosenItem].item_id
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
          console.table(result);
          chooseAnItem();
          break;

        case "Exit":
          console.log("Thanks for visiting Bamazon!");
          connection.end();
          return;
          break;
      }
    });
}
