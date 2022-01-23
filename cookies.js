document.querySelector('#createBtn').addEventListener('click', function() {
	let newCookieName = prompt('Input name for your cookie');

	console.log(newCookieName);

	document.cookie = `${newCookieName}`;

	//                  <td><input type="button" value="Delete Row" onclick=deleteRow()></td>

	function addRow(cookieTable) {
		let tableRef = document.getElementById(cookieTable);

		let newRow = tableRef.insertRow(-1);

		let newCell = newRow.insertCell(0);

		let newText = document.createTextNode(`${newCookieName}`);

		newCell.appendChild(newText);

		newCell.setAttribute('id', `${newCookieName}`);
	}

	addRow('cookieTable');
});

document.querySelector('#editBtn').addEventListener('click', function() {
	let updateCookieName = prompt('Which cookie would you like to change?');
});

document.querySelector('#deleteBtn').addEventListener('click', function() {
	const deleteCookie = prompt('Input name of cookie you want to delete');
	document.cookie = `${deleteCookie}=; expires=Thu, 01 Jan 2015 00:00:00 UTC; path=/;`;
});
