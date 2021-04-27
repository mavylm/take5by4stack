// Doing a product web app in product page to display the name, description, imageURL, style, price etc.

const createHTMLList = (index, imageURL, name, price) =>
`<div class="col-lg-4 col-sm-6">
    <a id="${index}" href="#" data-toggle="modal" data-target="#productModal"><div class="productCard">
        <img src=${imageURL} class="card-img-top">
        <div class="productInfo text-center">
        <b>${name}</b>
        <p class="productPrice">$${price}</p>
        </div>
    </div></a>
</div>

`;


function displayProductDetails(item) {
    document.querySelector('#modalName').innerText = item.oName;
    document.querySelector('#modalImg').src = item.oImageURL;
    document.querySelector('#modalStyle').innerText = item.oStyle;
    document.querySelector('#modalPrice').innerText = item.oPrice;
    document.querySelector('#modalDesc').innerText = item.oDescription;
}


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

            const productHTML = createHTMLList(i, item.oImageURL, item.oName, item.oPrice);

            productHTMLList.push(productHTML);
        }

        // Join all the elements in my productHTMLList into one string, and seperated by a break
        const pHTML = productHTMLList.join('\n');
        document.querySelector('#productRow').innerHTML = pHTML;

        // addEventListener - click 
        for (var i=0; i<this._items.length; i++) {
            const item = this._items[i];
            document.getElementById(i).addEventListener("click", function () {
                displayProductDetails(item);
            });
        }
    }


} // End of ProductsController class