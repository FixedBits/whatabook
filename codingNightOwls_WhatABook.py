""" 
Title: codingNightOwls_WhatABook.py
Authors: Victor, Phuong & Mackenzie
Date: 03/10/2024
Description: Python App for WhatABook project
"""

# Import the MongoClient 
from pymongo import MongoClient

def get_db():
    # Connection to MongoDB 
    client = MongoClient("mongodb+srv://web340_admin:webstudent999@bellevueuniversity.bj68fz9.mongodb.net/?retryWrites=true&w=majority")
    print(client)  # Print the client object
    # Variable to access web335DB
    db = client['whatABook']
    return db

def print_books(db):
    # Print all documents in books collection
    print("\nList of all books:")
    for book in db.books.find():
        print(book)

def print_books_by_genre(db):
    # Print list of books based on user's selected genre
    genre_Select = input("\nPlease enter a genre from above:  ")
    genres = ['Horror', 'Fantasy', 'Fiction', 'Romance', 'Thriller']
    if genre_Select in genres:
        print(f"\nList of books in genre {genre_Select}:")
        for book in db.books.find({'genre': genre_Select}, {'title': 1, 'genre': 1}):
            print(book)
    else:
        print("Please enter valid genre") 

def print_wishlist(db):
    # Display list of books by genre
    select = input ('\nTo view wishlist, please enter your customer ID. ')
    customer_ids = ['c1005', 'c1008', 'c1009', 'c1006', 'c1007']
    if select in customer_ids:
        print(f"\nWishlist for customer ID {select}:")
        for wishlist in db.customers.find({'customerId': select}, {'wishlist': 1}):
            print(wishlist)
    else:
        print("Please enter valid ID")

def main():
    db = get_db()
    print_books(db)
    print_books_by_genre(db)
    print_wishlist(db)

if __name__ == "__main__":
    main()