/**
 Title: TheCodingNightOwls-queries.js
 Authors: Victor, Phuong & Mackenzie
 Date: 02 March 2024
 Description: Queries for WhatABook project
 */


// display a list of books
db.books.find()

// display a list of books based on genre 

// Romance
db.books.find({genre: {$all: ["Romance"]}})

// Fantasy
db.books.find({genre: {$all: ["Fantasy"]}})

// Fiction
db.books.find({genre: {$all: ["Fiction"]}})

// Horror
db.books.find({genre: {$all: ["Horror"]}})

// Thriller
db.books.find({genre: {$all: ["Thriller"]}})

// TrueCrime
db.books.find({genre: {$all: ["TrueCrime"]}})

// display a list of books by author
db.books.find({author: "Jane Austen"})
db.books.find({author: "J.K. Rowling"})
db.books.find({author: "Rebecca Yarros"})
db.books.find({author: "Ray Bradbury"})
db.books.find({author: "Stephanie Meyer"})
db.books.find({author: "Shirley Jackson"})
db.books.find({author: "Joe Hill"})
db.books.find({author: "Stephen King"})
db.books.find({author: "Peter Mahoney"})
db.books.find({author: "Ryan Green"})

// display a list of books by bookId
db.books.find({bookId: "ISBN 9781503290563"})
db.books.find({bookId: "ISBN 9781514696880"})
db.books.find({bookId: "ISBN 9780590353403"})
db.books.find({bookId: "ISBN 9781649374042"})
db.books.find({bookId: "ISBN 9781451673265"})
db.books.find({bookId: "ISBN 9780316015844"})
db.books.find({bookId: "ISBN 9780143134770"})
db.books.find({bookId: "ISBN 9780063214835"})
db.books.find({bookId: "ISBN 9781501180989"})
db.books.find({bookId: "ISBN 9780345806789"})
db.books.find({bookId: "ISBN 9798374832556"})
db.books.find({bookId: "ISBN 9781793403575"})

// display wishlist by customerId
db.customers.findOne({customerId: "c1005"}, {wishlist: 1})
db.customers.findOne({customerId: "c1006"}, {wishlist: 1})
db.customers.findOne({customerId: "c1007"}, {wishlist: 1})
db.customers.findOne({customerId: "c1008"}, {wishlist: 1})
db.customers.findOne({customerId: "c1009"}, {wishlist: 1})

// add a book to a customer's wishlist
db.customers.insertOne({customerId: "c1007"}, {wishlist: {bookId: "ISBN 9780060598242", genre: "Fantasy", title: "The Chronicles of Narnia", author: "C.S. Lewis"}})

// remove the book from a customer's wishlist
db.customer.deleteOne({_id: ObjectId('65e3d526a12a45f177f5a2b7')})