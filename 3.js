// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyACBrjrjOKHriL5oABHZm5krr6lDwi1bQc",
    authDomain: "signuu-1426f.firebaseapp.com",
    databaseURL: "https://signuu-1426f-default-rtdb.firebaseio.com",
    projectId: "signuu-1426f",
    storageBucket: "signuu-1426f.appspot.com",
    messagingSenderId: "878261400446",
    appId: "1:878261400446:web:ecbd5834c962184da5b92f",
    measurementId: "G-LQZWXZHTE6"
  };
  firebase.initializeApp(firebaseConfig);
  
  // Get elements from the HTML page
  var emailInput = document.getElementById('email');
  var passwordInput = document.getElementById('password');
  var loginBtn = document.getElementById('loginBtn');
  var logoutBtn = document.getElementById('logoutBtn');
  
  // Add login event listener to the login button
  loginBtn.addEventListener('click', function() {
    var email = emailInput.value;
    var password = passwordInput.value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(userCredential) {
            alert('Logged in successfully!');
            var userId = userCredential.user.uid;
            var userRef = database.ref("form2/" + userId);
            userRef.once("value").then(function(snapshot) {
              var userData = snapshot.val();
              // Redirect to the user's profile page and pass the user's data as a query parameter
              window.location.href = "check.html?data=" + encodeURIComponent(JSON.stringify(userData)); });
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert('Error: ' + errorMessage);
        });
  });
  
  // Add logout event listener to the logout button
  //logoutBtn.addEventListener('click', function() {
    //firebase.auth().signOut()
       // .then(function() {
        //    alert('Logged out successfully!');
        //})
        //.catch(function(error) {
       //     var errorCode = error.code;
       //     var errorMessage = error.message;
        //    alert('Error: ' + errorMessage);
      //  });
  //});
  //<button type="button" class="btn btn-danger" id="logoutBtn">Logout</button>