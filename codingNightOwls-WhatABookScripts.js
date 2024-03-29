/** 
  Title: codingNightOwls-WhatABookScripts.js
  Authors: Victor, Phuong & Mackenzie
  Date: 03/02/2024
  Revised: 03/10/2024
  Description: Scripts and Queries for WhatABook project
*/

// Dropping (deleting) the books, customers and wishlist collections.
db.books.drop();
db.customers.drop();
db.wishlist.drop();

// Creating the books collections 
db.createCollection("books", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ['bookId', 'genre', 'title', 'author'],
      properties: {
        bookId: {
          bsonType: "string"
        },
        genre: {
          bsonType: "string"
        },
        title: {
          bsonType: "string"
        },
        author: {
          bsonType: "string"
        }, 
         
      }
    }
  }
});

// Create customers and wishlist collections
db.createCollection("customers", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: {
        customerId: {
          bsonType: "string"
        },
        firstName: {
          bsonType: "string"
        },
        lastName: {
          bsonType: "string"
        }, 
        wishlist: {
          bsonType: "array",
          items: {
            bsonType: "object",
            properties: {
              bookId: {
                bsonType: "string",
              },
              genre: {
                bsonType: "string",
              },
              title: {
                bsonType: "string",
              },
              author: {
                bsonType: "string",
              },
            },
          },
        },
      },
    },
  },
});

// Define the books
// romance genre books
romance = {
  bookId: "ISBN 9781503290563",
  genre: "Romance",
  title: "Pride & Prejudice ",
  author: "Jane Austen",
},

romance_2 = {
  bookId: "ISBN 9781514696880",
  genre: "Romance",
  title: "Emma",
  author: "Jane Austen",
};

// fantasy genre books
fantasy = {
  bookId: "ISBN 9780590353403",
  genre: "Fantasy",
  title: "Harry Potter and the Sorcerer’s Stone",
  author: "J.K. Rowling",
},

fantasy_2 = {
  bookId: "ISBN 9781649374042",
  genre: "Fantasy",
  title: "Fourth Wing",
  author: "Rebecca Yarros",
};

// fiction genre books
fiction = {
  bookId: "ISBN 9781451673265",
  genre: "Fiction",
  title: "Fahrenheit 451",
  author: "Ray Bradbury",
},

fiction_2 = {
  bookId: "ISBN 9780316015844",
  genre: "Fiction",
  title: "Twilight",
  author: "Stephanie Meyer",
};

// horror genre books
horror = {
  bookId: "ISBN 9780143134770",
  genre: "Horror",
  title: "The Haunting of Hill House",
  author: "Shirley Jackson",
},

horror_2 = {
  bookId: "ISBN 9780063214835",
  genre: "Horror",
  title: "The Black Phone",
  author: "Joe Hill",
};

// thriller genre books
thriller = {
  bookId: "ISBN 9781501180989",
  genre: "Thriller",
  title: "The Outsider",
  author: "Stephen King",
},

thriller_2 = {
  bookId: "ISBN 9780345806789",
  genre: "Thriller",
  title: "The Shining",
  author: "Stephen King",
};

// true crime genre books
true_crime = {
  bookId: "ISBN  9798374832556",
  genre: "TrueCrime",
  title: "The Southern Killer",
  author: "Peter Mahoney",
},

true_crime_2 = {
  bookId: "ISBN 9781793403575",
  genre: "TrueCrime",
  title: "The Man-Eater",
  author: "Ryan Green",
};

// Insert books into the books collection
db.books.insertMany([romance, romance_2, fantasy, fantasy_2, fiction, fiction_2, horror, horror_2, thriller, thriller_2, true_crime, true_crime_2]);

// Verify the insertion
db.books.find();

// Define the customers
rachel = {
  customerId: 'c1005',
  firstName: 'Rachel',
  lastName: 'Lee',
  wishlist: [
    {
      bookId: "ISBN 9781503290563",
      genre: "Romance",
      title: "Pride & Prejudice ",
      author: "Jane Austen",
    },
    {
      bookId: "ISBN 9781451673265",
      genre: "Fiction",
      title: "Fahrenheit 451",
      author: "Ray Bradbury",
    },
    {
       bookId: "ISBN 9780063214835",
       genre: "Horror",
       title: "The Black Phone",
       author: "Joe Hill",
    }
  ]
};

david = {
  customerId: 'c1006',
  firstName: 'David',
  lastName: 'Bowie',
  wishlist: [
    {
      bookId: "ISBN 9781451673265",
      genre: "Fiction",
      title: "Fahrenheit 451",
      author: "Ray Bradbury",
    },
    {
      bookId: "ISBN 9781501180989",
      genre: "Thriller",
      title: "The Outsider",
      author: "Stephen King",
    },
    {
      bookId: "ISBN  9798374832556",
      genre: "TrueCrime",
      title: "The Southern Killer",
      author: "Peter Mahoney",
    }
  ]
};

john = {
  customerId: 'c1007',
  firstName: 'John',
  lastName: 'Doe',
  wishlist: [
    {
      bookId: "ISBN 9780345806789",
      genre: "Thriller",
      title: "The Shining",
      author: "Stephen King",
    },
    {
      bookId: "ISBN 9780063214835",
      genre: "Horror",
      title: "The Black Phone",
      author: "Joe Hill",
    },
    {
      bookId: "ISBN 9781793403575",
      genre: "TrueCrime",
      title: "The Man-Eater",
      author: "Ryan Green",
    }
  ]
};

ambrose = {
  customerId: 'c1008',
  firstName: 'Ambrose',
  lastName: 'Park',
  wishlist: [
    {
      bookId: "ISBN 9780063214835",
      genre: "Horror",
      title: "The Black Phone",
      author: "Joe Hill",
    },
    {
      bookId: "ISBN 9781649374042",
      genre: "Fantasy",
      title: "Fourth Wing",
      author: "Rebecca Yarros",
    },
    {
      bookId: "ISBN 9780345806789",
      genre: "Thriller",
      title: "The Shining",
      author: "Stephen King",
    }
  ]
};

jenny = {
  customerId: 'c1009',
  firstName: 'Jenny',
  lastName: 'Kim',
  wishlist: [
    {
      bookId: "ISBN 9781514696880",
      genre: "Romance",
      title: "Emma",
      author: "Jane Austen",
    },
    {
      bookId: "ISBN 9781649374042",
      genre: "Fantasy",
      title: "Fourth Wing",
      author: "Rebecca Yarros",
    },
    {
      bookId: "ISBN  9798374832556",
      genre: "TrueCrime",
      title: "The Southern Killer",
      author: "Peter Mahoney",
    }
  ]
};

// Insert customers into the customers collection
db.customers.insertMany([rachel, david, john, ambrose, jenny]);

// Verify the insertion
db.customers.find();