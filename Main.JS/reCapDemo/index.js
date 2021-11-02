var users = [
    { Email: "bilal@gmail.com", Password: "123456" },
    { Email: "elif@gmail.com", Password: "123456" }
]

var twits = [
    { Email: "bilal@gmail.com", Twit: "The weather is so cold." },
    { Email: "bilal@gmail.com", Twit: "The weather will be colder tomorrow." },
    { Email: "elif@gmail.com", Twit: "The weather was cold yesterday too." }
]

var email = prompt("Email: ")
var password = prompt("Password: ")

function login() {
    if ((email == users[0].Email && password == users[0].Password)) {
        console.log("Your Twits: " + twits[0].Twit + "\n" + twits[1].Twit)
    } else if (email == users[1].Email && password == users[1].Password) {
        console.log("Your Twits: " + twits[2].Twit)
    } else {
        console.log("The username or password is incorrect.")
    }
}

login()