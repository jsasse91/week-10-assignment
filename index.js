// defining a variable of id that will hold the index of each item added to the table
let id = 0;

// defining the logic that will be a part of the 'Add Destination' button,
// first we get the element by the id of Add that we created in the HTML
// then add an event listener to it, detecting the click of the button
document.getElementById("add").addEventListener("click", () => {
  // defining the variable for the table, using the id from the HTML assigned to our table
  let vacaTable = document.getElementById("list");
  // defining the variable for each row, using the insertRow function giving it the row of 1
  // which is the second row of the table, since we already defined the headers in the HTML
  let vacaRow = vacaTable.insertRow(1);
  // setting the id of each newly added row using a template literal
  vacaRow.setAttribute("id", `vaca-${id}`);
  // then setting the first cell (start date) to the value the user selected from the date picker
  vacaRow.insertCell(0).innerHTML =
    document.getElementById("planned-start-date").value;
  // then setting the second cell (end date) to the value the user selected from the date picker
  vacaRow.insertCell(1).innerHTML =
    document.getElementById("planned-end-date").value;
  // the setting the third cell (destination) to the value the user typed in the text input
  vacaRow.insertCell(2).innerHTML =
    document.getElementById("vac-destination").value;
  // defining the variable for the fourth cell which will hold our cancel(remove row) button
  let actions = vacaRow.insertCell(3);
  // inserting the cancel button into the cell
  actions.appendChild(deleteVacationButton(id++));
  // resetting the text input field back to the default value
  document.getElementById("vac-destination").value = "";
  // resetting the date selectors back to mm/dd/yyyy
  document.getElementById("planned-start-date").value = "";
  document.getElementById("planned-end-date").value = "";
});

// creating the function that will both build the cancel(remove row) button as well as the logic of removing rows
function deleteVacationButton(id) {
  // defining the variable for the button that will be created using the create element function and passing it button
  let btn = document.createElement("button");
  // setting the class of the button to bootstraps btn and btn-dark style which gives it a nice contrast
  btn.className = "btn btn-dark";
  // setting the id of the button to match the id of the row
  btn.id = id;
  // setting the text of the button to Cancel
  btn.innerHTML = "Cancel";
  // defining the logic that occurs when the Cancel button is clicked using an event listener
  btn.addEventListener("click", () => {
    // setting the variable that will hold the item to be deleted
    let elementToDelete = document.getElementById(`vaca-${id}`);
    // actually removing the row by removing the child from it's parent( which is a tragic way to describe this)
    elementToDelete.parentNode.removeChild(elementToDelete);
    // wouldn't be a page by me if I didn't add something ridiculous as well. Homage to the "No soup for you" guy
    alert("No Vacation For You!");
  });
  // returning the button so it actually exists.
  return btn;
}
