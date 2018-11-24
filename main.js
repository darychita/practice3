//global variables
var userForm; // form to creating new user
var userTable; // table to display users
var createButton; // button gets values from the form and produces an object of user  

var BRUCE = {
	// default user for displaying in form and table
	fname: "Bruce",
	lname: "Wayne",
	age: 35,
	city: "Gotham",
	interest: ["Reading", "Helping people"],
	getFullName: function(){
		return this.fname + " " + this.lname;
	}
};

// page initialization
window.onload = function () {
	// objects 
	userTable = document.getElementById("users");
	userForm = document.getElementById("create-user-form");
	createButton = document.getElementById("create");
	// when button is clicked
	createButton.onclick = submit;
	

	// setting default values of the form
	document.getElementsByName('first-name')[0].defaultValue = BRUCE.fname;
	document.getElementsByName('last-name')[0].defaultValue = BRUCE.lname;
	document.getElementsByName('age')[0].defaultValue = BRUCE.age;
	document.getElementsByName('city')[0].defaultValue = BRUCE.city;

	// setting an attribute selected for the value of dropdawn "basketball" 
	document.getElementsByName('basketball')[0].selected = true;
	// "own-interest" input
	document.getElementsByName('own-interest')[0].defaultValue = BRUCE.interest.join(", ");

	addRow(BRUCE);
};

function User(){
	// string values initialization
	this.fname = document.getElementsByName('first-name')[0].value;
	this.lname = document.getElementsByName('last-name')[0].value;
	this.age = document.getElementsByName('age')[0].value;
	this.city = document.getElementsByName('city')[0].value;
	this.interest = document.getElementsByName('own-interest')[0].value.split(", ");
	this.getFullName =  function(){
		return this.fname + " " + this.lname;
	};
}

function addRow(user){
	if(userTable){
		var row = userTable.insertRow(1);
		row.classList.add("table-content");
	}
	// initialization of the cells
	var cellName = row.insertCell(0);
	var cellAge = row.insertCell(1);
	var cellCity = row.insertCell(2);
	var cellInterest = row.insertCell(3);
	var cellDelBtn = row.insertCell(4);

	// values of the cells
	cellName.innerHTML = user.getFullName();
	cellAge.innerHTML = user.age;
	cellCity.innerHTML = user.city;
	cellInterest.innerHTML = user.interest.join(", ");

	// "delete" button delets 
	var delBtn = document.createElement("BUTTON");
	delBtn.innerHTML = "x";
	delBtn.className = "delete-button";
	delBtn.onclick = function(){
		userTable.deleteRow(row.rowIndex);
	};
	// insert into the cell
	cellDelBut.appendChild(delBtn);	
}

// makes a user object and adds it table
function submit(){
	var user = new User();
	addRow(user);
}