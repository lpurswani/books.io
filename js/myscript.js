function loadBooks() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var books = this.responseText;
      var booksObj = JSON.parse(books);
      for(x = 0; x < booksObj.books.length; x++)
      {
        showBook(booksObj,x);
      }
    }
  };
  xhttp.open("GET", "books.json", true);
  xhttp.send();
}

function showBook(booksObj, i) {
  var book = booksObj.books[i];
  var titleID = "book"+i+"Title";
  var authorID = "book"+i+"Author";
  var summaryID = "book"+i+"Summary";
  var coverID = "book"+i+"Cover";
  var reviewsID = "book"+i+"Reviews";
  document.getElementById(titleID).innerHTML = book.title;
  document.getElementById(authorID).innerHTML = book.author;
  document.getElementById(summaryID).innerHTML = book.summary;
  document.getElementById(coverID).src = book.coverImage;
  document.getElementById(reviewsID).innerHTML = book.reviews;
}
