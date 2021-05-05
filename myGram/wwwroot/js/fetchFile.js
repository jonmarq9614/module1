var form = document.getElementById("MyMainForm");
form.onsubmit = function (event) {
    event.preventDefault();
}

var loginButton = document.getElementById("LogInButton");
loginButton.onclick = function () {
    var myUserInput = document.getElementById("Username");
    var myPasswordInput = document.getElementById("Password");
    var user = {
        UserName: myUserInput.value,
        Password: myPasswordInput.value
    };


    fetch("/Home/LogUser", {
        method: "POST",
        cache: "no-cache",
        headers: {
            'Content-Type': "application/json; charset=UTF-8"
        },
        body: JSON.stringify(user)
    }).then(response => response.text())
        .then(data => alert(data));
}