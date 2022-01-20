// I'll need to create some cookies that auto-populate to start with
// Buttons: Create, Edit, Delete, Display
// Each button prompts a pop-up asking you a question
// From there, you create a cookie and name it (set the value), edit a cookie (change value), or delete the cookie
// Display will simply display all available cookies

// const create = document.getElementById("createBtn");
// const edit = document.getElementById("editBtn");
// const deleteBtn = document.getElementById("deleteBtn");
// const display = document.getElementById("displayBtn");

document.querySelector('#createBtn').addEventListener('click', function() {
	let newCookieName = prompt('Input name for your cookie');
	let newCookieValue = prompt('Input value for your cookies');
	//let addedCookie = document.cookie;

	addedCookie = ` ${newCookieName} = ${newCookieValue}`;
	console.log(newCookieName);
	console.log(newCookieValue);
	console.log(addedCookie);

	document.cookie = `${addedCookie}`;
});

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

document.getElementById('body').appendChild(table);

document.querySelector('#editBtn').addEventListener('click', function() {
	let updateCookieName = prompt('Which cookie would you like to change?');
});

//
//
//
//
//
//
// WORKING CODE FOR LIST ADDING APP

// const cookies = document.getElementsByClassName('cookies')[0];
// const dlt = document.getElementById('deleteBtn');
// const allItems = document.getElementById('allItems');
// const userInput = document.getElementById('userInput');

// dlt.addEventListener('click', function() {
// 	allItems.innerHTML = '';
// });

// userInput.addEventListener('keydown', function(event) {
// 	if (event.key == 'Enter') addItem();
// });

// function addItem() {
// 	let h2 = document.createElement('h2');
// 	h2.innerHTML = '- ' + userInput.value;

// 	allItems.insertAdjacentElement('beforeend', h2);

// 	userInput.value = '';
// }
