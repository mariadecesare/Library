/*
  ProjectFour.js
  Scripts for editable Library
  Updated November 2021, Maria DeCesare
*/


//Create an array that contains objects that contain info on a book
books = [ //array
  { //object
    title: "Dune",
    author: "Frank Herbert",
    copyright: "1965",
    pages: "412",
    cover: "https://covers.openlibrary.org/b/isbn/0399128964-M.jpg"
  },
  {
    title: "The Book Thief",
    author: "Markus Zusak",
    copyright: "2005",
    pages: "584",
    cover: "https://covers.openlibrary.org/b/isbn/6073120311-M.jpg"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    copyright: "1937",
    pages: "310",
    cover: "https://covers.openlibrary.org/b/isbn/0007270615-M.jpg"
  },
  {
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    copyright: "2018",
    pages: "368",
    cover: "https://covers.openlibrary.org/b/isbn/0735219095-M.jpg"
  },
]

localStorage.clear();

/*
 * Create window's addEventListener() method that registers the handler
 * bookMain() for the DOMContentLoaded event
 */

//window.addEventListener( "DOMContentLoaded", bookMain)
//JQUERY:
$(bookMain);
//console.log("Library");

/*
 * Once the DOM has loaded, load in the book from local storage, or
 * from a small hard-coded list above if none in storage.
 */
function bookMain() {
    loadDefault();
    loadBookTitles();
    addBookTitleListeners();
    addButtonListeners();
    selectNothing();
}

/*
 * Loads the default books into local storage, if they're not there
 * already.
 */
function loadDefault() {
    /*
     * If Dune is not in local storage, we will conclude that none
     * of the default items are there, and we put them into local storage.
     *    var testDuneObject = localStorage.getItem("Dune");
     * if there is nothing in local storage,
     * we put the default items into it
     */
    if(localStorage.length == 0) {
        console.log("Loading from hard-coded array");
        for( var i = 0; i < books.length; i++) {
            var aBook = books[i];
            console.log("here is a book" + aBook.title);
            console.log("here it is stringified: " + JSON.stringify(aBook));
            localStorage.setItem( aBook.title, JSON.stringify(aBook));
        }
    }
    //loadBookTitles();
}

/*
 * Puts books in localStorage,
 * and places it in the nav innerHTML.
 */
function loadBookTitles() {
    var listing = "<ul>\n";
    for(var j = 0; j < localStorage.length; j ++) {
//        console.log("Here is key("+j+"): " + localStorage.key(j));
        var aBookString = localStorage.getItem( localStorage.key( j));
  //      console.log("here is its book" + aBookString);
        var aBookObject = JSON.parse(aBookString);
        listing += "<li>" + aBookObject.title + "</li>\n";
    }
    listing += "</ul>\n";

/*
    REPLACE JQUERY
    var navNodes = document.getElementsByTagName("nav");
    var navNode = navNodes[0];
    nxavNode.innerHTML = listing;
*/
    $("nav").html(listing);
}

/*
 * Adds a click event listener to each book title in nav, calling
 * the onSelect method.
 */
function addBookTitleListeners() {
/*
  REPLACE JQUERY
  var liNodes = document.getElementsByTagName("li");
  for( var i = 0; i < liNodes.length; i++) {
      var aTitleNode = liNodes[i];
      console.log("found the li node " + liNodes[i].innerHTML);
      aTitleNode.addEventListener("click", onSelect);
  }
*/
  $("li").click(onSelect);
}


/*
 * Adds a click listener to the buttons on the page
 */
function addButtonListeners() {

/*
  REPLACE JQUERY
  let editButton = document.getElementById("editbutton");
  editButton.addEventListener("click", onEdit);
*/
  $("#editbutton").click(onEdit);

/*
  REPLACE JQUERY
  let addButton = document.getElementById("addbutton");
  addButton.addEventListener("click", onAdd);
*/
  $("#addbutton").click(onAdd);

/*
  REPLACE JQUERY
  let deleteButton = document.getElementById("deletebutton");
  deleteButton.addEventListener("click", onDelete);
*/
  $("#deletebutton").click(onDelete);
}

/*
 * Allows the users to enter or exit edit mode for the chosen book item.
 */
