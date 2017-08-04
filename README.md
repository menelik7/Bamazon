# BAMAZON

A `CLI` e-commerce app that is cool and easy to use.  `mySQL and Node.js` were the tools of choice.  The app provides a hassle-free shopping experience to the customer, and allows the Manager to gain easy access to his inventory and edit as needed.


## Bamazon Customer

###### At Startup

When the customer launches the app, he/she will be given the option to choose from a list of available items:

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

If the customer choses the `Exit`:

![Image of Customer Exit](https://menelik7.github.io/Bamazon/images/CustomerView6.PNG "Customer Exit")




## Bamazon Manager

###### At Startup

When the Manager starts the app, he will be given the opportunity to choose from a list of menu options:

![Image of Manager Menu Options](https://menelik7.github.io/Bamazon/images/ManagerView1.PNG "Manager Menu Options")

###### View Products for Sale
		
![Image of Products for Sale](https://menelik7.github.io/Bamazon/images/ManagerView2.PNG "Products for Sale")

###### View Low Inventory

If there are any items that the store has less than five (5) in `quantity`:

![Image of Low Inventory](https://menelik7.github.io/Bamazon/images/ManagerView3.PNG "Low Inventory")

If there is no `Low Inventory` to report:

![Image of No Low Inventory](https://menelik7.github.io/Bamazon/images/ManagerView4.PNG "No Low Inventory")

###### Add to Iventory
		
If the Manager decides to add to the current inventory, he will be prompted to enter the `item_id` of the product he wishes to order, and enter an amount.  Confirmation will be displayed once the order has been completed.  He can then chose to view the `Products for Sale` to ascertain that the order was processed:

![Image of Add to Inventory](https://menelik7.github.io/Bamazon/images/ManagerView5.PNG "Add to Inventory")

###### Add New Product
		
To add a new product, the Manager will be prompted to enter a series of information including `product_name`, `department_name`, `price`, and `stock_quantity`.  Once the information has been entered, the system will update the inventory with the new product.  The Manager can then chose the `Products for Sale` option from the menu to confirm that the task was successfully carried out:

![Image of Add New Product](https://menelik7.github.io/Bamazon/images/ManagerView6.PNG "Add New Product")

###### Delete a Product
		
To delete a product, the Manager will be prompted to enter the `item_id` of the product.  If the entry was valid, the system will remove the corresponding product.  The Manager can then chose the `Products for Sale` option from the menu to confirm that the task was successfully carried out:

![Image of Delete a Product](https://menelik7.github.io/Bamazon/images/ManagerView7.PNG "Delete a Product")

###### Exit
		
If the Manager decides to `Exit`:

![Image of Manager Exit](https://menelik7.github.io/Bamazon/images/ManagerView8.PNG "Manager Exit")

if at any point the user makes an invalid entry, the app will prompt him/her to re-enter the information as demonstrated in the example below:

![Image of Manager invalid item_id](https://menelik7.github.io/Bamazon/images/ManagerView9.PNG "Manager invalid item_id")

## Copyright

Menelik Tefera 2017
menelikworku@gmail.com


	



