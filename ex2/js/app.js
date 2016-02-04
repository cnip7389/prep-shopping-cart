window.onload = function() {

    var shoppingCart =
        [{
            "image": "/prep-shopping-cart/ex1/images/jello.jpg",
            "name": "Luscious Jello Mix",
            "description": ["Very Elegant", "Trending item", "Come in Purple"],
            "price": 80.65,
            "quantity": 1
        }, {
            "image": "/prep-shopping-cart/ex1/images/desk.jpg",
            "name": "Tarnished Standing Desk",
            "description": ["Modular", "Works for both Tall and Loud People", "Smells like Productivity"],
            "price": 1654.99,
            "quantity": 1
        }, {
            "image": "/prep-shopping-cart/ex1/images/grenade.jpg",
            "name": "Hand-made Hand Grenades",
            "description": ["Such gift!", "Much boom!", "Very safe for kids"],
            "price": 10.44,
            "quantity": 1
        }, {
            "image": "/prep-shopping-cart/ex1/images/cookie.jpg",
            "name": "Pan-fried Cookie Dough",
            "description": ["Chocolate", "Family-size", "Hot Mess"],
            "price": 16.99,
            "quantity": 1
        }, {
            "image": "/prep-shopping-cart/ex1/images/hanger.jpg",
            "name": "Fancy Dress Hanger",
            "description": ["Keep organized", "On Sale"],
            "price": 67.32,
            "quantity": 1
        }, {
            "image": "/prep-shopping-cart/ex1/images/mustache.jpg",
            "name": "Snarky Britsh Mustache 3-Pack",
            "description": ["Sharing is caring!", "Hugs not drugs", "As seen on 'So You Think You Can Dance - Nigeria!'"],
            "price": 1.99,
            "quantity": 1
        }, ];



    function createOption() {
        var myOptions = "";
        for (var j = 1; j <= 10; j++) {
            myOptions += "<option>" + j + "</option>";
        }

        return myOptions;
    }

    /*
function createOptions(quantityElem){
  for (var i =0;i <=10; i++){
  var optionElem = document.createElement("option");
  optionElem.value = i;
  optionElem.textContent = i;
  quantityElem.appendChild(optionElem);
  }
}
*/

    /*
function updatePrice(){
  return function(){
    var selectedQuantity = quantityElem.options[quantity]
  
  }
  
}
*/

    function calculateItemTotals(select, item, itemPrice) { // I need the selected dropdown, the item info and the div that will the result) 
        return function() { // calculateItemTotals will return a function that actually does the math work.
            var currentValue = select.options[select.selectedIndex].value; //get the options inside the select element, then find the selectedindex of that select element, then get the value of the selected index.
            item.quantity = currentValue;
            var itemTotal = currentValue * item.price; // take the value inside selected index and multiply by the item object's price
            console.log(itemTotal, currentValue, item.price); // just checking the values
            itemPrice.textContent = "$" + itemTotal.toFixed(2); // put the $itemtotal into the itemprice div as text.
        };

        /*  var selects = document.getElementsByTagName("select");
  for(var i = 0; i < selects.length; i++){
    var currentSelect = selects[i];
    var currentValue = currentSelect.options[currentSelect.selectedIndex].value;
    var itemTotal = currentValue * shoppingCart[i].price;
  }*/

    }

  function defaultTotal (){
  var dfTotal = 0;
  for( var i=0; i<shoppingCart.length; i++){
  dfTotal += (shoppingCart[i].price * shoppingCart[i].quantity);
}
  return dfTotal;
}


    function calculateHandler(select, item) {
        return function() {
            var total = 0;
            for (var i = 0; i < shoppingCart.length; i++) {
                total += item[i].price * item[i].quantity;
                console.log(total);
            }
            calculate.textContent = "$" + total.toFixed(2);
        };
    }
    /*function createUpdateSubtotalHandler(total){
  var subtotal = 0;
  for (var i=0; i < shoppingCart.length; i++){
    subtotal += shoppingCart[i].price * shoppingCart[i].quantity;
  }
  total.textContent="$" + subtotal;
}*/


    for (var i = 0; i < shoppingCart.length; i++) {

        var options = createOption();
        var y = document.getElementsByTagName("select").options;
        var z = (shoppingCart[i].price * y);

        var item = document.createElement("div");
        item.className = ("itemWrapper");
        document.getElementById("cartItems").appendChild(item);

        var image = document.createElement("div");
        image.className = "itemImage";
        image.innerHTML = "<img src=" + shoppingCart[i].image + ">";
        document.getElementsByClassName("itemWrapper")[i].appendChild(image);

        var itemNameDescrip = document.createElement("div");
        itemNameDescrip.className = ("itemNameDescrip");
        itemNameDescrip.innerHTML = "<span>" + shoppingCart[i].name + "</span> <br /> <br /> <span>" + shoppingCart[i].description + "</span>";
        document.getElementsByClassName("itemWrapper")[i].appendChild(itemNameDescrip);

        var quantity = document.createElement("div");
        quantity.className = ("quantity");
        document.getElementsByClassName("itemWrapper")[i].appendChild(quantity);

        var select = document.createElement("select");
        select.innerHTML = options;
        document.getElementsByClassName("quantity")[i].appendChild(select);

        var itemPrice = document.createElement("div");
        itemPrice.className = "itemPrice";
        itemPrice.textContent = "$" + shoppingCart[i].price;

        calculate.textContent = "$" + defaultTotal();

        select.addEventListener("change", calculateItemTotals(select, shoppingCart[i], itemPrice));
        select.addEventListener("change", calculateHandler(select, shoppingCart));

        document.getElementsByClassName("itemWrapper")[i].appendChild(itemPrice);






    /*var button = document.createElement("button");
  button.textContent = "updatePrice";*/
}
};