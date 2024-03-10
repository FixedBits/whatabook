""" 
Title: codingNightOwls-whatABook.py
Author: Phuong, Vix and Mackenize
Date: 03/09/2024
Description: Python for WhatABook app
"""

# import the MongoClient 
from pymongo import MongoClient

# connection to MongoDB 
client = MongoClient("mongodb+srv://web340_admin:webstudent999@bellevueuniversity.bj68fz9.mongodb.net/?retryWrites=true&w=majority")
print(client)

# Adding a blank line to improve readability.
print()

# variable to access web335DB
db = client['whatABook']

# print all documents in books collection
for book in db.books.find():
  print(book)
  
# print list of books based on user's selected genre
genre_Select = input("Please enter a genre from above:  ")
if genre_Select == 'Horror' or genre_Select == 'Fantasy' or genre_Select == 'Fiction' or genre_Select == 'Romance' or genre_Select == 'Thriller' or genre_Select == 'Horror':
    for book in db.books.find({'genre': genre_Select}, {'title': 1, 'genre': 1}):
        print(book)
else:
    print("Please enter valid genre") 

# Add a blank line to improve readability.
print()

# Display list of books by genre
select = input ('To view wishlist, please enter your customer ID. ')

# Add a blank line to improve readability.
print()

if select == 'c1005' or select == 'c1008' or select == 'c1009':
    for wishlist in db.customers.find({'customerId': select}, {'wishlist': 1}):
        print(wishlist)
else:
    print("Please enter valid ID")
