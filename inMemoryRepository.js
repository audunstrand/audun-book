var _ = require('lodash');

var books = [];

module.exports = {
    findAll:  () => {
        return Promise.resolve(books);
    },
    stockUp:  (isbn, count) =>  {
        var item = this.findItem(isbn);
        if (item) {
            item.count = count;
        } else {
            books.push({isbn: isbn, count: count});
        }
        return Promise.resolve();
    },
    findItem:  (isbn) =>   {
        return _.find(books, function (book) {
            return book.isbn === isbn;
        });
    },
    getCount:  (isbn) => {
        var item = this.findItem(isbn);
        if (item) {
            return Promise.resolve(item.count);
        } else {
            return Promise.resolve(null);
        }
    }
};