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


var imageSpan = document.createElement("span");
imageSpan.innerHTML = "Image 1 ";

div.appendChild(imageSpan);

var imageSpan2 = document.createElement("span");
imageSpan2.innerHTML = "Image 2 ";

div.appendChild(imageSpan2);

var imageSpan3 = document.createElement("span");
imageSpan3.innerHTML = "Image 3 ";

div.appendChild(imageSpan3);

var imageSpan4 = document.createElement("span");
imageSpan4.innerHTML = "Image 4 ";

div.appendChild(imageSpan4);

var imageSpan5 = document.createElement("span");
imageSpan5.innerHTML = "Image 5";

div.appendChild(imageSpan5);

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


var stringy = "   Hello, this is my string   ";

var stringy2 = stringy.substring(1, 5);
var stringy3 = stringy.trim();
var stringy4 = stringy2.trim();


console.log(stringy);
console.log(stringy2);
console.log(stringy3);
console.log(stringy4);
