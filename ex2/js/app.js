window.onload = function(){

var shoppingCart =
[
  { "image": "/prep-shopping-cart/ex1/images/jello.jpg","name": "Luscious Jello Mix", "description": ["Very Elegant", "Trending item", "Come in Purple"], "price": 80.65 },
  { "image": "/prep-shopping-cart/ex1/images/desk.jpg","name": "Tarnished Standing Desk", "description": ["Modular", "Works for both Tall and Loud People", "Smells like Productivity"], "price": 1654.99},
  { "image": "/prep-shopping-cart/ex1/images/grenade.jpg","name": "Hand-made Hand Grenades", "description": ["Such gift!", "Much boom!", "Very safe for kids"], "price": 10.44},
  { "image": "/prep-shopping-cart/ex1/images/cookie.jpg","name": "Pan-fried Cookie Dough", "description": ["Chocolate", "Family-size", "Hot Mess"], "price": 16.99 },
  { "image": "/prep-shopping-cart/ex1/images/hanger.jpg","name": "Fancy Dress Hanger", "description": ["Keep organized", "On Sale"], "price": 67.32 },
  { "image": "/prep-shopping-cart/ex1/images/mustache.jpg","name": "Snarky Britsh Mustache 3-Pack", "description": ["Sharing is caring!", "Hugs not drugs", "As seen on 'So You Think You Can Dance - Nigeria!'"], "price": 1.99 },
];


var options="";

function createOption(){
	for (var j=1; j<=10; j++){
		options += "<option>" + j + "</option>";
	}
}

/*function quantityTimesPrice() {
   var y = document.getElementsByTagName("select").options;
   var z = (shoppingCart[i].price * y);
}*/

var total=0;

for (var i=0; i<shoppingCart.length; i++){

	var x = createOption();
     var y = document.getElementsByTagName("select").options;
   var z = (shoppingCart[i].price * y);

	var item = document.createElement("div");
	item.className = ("itemWrapper");
	document.getElementById("cartItems").appendChild(item);

	var image = document.createElement("div");
	image.className = "itemImage";
	image.innerHTML = "<img src=" + shoppingCart[i].image + " />";
	document.getElementsByClassName("itemWrapper")[i].appendChild(image);

	var itemNameDescrip = document.createElement("div");
 	itemNameDescrip.className = ("itemNameDescrip");
  itemNameDescrip.innerHTML = shoppingCart[i].name + "<br /> <br />" + shoppingCart[i].description;
  document.getElementsByClassName("itemWrapper")[i].appendChild(itemNameDescrip);

  var quantity = document.createElement("div");
  quantity.className = ("quantity");
  document.getElementsByClassName("itemWrapper")[i].appendChild(quantity);

  var select = document.createElement("select");
  select.innerHTML = options;
  document.getElementsByClassName("quantity")[i].appendChild(select);

  var itemPrice = document.createElement("div");
  var myQuantity = document.getElementsByTagName("select")[i].selectedIndex;
	itemPrice.className = "itemPrice";
 	itemPrice.innerHTML = "$" + (shoppingCart[i].price * myQuantity);
 	document.getElementsByClassName("itemWrapper")[i].appendChild(itemPrice);


 	total += shoppingCart[i].price;
 	calculate.innerHTML = "$" + total;

  }
};