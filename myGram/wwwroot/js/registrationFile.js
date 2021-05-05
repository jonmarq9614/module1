var table = document.createElement("table");
var tbody = document.createElement("tbody");
var tr = document.createElement("tr");
var td = document.createElement("td");
var label = document.createElement("label");
label.innerHTML = "First name:";
td.appendChild(label);
tr.appendChild(td);

td = document.createElement("td");
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "FirstName");
input.setAttribute("placeholder", "Add your first name");
td.appendChild(input);
tr.appendChild(td);

td = document.createElement("td");
label = document.createElement("label");
label.innerHTML = "Last name:";
td.appendChild(label);
tr.appendChild(td);

td = document.createElement("td");
input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "LastName");
input.setAttribute("placeholder", "Add your last name");
td.appendChild(input);
tr.appendChild(td);
tbody.appendChild(tr);

tr = document.createElement("tr");
td = document.createElement("td");
label = document.createElement("label");
label.innerHTML = "Gender: ";
td.appendChild(label);
tr.appendChild(td);

td = document.createElement("td");
td.setAttribute("colspan", "3");
input = document.createElement("input");
input.setAttribute("type", "radio");
input.setAttribute("name", "Gender");
input.setAttribute("id", "Male");
td.appendChild(input);

label = document.createElement("label");
label.innerHTML = "Male:";
label.setAttribute("for", "Male");
td.appendChild(label);

input = document.createElement("input");
input.setAttribute("type", "radio");
input.setAttribute("name", "Gender");
input.setAttribute("id", "Female");
td.appendChild(input);

label = document.createElement("label");
label.innerHTML = "Female:";
label.setAttribute("for", "Female");
td.appendChild(label);

input = document.createElement("input");
input.setAttribute("type", "radio");
input.setAttribute("name", "Gender");
input.setAttribute("id", "NoResponse");
td.appendChild(input);

label = document.createElement("label");
label.innerHTML = "Prefer not to respond:";
label.setAttribute("for", "NoResponse");
td.appendChild(label);
tr.appendChild(td);
tbody.appendChild(tr);

tr = document.createElement("tr");
td = document.createElement("td");
label = document.createElement("label");
label.innerHTML = "Email:";
td.appendChild(label);
tr.appendChild(td);

td = document.createElement("td");
td.setAttribute("colspan", "3");
input = document.createElement("input");
input.setAttribute("id", "Email");
input.setAttribute("type", "email");
input.setAttribute("placeholder", "Add your email address");
td.appendChild(input);
tr.appendChild(td);
tbody.appendChild(tr);

tr = document.createElement("tr");
td = document.createElement("td");
label = document.createElement("label");
label.innerHTML = "Country of Residence:";
td.appendChild(label);
tr.appendChild(td);

td = document.createElement("td");
td.setAttribute("colspan", "3");
var select = document.createElement("select");
select.setAttribute("id", "Country");
var option = document.createElement("option");
option.innerHTML = "USA";
select.appendChild(option);
option.innerHTML = "Mexico";
select.appendChild(option);
option = document.createElement("option");
option.innerHTML = "Canada";
select.appendChild(option);
td.appendChild(select);
tr.appendChild(td);
tbody.appendChild(tr);

tr = document.createElement("tr");
td = document.createElement("td");
td.setAttribute("colspan", "4");
var button = document.createElement("button");
button.innerHTML = "Update User Information";
button.setAttribute("id", "UpdateButton");
td.appendChild(button);
tr.appendChild(td);
tbody.appendChild(tr);
table.appendChild(tbody);

var div = document.getElementById("registration");
div.appendChild(table);

var firstNameInput = document.getElementById("FirstName");
var lastNameInput = document.getElementById("LastName");
var genderInput = document.getElementsByName("Gender");
var emailInput = document.getElementById("Email");
var countrySelect = document.getElementById("Country");
var updateButton = document.getElementById("UpdateButton");



updateButton.onclick = function () {
    var registering = {
        FirstName: firstNameInput.value,
        LastName: lastNameInput.value,
        Gender: genderInput.values,
        Email: emailInput.value,
        Country: countrySelect.value
    };

    fetch("/Home/Registering", {
        method: "POST",
        cache: "no-cache",
        headers: {
            'Content-Type': "application/json; charset=UTF-8"
        },
        body: JSON.stringify(registering)
    }).then(response => response.text())
        .then(data => alert(data));
};