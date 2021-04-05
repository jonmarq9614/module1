var mySpan = document.getElementById("myGram");
var newSpan = document.createElement("span");
newSpan.innerHTML = "My Gram";
mySpan.appendChild(newSpan);

var myFirstButton = document.getElementsByClassName("firstButton");
var newButton = document.createElement("button");
newButton.innerHTML = "Log In";
myFirstButton[0].appendChild(newButton);

var mySecondButton = document.getElementsByClassName("secondButton");
var newButton2 = document.createElement("button");
newButton2.innerHTML = "Sign Up";
mySecondButton[0].appendChild(newButton2);

var imageDiv = document.getElementsByClassName("image");
var imageDiv2 = document.createElement("div");
imageDiv2.innerHTML = "Image 1 Image 2 Image 3 Image 4 Image 5";
imageDiv[0].appendChild(imageDiv2);

var about = document.getElementsByClassName("myDiv");
var about2 = document.createElement("div");
about2.innerHTML = "About Blog Jobs Help";
about[0].appendChild(about2);

var english = document.getElementsByClassName("myDiv2");
var english2 = document.createElement("div");
english2.innerHTML = "English 2021 MyGram";
english[0].appendChild(english2);