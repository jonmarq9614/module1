"use strict";

var span = document.createElement("span");
span.innerHTML = "My Gram ";

var div = document.getElementById("myDiv");

div.appendChild(span);

var loginButton = document.createElement("button");
loginButton.innerHTML = "Log In";

div.appendChild(loginButton);

var signupButton = document.createElement("button");
signupButton.innerHTML = "Sign Up";

div.appendChild(signupButton)

var lineBreak = document.createElement("br");

div.appendChild(lineBreak);

var imageObject = new Image("Image 1", "Image 2", "Image 3",
    "Image 4", "Image 5");

var tr = null;
var td = null;

for (var image = 1; image <= 5; image++) {
    tr = document.createElement("tr");
    td = document.createElement("td");
    span = document.createElement("span");
    span.innerHTML = imageObject.image1 + image;
    td.appendChild(span);
    tr.appendChild(td);

    td = document.createElement("td");
    span = document.createElement("span");
    span.innerHTML = imageObject.image2 + image;
    td.appendChild(span);
    tr.appendChild(td);

    td = document.createElement("td");
    span = document.createElement("span");
    span.innerHTML = imageObject.image3 + image;
    td.appendChild(span);
    tr.appendChild(td);

    td = document.createElement("td");
    span = document.createElement("span");
    span.innerHTML = imageObject.image4 + image;
    td.appendChild(span);
    tr.appendChild(td);

    td = document.createElement("td");
    span = document.createElement("span");
    span.innerHTML = imageObject.image5 + image;
    td.appendChild(span);
    tr.appendChild(td);



    myDiv.appendChild(tr);


}





var lineBreak2 = document.createElement("br");

div.appendChild(lineBreak2);


var aboutSpan = document.createElement("span");
aboutSpan.innerHTML = "About ";

div.appendChild(aboutSpan);

var blogSpan = document.createElement("span");
blogSpan.innerHTML = "Blog ";

div.appendChild(blogSpan);

var jobsSpan = document.createElement("span");
jobsSpan.innerHTML = "Jobs ";

div.appendChild(jobsSpan);

var helpSpan = document.createElement("span");
helpSpan.innerHTML = "Help";

div.appendChild(helpSpan);

var lineBreak3 = document.createElement("br");

div.appendChild(lineBreak3);


var englishSpan = document.createElement("span");
englishSpan.innerHTML = "English ";

div.appendChild(englishSpan);

var yearSpan = document.createElement("span");
yearSpan.innerHTML = "2021 ";

div.appendChild(yearSpan);

var gramSpan = document.createElement("span");
gramSpan.innerHTML = "MyGram ";

div.appendChild(gramSpan);







