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
  console.log("\n\rWelcome back Mr. Manager!\n\r");
  menuOptions();
});

//Function that displays to the manager the current inventory.
function productsForSale() {
  console.log("\n\rHere's a list of products that are available for sale:\n\r");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      result.push({
        item_id: res[i].item_id,
        product_name: res[i].product_name,
        department_name: res[i].department_name,
        price: res[i].price,
        stock_quantity: res[i].stock_quantity
      });
    }
    console.table(result);
    menuOptions();
  })
}


function viewLowInventory() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      if (res[i].stock_quantity < 5) {
        result.push({item_id: res[i].item_id,
          product_name: res[i].product_name,
          department_name: res[i].department_name,
          price: res[i].price,
          stock_quantity: res[i].stock_quantity
        });
      }
    }
    if (result.length) {
      console.log("\n\rHere's today's list of low inventory:\n\r");
      console.table(result);
    } else {
      console.log("\n\rNo low inventory to report...\n\r")
    }
    menuOptions();
  })
}


function addInventoryView() {
  console.log("\n\r");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      result.push({
        item_id: res[i].item_id,
        product_name: res[i].product_name,
        department_name: res[i].department_name,
        price: res[i].price,
        stock_quantity: res[i].stock_quantity
      });
    }
    console.table(result);
    addToInventory();
  })
}

function addToInventory() {
  inquirer
    .prompt({
      name: "viewLowInventory",
      type: "input",
      message: "Please enter the item_id of the product you wish to order: ",
    })
    .then(function(answer) {
      itemId = answer.viewLowInventory;
      connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
          idContainer.push(res[i].item_id)
        }
        itemIndex = idContainer.indexOf(Number (itemId));
        if (itemIndex != -1) {
          item = res[itemIndex].product_name;
          console.log("\n\rYou have chosen " + item + "\n\r");
          enterAmount();
        } else {
          console.log("\n\rplease enter a valid item_id\n\r");
          return addToInventory();
        }
      })
    })
}

function enterAmount(){
  inquirer
    .prompt({
      name: "enterAmount",
      type: "input",
      message: "PLease enter the quantity you would like to order: ",
    })
    .then(function(answer) {
      var amount = answer.enterAmount;
      connection.query("SELECT * FROM products", function(err, res) {
        connection.query(
          "UPDATE products SET ? WHERE ?",
          [
            {
              stock_quantity: res[itemIndex].stock_quantity + Number(amount)
            },
            {
              product_name: res[itemIndex].product_name
            }
          ],
          function(err, res) {
            if (res.affectedRows === 0) {
              console.log("Please enter a valid item_id");
              return enterAmount();
            } else {
              console.log("\n\r" + res.affectedRows + " product(s) updated!\n");
              menuOptions();
            }
          }
        );
      })
    })
}

  
function addNewProduct() {
  inquirer.prompt([
  {
    name: "product_name",
    message: "PLease enter the product_name:"
  }, {
    name: "department_name",
    message: "PLease enter the department_name:"
  }, {
    name: "price",
    message: "PLease enter the price:"
  }, {
    name: "stock_quantity",
    message: "PLease enter the stock_quantity:"
  }, {
    name: "over_head_costs",
    message: "PLease enter the over_head_cost:"
  }
  ]).then(function(answers) {
    var productName = answers.product_name;
    var departmentName = answers.department_name;
    var Price = answers.price;
    var stockQuantity = answers.stock_quantity;
    var overHeadCost = answers.over_head_costs;
      connection.query("SELECT * FROM products", function(err, res) {
        connection.query(
          "INSERT INTO products SET ?",
          {
            product_name: productName,
            department_name: departmentName,
            price: Price,
            stock_quantity: stockQuantity,
            product_sales: 0
          }
        );
        connection.query(
          "INSERT INTO departments SET ?",
          {
            department_name: departmentName,
            over_head_costs: overHeadCost
          },
          function(err, res) {
            console.log("\n" + res.affectedRows + " product(s) inserted in the products and departments tables!\n");
            menuOptions();
          }
        );
      })
  })
}


function deleteAProductView() {
  console.log("\n\r");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      result.push({
        item_id: res[i].item_id,
        product_name: res[i].product_name,
        department_name: res[i].department_name,
        price: res[i].price,
        stock_quantity: res[i].stock_quantity
      });
    }
    console.table(result);
    deleteAProduct();
  })
}


function deleteAProduct() {
  inquirer
    .prompt({
      name: "deleteAProduct",
      type: "input",
      message: "Please enter the item_id of the product you wish to delete: ",
    })
    .then(function(answer) {
      itemId = answer.deleteAProduct;
      connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
          idContainer.push(res[i].item_id)
        }
        itemIndex = idContainer.indexOf(Number (itemId));
        if (itemIndex != -1) {
          connection.query(
            "DELETE FROM products WHERE ?",
            {
              item_id: res[itemIndex].item_id
            }
          );
          connection.query("SELECT * FROM departments", function(err, res) {
            connection.query(
              "DELETE FROM departments WHERE ?",
              {
                department_id: res[itemIndex].department_id
              },
              function(err, res) {
                console.log("\n\r" + res.affectedRows + " product(s) updated in the products and departments tables!\n");
                menuOptions();
              }
            );
          })
        } else {
          console.log("\n\rPlease enter a valid item_id\n\r");
          return deleteAProduct();
        }
      })
    })
}

function menuOptions() {
  inquirer
    .prompt({
      name: "menuOptions",
      type: "list",
      message: "What would you like to do?",
      choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product", "Delete a Product", "Exit"]
    })
    .then(function(input) {
      switch (input.menuOptions) {

        case "View Products for Sale":
          result = [];
          productsForSale();
          break;

        case "View Low Inventory":
          result = [];
          viewLowInventory();
          break;

        case "Add to Inventory":
          result = [];
          addInventoryView();
          break;

        case "Add New Product":
          addNewProduct();
          break;

        case "Delete a Product":
          result = [];
          deleteAProductView();
          break;

        case "Exit":
          console.log("\n\rThanks for visiting Bamazon!")
          connection.end();
          return;
          break;
      }
    });
}