function onEdit() {
  // console.log("onEdit called");
    let buttonText = this.innerHTML;
    if(buttonText == "Edit") {
        // Put the title, author, copyright, and pages fields into edit mode

        /*
        REPLACE JQUERY
        this.innerHTML = "Save";
        */
        $(this).html("Save");

        /*
        REPLACE JQUERY
        titleFieldNode = document.getElementById("bookTitle");
        titleFieldNode.removeAttribute("readonly");
        */
        $("#bookTitle").removeAttr("readonly").html("Save");

        /*
        REPLACE JQUERY
        authorFieldNode = document.getElementById("bookAuthor");
        authorFieldNode.removeAttribute("readonly");
        */
        $("#bookAuthor").removeAttr("readonly").html("Save");

        /*
        REPLACE JQUERY
        copyrightFieldNode = document.getElementById("bookCopyright");
        copyrightFieldNode.removeAttribute("readonly");
        */
        $("#bookCopyright").removeAttr("readonly").html("Save");

        /*
        REPLACE JQUERY
        pagesFieldNode = document.getElementById("bookPages");
        pagesFieldNode.removeAttribute("readonly");
        */
        $("#bookPages").removeAttr("readonly").html("Save");

        /*
        REPLACE JQUERY
        coverFieldNode = document.getElementById("bookCover");
        coverFieldNode.removeAttribute("readonly");
        */
        $("#bookCover").removeAttr("readonly").html("Save");
    }
    else {

      /*
      REPLACE JQUERY
      this.innerHTML = "Edit";
      */
      $(this).html("Edit");
/*
        // Leave edit mode and save any changes to localStorage
        titleFieldNode = document.getElementById("bookTitle");
        var bookTitle = titleFieldNode.value;
        var bookObject = null;
        for( var index = 0; index < books.length; index++) {
          if( bookTitle == books[index].title) {
            bookObject = books[index];
          }
        }
        var authorNode = document.getElementById( "bookAuthor");
        bookObject.author = authorNode.value;
        authorNode.readOnly = true;
*/
        /*
        REPLACE JQUERY
        titleFieldNode.setAttribute("readonly", true);
        this.innerHTML = "Edit";
        */
        $("#bookTitle").attr("readonly", true);

        /*
        REPLACE JQUERY
        authorFieldNode = document.getElementById("bookAuthor");
        authorFieldNode.setAttribute("readonly", true);
        this.innerHTML = "Edit";
        */
        $("#bookAuthor").attr("readonly", true);

        /*
        REPLACE JQUERY
        copyrightFieldNode = document.getElementById("bookCopyright");
        copyrightFieldNode.setAttribute("readonly", true);
        */
        $("#bookCopyright").attr("readonly", true);

        /*
        REPLACE JQUERY
        pagesFieldNode = document.getElementById("bookPages");
        pagesFieldNode.setAttribute("readonly", true);
        */
        $("#bookPages").attr("readonly", true);

        /*
        REPLACE JQUERY
        coverFieldNode = document.getElementById("bookCover");
        coverFieldNode.setAttribute("readonly", true);
        */
        $("#bookCover").attr("readonly", true);

        // save the values to local storage
        var objectToSave = {};
        objectToSave.title = document.getElementById("bookTitle").value;
        objectToSave.author = document.getElementById("bookAuthor").value;
        objectToSave.copyright = document.getElementById("bookCopyright").value;
        objectToSave.pages = document.getElementById("bookPages").value;
        objectToSave.cover = document.getElementById("bookCover").src;
        localStorage.setItem(objectToSave.title, JSON.stringify(objectToSave));
        loadBookTitles();
        addBookTitleListeners();
  }
}

/*
 * Allows the user to enter information for a new book item, and save
 * it to local storage.
 */
function onAdd() {
    console.log("onAdd called")
    let buttonText = this.innerHTML;
    if(buttonText == "Add") {
      /*
      REPLACE JQUERY
      this.innerHTML = "Save";
      */
      $(this).html("Save");
        // Make all fields editable, set values to some default value
/*
        REMOVE JQUERY
        var titleField = document.getElementById("bookTitle");
        titleField.removeAttribute("readonly");
        titleField.value = "";
*/
        $("#bookTitle").removeAttr("readonly").val("");

/*
        var authorField = document.getElementById("bookAuthor");
        authorField.removeAttribute("readonly");
        authorField.value = "";
*/
        $("#bookAuthor").removeAttr("readonly").val("");
/*
        var copyrightField = document.getElementById("bookCopyright");
        copyrightField.removeAttribute("readonly");
        copyrightField.value = "";
*/
        $("#bookCopyright").removeAttr("readonly").val("");
/*
        var pagesField = document.getElementById("bookPages");
        pagesField.removeAttribute("readonly");
        pagesField.value = "";
*/
        $("#bookPages").removeAttr("readonly").val("");
/*
        var coverField = document.getElementById("bookCover");
        coverField.removeAttribute("readonly");
        coverField.src = "";
*/
        $("#bookCover").attr("src", "");
      }
      else {
        /*
        REPLACE JQUERY
        this.innerHTML = "Add";
        */
        $(this).html("Add");

         var objectToSave = {};
         objectToSave.title = document.getElementById("bookTitle").value;
         objectToSave.author = document.getElementById("bookAuthor").value;
         objectToSave.copyright = document.getElementById("bookCopyright").value;
         objectToSave.pages = document.getElementById("bookPages").value;
         objectToSave.cover = document.getElementById("bookCover").src;

         //send out API request for isbn number based on book title

         let textInputBox = document.getElementById("bookTitle");
         let titleString = textInputBox.value;

         let xhr = new XMLHttpRequest();
         xhr.addEventListener( "load", informationReceived);

         //$("#bookTitle").load("http://openlibrary.org/search.json?title=" + titleString);
         xhr.open("GET", "http://openlibrary.org/search.json?title=" + titleString);
         xhr.send();

        //$.get("http://openlibrary.org/search.json?title=" + titleString, informationReceived, "json");
        /*$.get("http://openlibrary.org/search.json?title=" + titleString,
            {title: "Dune"},
            informationReceived, // function defined elsewhere, takes one parameter
            "json")
            */

         function informationReceived() {
           console.log( "response text: " + this.responseText);
           let informationParagraph = document.getElementById("information");
           informationParagraph.innerHTML = "<pre>" + this.response + "</pre>";
           let informationObject = JSON.parse( this.responseText);
           let isbns = informationObject.docs[0].isbn;
           informationParagraph.innerHTML = isbns;
           this.img = document.getElementById("bookCover");
           //create image sources using link with the books isbn
           this.img.src = "https://covers.openlibrary.org/b/isbn/"+isbns[0]+"-M.jpg";
           src = document.getElementById("information");
           src.appendChild(this.img)
           //$("#bookCover").attr("src",this.img.src);

           //$("bookCover").append(this.img.src);
           //$("objectToSave").add(this.img.src);
           objectToSave.cover = this.img.src;
           //save to local storage
           localStorage.setItem(objectToSave.title, JSON.stringify(objectToSave));
           loadBookTitles();
           addBookTitleListeners();
         }
     }
}

