# BAMAZON

A `CLI` e-commerce app that is cool and easy to use.  `mySQL and Node.js` were the tools of choice.  The app provides a hassle-free shopping experience to customer, and allows the Manager to gain easy access to his inventory and edit as needed.


## Bamazon Customer

1. At Startup

	When the customer launches the app, he/she will be given the option to choose from the list of available items:

	![Image of Customer View Initial Screen](https://menelik7.github.io/Bamazon/images/CustomerView1.PNG)

2. Shopping

	* If the user decides to shop, they will enter an `item_id`.  The app will then display the chosen item and will prompt the user to enter a quantity.  If the item_id was invalid, the user will be prompted to re-enter a valid item_id:

	![Image of Customer Item Choice](https://menelik7.github.io/Bamazon/images/CustomerView2.PNG)
	![Image of Customer invalid item_id](https://menelik7.github.io/Bamazon/images/CustomerView3.PNG)

	* If the user entered an `amount` that the store can accomodate, then the customer will be given confirmation that the order has gone through, their total will be displayed, and they will have the choice to `keep shopping or exit`.  If they entered an amount that the store cannot accommodate, they will be shown what the store currently has on stock and prompted to enter a lower quantity:

	![Image of Customer Valid item_id and Quantity](https://menelik7.github.io/Bamazon/images/CustomerView4.PNG)
	![Image of Customer Quantity Too High](https://menelik7.github.io/Bamazon/images/CustomerView5.PNG)

	* If they chose the `exit`:

	![Image of Customer Exit](https://menelik7.github.io/Bamazon/images/CustomerView6.PNG)


## Bamazon Manager

1. At Startup

When the Manager starts the app, he will be given the option to choose from a list of menu items:

![Image of Manager Menu Options](https://menelik7.github.io/Bamazon/images/ManagerView1.PNG)

###### View Productas for Sale
		
![Image of Products for Sale](https://menelik7.github.io/Bamazon/images/ManagerView2.PNG)

###### View Low Inventory

If there are any items that the store has less than five (5) in `quantity`:
![Image of Low Inventory](https://menelik7.github.io/Bamazon/images/ManagerView3.PNG)

If there is no `Low Inventory` to report:
![Image of No Low Inventory](https://menelik7.github.io/Bamazon/images/ManagerView4.PNG)

###### Add to Iventory
		
If the Manager decides to ad to the current inventory, he will be prompted to enter the `item_id` of the product he wishes to order, and enter an amount.  Confirmation will be displayed once the order is complete.  He can then chose to view the `Products for Sale` to ascertain that the order was processed.
![Image of Add to Inventory](https://menelik7.github.io/Bamazon/images/ManagerView5.PNG)

###### Add New Product
		
To add a new product, the Manager will be prompted to enter a series of information including `product_name`, `department_name`, `price`, and `stock_quantity`.  Once the information has been entered, the system will update the inventory with the new product.  The Manager can then chose the `Products for Sale` option from the menu to confirm that the task was successfully carried out.
![Image of Add New Product](https://menelik7.github.io/Bamazon/images/ManagerView6.PNG)

###### Delete a Product
		
To delete a product, the Manager will be prompted to enter the `item_id` of the product.  If the entry was valid, the system will remove the corresponding product.  The Manager can then chose the `Products for Sale` option from the menu to confirm that the task was successfully carried out.
![Image of Delete a Product](https://menelik7.github.io/Bamazon/images/ManagerView7.PNG)

###### Exit
		
If the Manager decides to `Exit`:
![Image of Manager Exit](https://menelik7.github.io/Bamazon/images/ManagerView.PNG)


	



