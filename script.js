// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 


const tbl=document.querySelector("table");
tbl.addEventListener("click",fillCell);


// Add a row
function addR() {
    // alert("Clicked Add Row"); // Replace this line with your code.
	let newRow = document.createElement("tr");
	
	if (tbl.childElementCount==0) { // no rows exist
		let cell = document.createElement("td");
		newRow.appendChild(cell);
	}
	else {
		for (let i=0; i<tbl.children[0].childElementCount; i++) {
			let cell = document.createElement("td");
			newRow.appendChild(cell);
		}			
	}

	tbl.appendChild(newRow);
}

// Add a column
function addC() {
	if (tbl.childElementCount==0) {
		let newRow=document.createElement("tr");
		let cell = document.createElement("td");
		newRow.appendChild(cell);
		tbl.appendChild(newRow);
	}
	else {
		for (let i=0; i<tbl.childElementCount; i++) { // for each row, append a cell, which results in a whole column
			let cell=document.createElement("td");
			tbl.children[i].appendChild(cell);
		}
		
	}
	
}
// Remove a row
function removeR() {
	if (tbl.childElementCount==0) return;
	tbl.removeChild(tbl.lastElementChild);
}

// Remove a column
function removeC() {
	if (tbl.childElementCount==0) return;
	for (let i=0;i<tbl.childElementCount;i++) {
		let row=tbl.children[i];
		row.removeChild(row.lastElementChild);
	}
}
// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}


// Fill individual cell with selected color
function fillCell(e) {
	let target=e.target;
	console.log(target);
	if (colorSelected!="SELECT") {
		target.style.backgroundColor=colorSelected;
	}
}
