


var shoes = [];

function Product(brand, photo){
	this.brand = brand;
	
	this.photo = photo;

	shoes.push(this);
}

var earth = new Product('gold', 'img/watch1.jpg');
var desert = new Product('silver', 'img/watch2.jpg');
var sandal = new Product('gold', 'img/watch3.jpg');
var ugg = new Product('blue',  'img/watch4.jpg');
var air = new Product('silver', 'img/watch5.jpg');
var rain = new Product('blue', 'img/watch6.jpg');

for(var i = 0; i < shoes.length; i++) {
	var row = document.getElementById('hello');
	var contain = document.createElement('div');
	contain.className = 'col-12 col-sm-6 col-md-4 cons';
	row.appendChild(contain);
	var image = document.createElement('img');
	image.src = shoes[i].photo;
	image.className = 'img-fluid';
	image.id = "woo";
	contain.appendChild(image);
	var myH4 = document.createElement('h4');
	myH4.innerHTML = shoes[i].brand;
	contain.appendChild(myH4);
	// var myH5 = document.createElement('h5');
	// myH5.innerHTML = shoes[i].model;
	// contain.appendChild(myH5);
	// var myP = document.createElement('p');
	// myP.innerHTML = shoes[i].price;
	// contain.appendChild(myP);
	var click = document.createElement('button');
	click.innerHTML = "Buy";
	click.className = "tn btn-info";
	click.id = "butt";
	click.type = "button";
	contain.appendChild(click);


}