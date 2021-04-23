// Doing a product web app in product page to display the name, description, imageURL, style, price etc.

const createHTMLList = (imageURL, name, price) =>
`<div class="col-lg-4 col-sm-6">
    <a href="#"><div class="productCard">
        <img src=${imageURL} class="card-img-top">
        <div class="productInfo text-center">
        <b>${name}</b>
        <p class="productPrice">$${price}</p>
        </div>
    </div></a>
</div>

`;

class ProductsController {

    constructor() {
        this._items = [];  // Create an array to store the details of product items
    }

    // Method to add the items into the array
    addItem(name, description, imageURL, style, price) {
        const itemsObj = {
            oName: name,
            oDescription: description,
            oImageURL: imageURL,
            oStyle: style,
            oPrice: price
        };

        this._items.push(itemsObj);
    }

    displayItem() {
        var productHTMLList = [];

        for (var i=0; i<this._items.length; i++) {
            const item = this._items[i]; // Assign the individual item to the variable

            const productHTML = createHTMLList(item.oImageURL, item.oName, item.oPrice);

            productHTMLList.push(productHTML);
        }

        // Join all the elements in my productHTMLList into one string, and seperated by a break
        const pHTML = productHTMLList.join('\n');
        document.querySelector('#productRow').innerHTML = pHTML;
    }


} // End of ProductsController class