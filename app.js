// =====GLOBAL VARIABLES=====
// data
var defUser = new User("Bruce", "Wayne", 35, "Gotham", ["Reading", "Helping people"])
var users = [
    defUser
];
var userForm = {
    fnameInput: document.getElementsByName('first-name')[0],
    lnameInput: document.getElementsByName('last-name')[0],
    ageInput: document.getElementsByName('age')[0],
    cityInput: document.getElementsByName('city')[0],
    interestsSelect: document.getElementsByName('interestsSelect')[0],
    ownInterestInput: document.getElementsByName('own-interest')[0],
    createButton: document.getElementById('create')
}

// user constructor
function User(fname, lname, age, city, interests){
    this.fname = fname || null;
    this.lname = lname || null;
    this.age = age || null;
    this.city = city || null;
    this.interests = interests || [];
}

User.prototype.getFullName = function(){
    return this.fname + " " + this.lname;
}

function initApp(){
    // text inputs
    userForm.fnameInput.defaultValue = defUser.fname;
    userForm.lnameInput.defaultValue = defUser.lname;
    userForm.ageInput.defaultValue = defUser.age;
    userForm.cityInput.defaultValue = defUser.city;
    // sets an option in select
    userForm.interestsSelect.options[1].selected = true;
    // sets own interest input
    userForm.ownInterestInput.defaultValue = defUser.interests.join(", ");
    userForm.createButton.onclick = function (event) {
        var user = getUserObjectFromForm();
        if(user){
            users.push(users);
            addRow(user);
        }
    }

    // adds default row to table
    addRow(defUser);
}
// validates form and returns user object
function getUserObjectFromForm () {

    // local variables for object of user
    var fnameVal = userForm.fnameInput.value;
    var lnameVal = userForm.lnameInput.value;
    // because age is a number
    var ageVal = parseInt(userForm.ageInput.value);
    var cityVal = userForm.cityInput.value;

    if( !fnameVal || !lnameVal || !ageVal || !cityVal ){
        (alert("Please, fill all the fields of this application form!"));
        // break execution of function if inputs are empty
        return;
    }
        

    if(userForm.ownInterestInput.value === '') {
        // gets value of selected option of dropdown and converts to array
        var interestsVal = (userForm.interestsSelect
                    .options[userForm.interestsSelect.selectedIndex].text).split();
                    
    } else {
        interestsVal = userForm.ownInterestInput.value.split(", ");
    }

    var user = new User(
        fnameVal, lnameVal, ageVal, cityVal, interestsVal
    );

    return user;

}

// adds row to table
function addRow(user){
    var userTable = document.getElementById("users");
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
	cellInterest.innerHTML = user.interests.join(", ");

	// "delete" button delets 
	var delBtn = document.createElement("BUTTON");
	delBtn.innerHTML = "x";
	delBtn.className = "delete-button";
	delBtn.onclick = function(){
		userTable.deleteRow(row.rowIndex);
	};
	// insert into the cell
	cellDelBtn.appendChild(delBtn);	
}
// IIFE
(initApp());