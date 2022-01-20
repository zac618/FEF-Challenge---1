
document.querySelector('#createBtn').addEventListener('click', function() {
	let newCookieName = prompt('Input name for your cookie');
	let newCookieValue = prompt('Input value for your cookies');
	//let addedCookie = document.cookie;

    let 

	addedCookie = ` ${newCookieName} = ${newCookieValue}`;
	console.log(newCookieName);
	console.log(newCookieValue);
	console.log(addedCookie);

	document.cookie = `${addedCookie}`;

    function addRow(cookieTable) {
        let tableRef = document.getElementById(cookieTable);

        let newRow = tableRef.insertRow(-1);

        let newCell = newRow.insertCell(0);

        let newText = document.createTextNode(`${newCookieName}`);
        
        let newValueCell = document.createTextNode(`${newCookieValue}`)

        newCell.appendChild(newText);
        newValueCell.appendChild(newText);
    }

    addRow('cookieTable');

    console.log(addRow);
    

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
