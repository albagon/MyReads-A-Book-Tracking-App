# MyReads Project

This is the final assessment project for Udacity's React Fundamentals course. With this bookshelf app you will be able to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application

## Installation

From your console, clone the GitHub repository:

```sh
git clone https://github.com/albagon/MyReads-A-Book-Tracking-App.git
```

Install all project dependencies with:

```sh
npm install
```

Now start the server:

```sh
npm start
```

And finally, open `http://localhost:3000/` in your browser.

## App Functionality

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

* Currently Reading
* Want to Read
* Read

Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. If you want to remove a book from your shelves, just select _None_.

The main page also has a link to a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match your search are displayed on the page, along with a control that lets you add the book to your library.

The search page also has a link which leads back to the main page.

## Important

This app is limited to a particular set of books, so don't be surprised if your searches for very particular subjects don't come back with any results.

## Contributing

This repository is the result of a project I worked on to finish a section of the Udacity curriculum for a Front-End Developer Nanodegree Program. Therefore, all contributions are welcome.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## License

_MyReads_ is distributed under the [MIT license](LICENSE).