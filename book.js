let myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

function showBooks() {
    let libraryEL = document.querySelector("#library");
    libraryEL.innerHTML ="";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookEL = document.createElement("div");
        bookEL.setAttribute("class", "book");
        bookEL.innerHTML = `
        <div class="header">
            <h1>"${book.title}"</h1>
            <h2>Written By: ${book.author}</h2>
        </div>
        <div class="body">
            <p>Pages: ${book.pages}</p>
            <p>${book.read? "Read" : "Not Read Yet"}</p>
            <button class = "deleteBtn" onclick = "deleteBook(${i})">Delete</button>
            <button class = "toggleBtn" onclick = "toggleRead(${i})">Read</button>
        </div>
        `;
        libraryEL.appendChild(bookEL);
    }
};



function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages= document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    showBooks();
  
};

function deleteBook (i) {
    myLibrary.splice(i, 1);
    showBooks();
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}
function toggleRead(i) {
    myLibrary[i].toggleRead();
    showBooks();
}

let newBookBtn = document.querySelector("#newBookBtn");
let bookDialog = document.querySelector("#bookDialog");
newBookBtn.addEventListener("click", () => {
  bookDialog.showModal()
});


document.querySelector("#newBookForm").addEventListener("submit", function (e) {
    e.preventDefault();
    addBookToLibrary();
    bookDialog.close();
    title.value = "";
    author.value ="";
    pages.value = "";
});

let closeBtn = document.querySelector("#close");
closeBtn.addEventListener("click", function(e) {
    e.preventDefault();
    bookDialog.close();
    title.value = "";
    author.value ="";
    pages.value = "";
})