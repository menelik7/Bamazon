A `CLI` commerce app that is cool and easy to use.  `mySQL and Node.js` were the tools of choice.  The app provides a hassle-free shopping experience to the customer, and allows the Manager to gain easy access to his inventory and edit as needed.

Our database has two tables:
1. `products` will be used to display available items to the customer, as well as products for sale to the Manager.
2. `departments` will be used to display products sales to the Supervisor. 


## Bamazon Customer

###### At Startup

When the customer launches the app, he/she will be given the option to choose from a list of available items pulled from the `products` table:

![Image of Customer View Initial Screen](https://menelik7.github.io/Bamazon/images/CustomerView1.PNG "Customer View Initial Screen")

###### Shopping
If the user is not interested in the products, he/she enters "0" to `Exit`:

![Image of User Not Interested](https://menelik7.github.io/Bamazon/images/UserNotInterested.PNG "User Not Interested")

If the user decides to shop, they will enter an `item_id`.  The app will then display the chosen item and will prompt the user to enter a quantity:

![Image of Customer Item Choice](https://menelik7.github.io/Bamazon/images/CustomerView2.PNG "Customer Item Choice")

If the item_id was invalid, the user will be prompted to re-enter a valid item_id:

![Image of Customer invalid item_id](https://menelik7.github.io/Bamazon/images/CustomerView3.PNG "Customer invalid item_id")

If the user entered an `amount` that the store can accomodate, he/she will be given confirmation that the order has gone through, his/her total will be displayed, and he/she will have the choice to `keep shopping or exit`:

![Image of Customer Valid item_id and Quantity](https://menelik7.github.io/Bamazon/images/CustomerView4.PNG "Customer Valid item_id and Quantity")

If he/she entered an amount that the store cannot accommodate, the app will display what the store currently has in stock and prompt the user to enter a lower quantity:

![Image of Customer Quantity Too High](https://menelik7.github.io/Bamazon/images/CustomerView5.PNG "Customer Quantity Too High")

###### Exit

If the customer chooses to `Exit`:

![Image of Customer Exit](https://menelik7.github.io/Bamazon/images/CustomerView6.PNG "Customer Exit")




## Bamazon Manager

###### At Startup

When the Manager starts the app, he will be given the opportunity to choose from a list of menu options: `View Products for Sale`, `View Low Inventory`, `Add to Inventory`, `Add New Product`, `Delete a Product`, or `Exit`.

![Image of Manager Menu Options](https://menelik7.github.io/Bamazon/images/ManagerView1.PNG "Manager Menu Options")

###### View Products for Sale
		
![Image of Products for Sale](https://menelik7.github.io/Bamazon/images/ManagerView2.PNG "Products for Sale")

###### View Low Inventory

If there are any items that the store has less than five (5) in `quantity`:

![Image of Low Inventory](https://menelik7.github.io/Bamazon/images/ManagerView3.PNG "Low Inventory")

If there is no `Low Inventory` to report:

![Image of No Low Inventory](https://menelik7.github.io/Bamazon/images/ManagerView4.PNG "No Low Inventory")

###### Add to Iventory
		
If the Manager decides to add to the current inventory, he will be prompted to enter the `item_id` of the product he wishes to order, and enter an amount.  Confirmation will be displayed once the order has been completed.  He can then choose to view the `Products for Sale` to ascertain that the order was processed:

![Image of Add to Inventory](https://menelik7.github.io/Bamazon/images/ManagerView5.PNG "Add to Inventory")

###### Add New Product
		
To add a new product, the Manager will be prompted to enter a series of information including `product_name`, `department_name`, `price`, `stock_quantity`, and `over_head_costs`.  Once the information has been entered, the system will update both tables with the new product.  The Manager can then choose the `Products for Sale` option from the menu to confirm that the task was successfully carried out:

![Image of Add New Product](https://menelik7.github.io/Bamazon/images/ManagerView6.PNG "Add New Product")

###### Delete a Product
		
To delete a product, the Manager will be prompted to enter the `item_id` of the product.  If the entry was valid, the system will remove the corresponding product from both tables.  The Manager can then chose the `Products for Sale` option from the menu to confirm that the task was successfully carried out:

![Image of Delete a Product](https://menelik7.github.io/Bamazon/images/ManagerView7.PNG "Delete a Product")

###### Exit
		
If the Manager decides to `Exit`:

![Image of Manager Exit](https://menelik7.github.io/Bamazon/images/ManagerView8.PNG "Manager Exit")

If at any point the user makes an invalid entry, the app will prompt him/her to re-enter the information as demonstrated in the example below:

![Image of Manager invalid item_id](https://menelik7.github.io/Bamazon/images/ManagerView9.PNG "Manager invalid item_id")


## Bamazon Supervisor

###### At Startup

When the Supervisor starts the app, he will be given the opportunity to choose from a list of menu options: `View Product Sales by Department`, `Create New Department`, or `Exit`.

![Image of Supervisor Menu Options](https://menelik7.github.io/Bamazon/images/SupervisorView1.PNG "Supervisor Menu Options")

###### View Product Sales by Department

If the Supervisor choses to view the product sales, the app joins the entire `departments` table with the `product_sales` column from the `products` table.  It then DYNAMICALLY calculates the store's profit for each item (product_sales - over_head_cost) and pushes the values into a new `total_profit` column.  This new column finally gets pushed into the object array of our aforementioned joined table and gets printed to our console window.  The `total_profit` column is not part of our database.

![Image of Departments Database View](https://menelik7.github.io/Bamazon/images/departmentsDatabase.PNG "Departments Database View")
![Image of Products Database View](https://menelik7.github.io/Bamazon/images/productsDatabase.PNG "Products Database View")

###### Product Sales view after addition of a new product

![Image of Supervisor Product Sales View](https://menelik7.github.io/Bamazon/images/SupervisorView2.PNG "Supervisor Product Sales View after Addition of new product")

###### Products Sales view after deletion of the new product

![Image of Supervisor Product Sales View](https://menelik7.github.io/Bamazon/images/SupervisorView3.PNG "Supervisor Product Sales View after Deletion of new product")


## Copyright

Menelik Tefera 2017
menelikworku@gmail.com


	



