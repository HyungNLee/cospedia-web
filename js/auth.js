// Initialize Firebase
var config = {
  apiKey: "AIzaSyCsXeeqQGEXp7WQAB7WU4blJmS0rCIAZaU",
  authDomain: "makeup-genius-702f9.firebaseapp.com",
  databaseURL: "https://makeup-genius-702f9.firebaseio.com",
  projectId: "makeup-genius-702f9",
  storageBucket: "makeup-genius-702f9.appspot.com",
  messagingSenderId: "416277350179"
};
firebase.initializeApp(config);

function User(email,password) {
  this.email = email;
  this.password = password;
}

User.prototype.registerUser = function() {
  firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function (err) {
    alert("Unable to Sign Up!")
  })
}

User

$(document).ready (function() {
  $("#signUp").submit(function(event) {
    event.preventDefault();
    var email = $("#email").val();
    var password = $("#password").val();
    var passwordConf = $("#passwordConf").val()

    if (password !== passwordConf) {
      alert("Passwords don't match. Please verify!");
    }
    else { var newUser = new User(email, password)};
    console.log(newUser);
    newUser.registerUser();
  })
})