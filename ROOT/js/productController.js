// Doing a product web app in product page to display the name, description, imageURL, style, price etc.

const createHTMLList = (name, description, imageURL) =>
`<div class="col-lg-4">
<div class="card" style="width: 18rem;">
    <img src=${imageURL} class="card-img-top"
        alt="image">
    <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${description}</p>
        <a href="#" class="btn btn-primary">More</a>
    </div>
</div>
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

            const productHTML = createHTMLList(item.oName, item.oDescription, item.oImageURL);

            productHTMLList.push(productHTML);
        }

        // Join all the elements in my productHTMLList into one string, and seperated by a break
        const pHTML = productHTMLList.join('\n');
        document.querySelector('#row').innerHTML = pHTML;
    }


} // End of ProductsController class