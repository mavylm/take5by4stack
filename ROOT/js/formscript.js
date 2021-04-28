// Global Variables
var formList = [];

// Reset form
function resetError() {
    document.querySelector("#termsErrorMsg").innerHTML = "";
    document.querySelector("#categoryErrorMsg").innerHTML = "";
}

// Submit form
function submitForm() {

    resetError();
    
    // Pass the input values to variables
    var name = document.querySelector("#productName").value;
    var price = document.querySelector("#productPrice").value;
    var category = document.querySelector("#productCategory").value;
    var quantity = document.querySelector("#productQuantity").value;
    var description= document.querySelector("#productDescription").value;

    // Checkbox
    var checkBoxArray = [];
    checkBoxArray.push(document.querySelector("#agreeTerms").checked);


    // Validation: Checkbox must be checked
    // for (var i=0; i<checkBoxArray.length; i++) {
    
    var found = false;
    checkBoxArray.forEach(item => {
        if (item) // == true
        {     
            found = true;
        }
    });

    if (!found) {
        document.querySelector("#termsErrorMsg").innerHTML = "Please agree to the Terms and Conditions";
    }
    
    // Before the values are store into the array
    if (found) {  // found == true
        addToList(name, price, category, quantity, description, checkBoxArray);

        // Modal pop up
        $('#addedSuccessfully').modal('show');
        
    }

     // Validation: At least one category is selected
     function validateCategory() {
        if (category == null || category == "") {
            document.querySelector("#categoryErrorMsg").innerHTML = "Please select a category";
        }
    }  // End of validateCategory function 

    validateCategory();
}

function addToList(name, price, category, quantity, description, checkBoxArray) {
    // Store the values into the formList array
    // Create an object > Push object into formList array
    const item = {
        i_name: name, // Key-value pair
        i_price: price,
        i_category: category,
        i_quantity: quantity,
        i_description: description,
        terms: checkBoxArray[0]
    }

    formList.push(item);

    listForm();

}

// To check in console
function listForm() {
    console.log("Product Info: " + formList.length);
    console.log(formList);
}

