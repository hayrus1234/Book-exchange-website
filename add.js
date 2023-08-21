const firebaseConfig = {
  apiKey: "AIzaSyCi66srejRyB8IC_B75FgP1BLiB3vMgRWU",
  authDomain: "booksadda-ad2d6.firebaseapp.com",
  projectId: "booksadda-ad2d6",
  storageBucket: "booksadda-ad2d6.appspot.com",
  messagingSenderId: "752930484373",
  appId: "1:752930484373:web:ae63987b1a0c5dfec96b9c",
  measurementId: "G-2DSMWTR0BG"
};

firebase.initializeApp(firebaseConfig);

// Reference to the database
var database = firebase.database();

// Reference to the books collection
var booksRef = database.ref("books");

// Reference to the form
var form = document.getElementById("book-form");

// Listen for form submit
form.addEventListener("submit", submitForm);

// Function to handle form submit
function submitForm(e) {
  e.preventDefault();

  // Get values from the form
  var title = getInputVal("title");
  var author = getInputVal("author");
  var isbn = getInputVal("isbn");
  var language = getInputVal("language");
  var price = getInputVal("rupees");
  var condition = document.getElementById("bookcondition").value;
  var description = getInputVal("description");
  var category = document.getElementById("category").value;
  var originalCopy = document.getElementById("original_copy").checked;

  // Save book to the database
  saveBook(title, author, isbn, language, price, condition, description, category, originalCopy);

  // Reset the form
  form.reset();

  // Show success message
  alert("Book submitted successfully!");
}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Function to save book to the database
function saveBook(title, author, isbn, language, price, condition, description, category, originalCopy) {
  // Generate a unique key for the book
  var key = booksRef.push().key;

  // Create a book object with the input values
  var book = {
    id: key,
    title: title,
    author: author,
    isbn: isbn,
    language: language,
    price: price,
    condition: condition,
    description: description,
    category: category,
    originalCopy: originalCopy
  };

  // Save the book to the database
  booksRef.child(key).set(book);
}
