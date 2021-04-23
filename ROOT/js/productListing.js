// To create an instance of ProductsController Class
const productsControl = new ProductsController();

function loadData() {
    // Add items to the ProductsController Class - Hardcoded
    // name, description, imageURL, style, price
    productsControl.addItem('Cat T-Shirt Black','4 MSL', 'http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif','Animal','10');

    productsControl.addItem('Dog T-Shirt Black','7 MSL', 'http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif','Animal','20');

    productsControl.addItem('Duck T-Shirt Black','10 MSL', 'http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif','Animal','15');

    productsControl.addItem('London T-Shirt Black','9 MSL', 'http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif','City','20');

    productsControl.addItem('Paris T-Shirt Black','6 MSL', 'http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif','City','20');

    productsControl.addItem('Taipei T-Shirt Black','8 MSL', 'http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif','City','20');

    productsControl.displayItem();
}

loadData();