"use strict";

var mySelect = document.getElementById("ThemeChanged");
mySelect.onchange = function () {
    alert("You have changed the theme");
}

var div = document.getElementById("myDiv");

var lineBreak = document.createElement("br");

div.appendChild(lineBreak);

var table = document.createElement("table");
var tBody = document.createElement("tbody");
var tr = document.createElement("tr");
var td = null;
var imageSpan = null;
var counter = 0;

var image1 = new Image();
image1.imageName = "Image ";
image1.imageId = 1;
image1.imageClass = "My Image";


for (var image = 1; image <= 25; image++) {
    if (counter == 5) {
        tBody.appendChild(tr);
        tr = document.createElement("tr");
        counter = 0;
    }

    td = document.createElement("td");
    var imageSpan = document.createElement("span");
    imageSpan.innerHTML = image1.imageName + image;
    imageSpan.className = "MyImageClass";
    td.appendChild(imageSpan);
    tr.appendChild(td);
    counter++;

}

tBody.appendChild(tr);
table.appendChild(tBody);
div.appendChild(table);



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

var myImageArray = document.getElementsByClassName("MyImageClass");
for (var x = 0; x < myImageArray.length; x++) {
    myImageArray[element].onclick = function () {
        alert("You clicked on an image");
    }
}

