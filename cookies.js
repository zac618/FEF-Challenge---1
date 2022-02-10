const config = {
	dom: {
		cookieListId: 'cookieList',
	},
	cls: {
		cookieCell: 'cookie-table__cell',
	},
	cookieKey: 'cookie',
}


document.querySelector('#createBtn').addEventListener('click', function() {
	let cookieText = prompt('Input name for your cookie');

	if (!cookieText) {
		return;
	}
	
	createCookie(cookieText);
});

/**
 * Create Cookie
 * @desc Add string value to cookie
 * @param {String} value
 */
function createCookie (value) {
	// get stored cookies, if none exist initialize to an empty array
	const cookies = JSON.parse(localStorage.getItem(config.cookieKey)) || [];

	if (!value) return;

	// add new cookie to cookies array
	cookies.push(value);

	// store cookies
	localStorage.setItem(config.cookieKey, JSON.stringify(cookies));
	
	// refresh cookies list
	refreshTable();
}

/**
 * Edit Cookie
 * @param {Event} event
 */
function editCookie(event) {
	// get cookie id from buttons parent element, aka the cell id
	const cookieId = event.target.parentElement.id;
	// get all cookies
	const cookies = JSON.parse(localStorage.getItem(config.cookieKey));

	// prompt to edit cookie, use existing cookie text as initial input value
	let cookieText = prompt(`Edit cookie ${Number(cookieId) + 1}: `, cookies[cookieId]);

	if (!cookieText) {
		return;
	}

	// Update cookie value in stored cookie array
	cookies.splice(cookieId, 1, cookieText);

	// Store updated cookies
	localStorage.setItem(config.cookieKey, JSON.stringify(cookies));

	// Refresh cookie list
	refreshTable();
}

/**
 * Delete cookie
 * @param {Event} event 
 */
function deleteCookie(event) {
	// Get id from the buttons parent element, aka the cell id
	const cookieId = event.target.parentElement.id;
	let deleteConfirmation = confirm(`Are you sure you want to delete this cookie?`);

	if (!deleteConfirmation) {
		return;
	}

	// delete cookie
	const cookies = JSON.parse(localStorage.getItem(config.cookieKey));
	cookies.splice(cookieId, 1);

	// set cookies to new cookie list minus the deleted cookie
	localStorage.setItem(config.cookieKey, JSON.stringify(cookies));

	// refresh cookie list
	refreshTable();
}

/**
 * Refresh Cookie Table
 */
function refreshTable() {
	// get stored cookies
	const storedCookies = JSON.parse(localStorage.getItem(config.cookieKey))
	
	// clear cookie list element
	let cookieListRef = document.getElementById(config.dom.cookieListId);
	cookieListRef.innerHTML = '';
	
	// If no cookies, add no cookie text
	if (storedCookies.length < 1) {
		const emptyCookies = document.createElement('p');
		emptyCookies.classList.add(`${config.cls.cookieCell}--empty`)
		emptyCookies.innerText = 'No Cookies Available!'
		cookieListRef.appendChild(emptyCookies);
		return;
	}

	// build cell for each cookie
	storedCookies.forEach((cookie, index) => {
		const cookieLi = buildCookieCell(cookie, index);

		cookieListRef.appendChild(cookieLi);
	});
}

/**
 * Build Cookie Cell
 * @param {String} value 
 * @param {Number} index 
 */
function buildCookieCell(value, index) {
	// Create root cell element
	const cell = document.createElement('li');
	cell.classList.add(config.cls.cookieCell)
	cell.setAttribute('id', index);

	// Create cell text element
	const cellText = document.createElement('p');
	cellText.innerText = value

	// Create cell edit button
	const cellEditBtn = document.createElement('button');
	cellEditBtn.innerText = 'Edit';
	cellEditBtn.addEventListener('click', editCookie);

	// create cell delete button
	const cellDeleteBtn = document.createElement('button');
	cellDeleteBtn.innerText = 'Delete';
	cellDeleteBtn.addEventListener('click', deleteCookie);

	// add elements to root cell element
	cell.appendChild(cellText)
	cell.appendChild(cellEditBtn)
	cell.appendChild(cellDeleteBtn);
	
	return cell;
}

// when page loads, build initial cookie list
(()=> {
	refreshTable();
})()