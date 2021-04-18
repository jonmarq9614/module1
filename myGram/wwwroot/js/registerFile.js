"use strict";

var myDiv = document.getElementById("registration");

var title = document.createElement("h1");
title.innerHTML = "User personal information";
myDiv.appendChild(title);


var firstName = "First Name:";
var lastName = "Last Name:";
var gender = "Gender:";
var email = "Email address:";
var country = "Country of Residence:";

var name1 = document.createElement("span");
name1.innerHTML = firstName;
myDiv.appendChild(name1);

var textBox = document.createElement("input");
textBox.innerHTML = "Add your First Name";
myDiv.appendChild(textBox);

var name2 = document.createElement("span");
name2.innerHTML = lastName;
myDiv.appendChild(name2);

var textBox2 = document.createElement("input");
textBox2.innerHTML = "Add your Last Name";
myDiv.appendChild(textBox2);

var myLineBreak = document.createElement("br");

myDiv.appendChild(myLineBreak);

var gen = document.createElement("span");
gen.innerHTML = gender;
myDiv.appendChild(gen);

//didnt know how to create a radio type input for the genders
var genderSelection = document.createElement("input");
genderSelection.innerHTML = "";
myDiv.appendChild(genderSelection);

var myLineBreak2 = document.createElement("br");

myDiv.appendChild(myLineBreak2);

var eMail = document.createElement("span");
eMail.innerHTML = email;
myDiv.appendChild(eMail);

var textBox3 = document.createElement("input");
textBox3.innerHTML = "Add your Email Address";
myDiv.appendChild(textBox3);

var myLineBreak3 = document.createElement("br");

myDiv.appendChild(myLineBreak3);

var myCountry = document.createElement("span");
myCountry.innerHTML = country;
myDiv.appendChild(myCountry);

var countryBox = document.createElement("select");
countryBox.innerHTML = "Select Country";
myDiv.appendChild(countryBox);

var myLineBreak4 = document.createElement("br");

myDiv.appendChild(myLineBreak4);

var update = document.createElement("button");
update.innerHTML = "Update User Information";
myDiv.appendChild(update);