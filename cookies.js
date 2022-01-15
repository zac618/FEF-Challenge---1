// Create a site that allows the user to to create, edit, remove and
// display cookies. Host your solution in a public Github repo. Present
// your work to the server on 01/23/22 at 8PM UTC

// Resources
// https://www.w3schools.com/js/js_cookies.asp
// https://morioh.com/p/86545e1a5365

// BREAKDOWN

// Allow a user to create cookies
// Allow user to edit cookies
// Allow user to remove cookies
// Allow user to display cookies

// Create Cookie from user input
// Get user input and store in a cookie
// document.cookie

// HTML HAS INPUT BUT I NEED TO FIGURE OUT HOW TO STORE DATA A USER INPUTS

//let cName = window.prompt('Enter your name');

// function newCookie() {
// 	let li = document.createElement('li');
// }

// document.cookie = 'userId=zac12345';

// const cookies = document.cookie;

// console.log(cookies);

const cookies = document.getElementsByClassName('cookies')[0];
const dlt = document.getElementById('deleteBtn');
const allItems = document.getElementById('allItems');
const userInput = document.getElementById('userInput');

dlt.addEventListener('click', function() {
	allItems.innerHTML = '';
});

userInput.addEventListener('keydown', function(event) {
	if (event.key == 'Enter') addItem();
});

function addItem() {
	let h2 = document.createElement('h2');
	h2.innerHTML = '- ' + userInput.value;

	allItems.insertAdjacentElement('beforeend', h2);

	userInput.value = '';
}
