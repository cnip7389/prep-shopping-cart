window.onload = function(){

var shoppingCart =
[
  { "image": "images/jello.jpg","name": "Luscious Jello Mix", "description": ["Very Elegant", "Trending item", "Come in Purple"], "price": 80.65 },
  { "image": "images/desk.jpg","name": "Tarnished Standing Desk", "description": ["Modular", "Works for both Tall and Loud People", "Smells like Productivity"], "price": 1654.99},
  { "image": "images/grenade.jpg","name": "Hand-made Hand Grenades", "description": ["Such gift!", "Much boom!", "Very safe for kids"], "price": 10.44},
  { "image": "images/cookie.jpg","name": "Pan-fried Cookie Dough", "description": ["Chocolate", "Family-size", "Hot Mess"], "price": 16.99 },
  { "image": "images/hanger.jpg","name": "Fancy Dress Hanger", "description": ["Keep organized", "On Sale"], "price": 67.32 },
  { "image": "images/mustache.jpg","name": "Snarky Britsh Mustache 3-Pack", "description": ["Sharing is caring!", "Hugs not drugs", "As seen on 'So You Think You Can Dance - Nigeria!'"], "price": 1.99 },
];

var total=0;

for (var i=0; i<shoppingCart.length; i++){

	var item = document.createElement("div");
	item.className = ("itemWrapper");
	document.getElementById("cartItems").appendChild(item);

	var image = document.createElement("div");
	image.className = "itemImage";
	image.innerHTML = "<img src=" + shoppingCart[i].image + " />";
	document.getElementsByClassName("itemWrapper")[i].appendChild(image);

	var itemNameDescrip = document.createElement("div");
  itemNameDescrip.className = ("itemNameDescrip");
  itemNameDescrip.innerHTML = "<span>" + shoppingCart[i].name + "</span> <br /> <br /> <span>" + shoppingCart[i].description + "</span>";
  document.getElementsByClassName("itemWrapper")[i].appendChild(itemNameDescrip);
  	
  //var description = document.createElement("div");
	//description.className = ("itemDescription"/* + [i+1]*/);
	//description.innerHTML = shoppingCart[i].description;
	//document.getElementsByClassName("itemName"/* + (i+1)*/)[i].appendChild(description);

  var itemPrice = document.createElement("div");
	itemPrice.className = "itemPrice";
 	itemPrice.innerHTML = "$" +shoppingCart[i].price;
 	document.getElementsByClassName("itemWrapper")[i].appendChild(itemPrice);

 	total += shoppingCart[i].price;
 	calculate.innerHTML = "$" + total;

  }
};

/* TO NAME EACH NAME/CLASS NAME UNIQUELY, INCORPORATE i INTO NAME.


for (var i=0; i<shoppingCart.length; i++){

  console.log(shoppingCart[i].image);

  var item=document.createElement("div");
  item.id=("item"+ [i+1]);
  document.getElementById("cartItems").appendChild(item);

  var image=document.createElement("span");
  image.className="itemImage";
  image.innerHTML= "<img src=" + shoppingCart[i].image + " />";
  document.getElementById("item" + (i+1)).appendChild(image);

  var itemName = document.createElement("div");
  itemName.id=("itemName" + [i+1]);
  itemName.innerHTML = shoppingCart[i].name;
  document.getElementById("item" + (i+1)).appendChild(itemName);
    
  var description=document.createElement("div");
  description.id=("itemDescription" + [i+1]);
  description.innerHTML = shoppingCart[i].description;
  document.getElementById("item" + (i+1)).appendChild(description);

  var itemPrice = document.createElement("span");
  itemPrice.className="itemPrice";
  itemPrice.innerHTML = "$" +shoppingCart[i].price;
  document.getElementById("item"+ (i+1)).appendChild(itemPrice);

  total += shoppingCart[i].price;
  calculate.innerHTML = "$" + total;
  }*/