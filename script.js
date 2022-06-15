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
    alert("Clicked Add Col"); // Replace this line with your code.
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
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