/*
 * Fills in the information in the main section given the selected book.
 */
function onSelect() {
    let editButton = document.getElementById("editbutton");
    let addButton = document.getElementById("addbutton");
    if( $("#editbutton").html == "Save"/*REPLACE JQUERY: editButton.innerHTML == "Save"*/ ||
        $("#addbutton").html == "Save") {
        // Still in edit mode, please don't actually select a new item
        alert("You are still in edit mode. Save first!");
        return;
    }
    var bookTitle = this.innerHTML;
//    console.log("This is " + this);
//    console.log("Found the title " + bookTitle);
    var targetBookAsString = localStorage.getItem(bookTitle);
    if( targetBookAsString == null) {
        // alert
        return;
    }
    targetBook = JSON.parse(targetBookAsString);
    //console.log("Here is the object: "+ targetBook);

    // Now that we've found our book, put its details in main
/*
    REPLACE JQUERY
    var titleNode = document.getElementById("bookTitle");
    titleNode.value = targetBook.title;
*/
    $("#bookTitle").html($("#bookTitle").val(targetBook.title));
/*
    REPLACE JQUERY
    var authorNode = document.getElementById("bookAuthor");
    authorNode.value = targetBook.author;
*/
    $("#bookAuthor").html($("#bookAuthor").val(targetBook.author));

/*
    REPLACE JQUERY
    var copyrightNode = document.getElementById("bookCopyright");
    copyrightNode.value = targetBook.copyright;
*/
    $("#bookCopyright").html($("#bookCopyright").val(targetBook.copyright));

/*
    REPLACE JQUERY
    var pagesNode = document.getElementById("bookPages");
    pagesNode.value = targetBook.pages;
*/
    $("#bookPages").html($("#bookPages").val(targetBook.pages));


/*
    replace JQUERY
    var coverNode = document.getElementById("bookCover");
    coverNode.src = targetBook.cover;
*/
    $("#bookCover").html($("#bookCover").attr("src", targetBook.cover));
    $("#bookCover").attr("src", targetBook.cover);

}

function onDelete(){
  console.log("onDelete Called")

  //Remove the currently selectd item from local localStorage
  let itemToDelete = document.getElementById("bookTitle").value
  localStorage.removeItem(itemToDelete);
  //Rebuild the display of the list of itmes
  loadBookTitles();
  addBookTitleListeners();
  //Select either nothing or something that stil exists
  //call selectNothing
  selectNothing();
}

/*
 * Selects nothing, returning information disply
 * to it's original state
*/
function selectNothing() {
/*
  document.getElementById("bookTitle").value =  "None";
  document.getElementById("bookAuthor").value = "none";
  document.getElementById("bookCopyright").value = "none";
  document.getElementById("bookPages").value = "none";
  document.getElementById("bookCover").src = " ";
*/
  $("#bookTitle").html($("#bookTitle").val("None"));
  $("#bookAuthor").html($("#bookAuthor").val("none"));
  $("#bookCopyright").html($("#bookCopyright").val("none"));
  $("#bookPages").html($("#bookPages").val("none"));
  $("#bookCover").html($("#bookCover").val(""));

}
