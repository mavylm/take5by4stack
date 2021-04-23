// To create an instance of ProductsController Class
const productsControl = new ProductsController();

function loadData() {
    // Add items to the ProductsController Class - Hardcoded
    // name, description, imageURL, style, price
    productsControl.addItem('1-year Kindle Subscription','NIL', 'https://i.imgur.com/Mjs27Fc.jpeg','eBooks','$29.99');

    productsControl.addItem('Introduction to Finance','NIL', 'https://i.imgur.com/RdWuRt2.jpg','eBooks','$89.90');

    productsControl.addItem('20% OFF] Art Course Starter Pack','NIL', 'https://i.imgur.com/t8ClSSX.jpg','Stationeries','$29.99');

    productsControl.addItem('60 Classic Colour Pencils Sketch Set','NIL', 'https://i.imgur.com/cAc7GRr.jpg','Stationeries','$32.00');

    productsControl.addItem('Key Stage Two Assessment Papers (Year 2020)', 'NIL', 'https://i.imgur.com/uyEBliM.jpg','Assessment','$19.90');

    productsControl.addItem('Kindergarten Exam Coloring Book', 'NIL', 'https://i.imgur.com/4Vjn0Pr.jpg','Assessment','$29.90');

    productsControl.addItem('Consumer Behaviour of Singaporeans (2020 Edition)', 'NIL', 'https://i.imgur.com/iTPDXJ4.jpg','Research','$49.90');

    productsControl.addItem('Social Media Marketing (Intermediate Course)', 'NIL', 'https://i.imgur.com/nVQ4Ly9.jpg','Online','$499.00');

    productsControl.addItem('[50% OFF] Gaming Chair', 'NIL', 'https://i.imgur.com/uo9m0Rl.jpg','Others','<del>$599</del>$299');

    productsControl.displayItem();
}

loadData();