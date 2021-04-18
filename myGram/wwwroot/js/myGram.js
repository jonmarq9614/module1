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

var imageObject1 = new Images("Image 1", "Image 2", "Image 3", "Image 4", "Image 5");
var imageObject2 = new Images("Image 6", "Image 7", "Image 8", "Image 9", "Image 10");
var imageObject3 = new Images("Image 11", "Image 12", "Image 13", "Image 14", "Image 15");
var imageObject4 = new Images("Image 16", "Image 17", "Image 18", "Image 19", "Image 20");
var imageObject5 = new Images("Image 21", "Image 22", "Image 23", "Image 24", "Image 25");


var imageArray = [];
imageArray.push(imageObject1);
imageArray.push(imageObject2);
imageArray.push(imageObject3);
imageArray.push(imageObject4);
imageArray.push(imageObject5);


var tr = null;
var td = null;

var imageObject;

for (var image = 0; image <= imageArray.length; image++) {
    imageObject = imageArray[image];
    tr = document.createElement("tr");
    td = document.createElement("td");
    span = document.createElement("span");
    span.innerHTML = imageObject.image1;
    td.appendChild(span);
    tr.appendChild(td);

    td = document.createElement("td");
    span = document.createElement("span");
    span.innerHTML = imageObject.image2;
    td.appendChild(span);
    tr.appendChild(td);

    td = document.createElement("td");
    span = document.createElement("span");
    span.innerHTML = imageObject.image3;
    td.appendChild(span);
    tr.appendChild(td);

    td = document.createElement("td");
    span = document.createElement("span");
    span.innerHTML = imageObject.image4;
    td.appendChild(span);
    tr.appendChild(td);

    td = document.createElement("td");
    span = document.createElement("span");
    span.innerHTML = imageObject.image5;
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







