# Reading List using REACT

This is a REACT project crated as part of Udacity React Nanodegree course. The goal of this project is to create a REACT web application.

## Installation:

To install this project, you need to have Node.js. If you have Node installed in your local system. Please follow the following steps to start.

* Clone the project
`git clone https://github.com/lokesh-reddyvari/Reading-List-REACT.git`

* Install all project dependencies with `npm install`
* start the development server with `npm start`

A new browser window will be opened with address http://localhost:3000. If not opened please enter the same address in the browser.

Once you go to the address, you can see the home page with books organized in different book shelves as below.

![Home page](/screenshots/home-page.png?raw=true "Home Page")

To navigate to the search page click on *+* icon in home page or go to http://localhost:3000/search. To search for books in the database, enter search term. Example search is below:

![Search page](/screenshots/search-page.png?raw=true "Search Page")

In both the pages, to move a specific book, select the book shelf you want as below.

![Book shelf Selection](/screenshots/book-shelf-selection.png?raw=true "Book shelf Selection")


## Backend Server

Backend logic contains the methods that need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.
