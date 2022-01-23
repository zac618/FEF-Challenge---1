document.querySelector('#createBtn').addEventListener('click', function() {
	let newCookieName = prompt('Input name for your cookie');
	// let newCookieValue = prompt('Input value for your cookie');
	//let addedCookie = document.cookie;

	// let addedCookie = ` ${newCookieName} = ${newCookieValue}`;
	console.log(newCookieName);
	// console.log(newCookieValue);
	// console.log(addedCookie);

	document.cookie = `${newCookieName}`;

                        <td><input type="button" value="Delete Row" onclick=deleteRow()></td>



	function addRow(cookieTable) {
		let tableRef = document.getElementById(cookieTable);

		let newRow = tableRef.insertRow(-1);

		let newCell = newRow.insertCell(0);

		let newText = document.createTextNode(`${newCookieName}`);

		newCell.appendChild(newText);
	}

	function deleteRow() {
		// event.target will be the input element.
		var td = document.newRow.parentNode;
		var tr = td.parentNode; // the row to be removed
		tr.parentNode.removeChild(tr);
	}

	addRow('cookieTable');
});

// let table = document.createElement('table');
// let thead = document.createElement('thead');
// let tbody = document.createElement('tbody');

// table.appendChild(thead);
// table.appendChild(tbody);

// document.getElementById('body').appendChild(table);

document.querySelector('#editBtn').addEventListener('click', function() {
	let updateCookieName = prompt('Which cookie would you like to change?');
});
