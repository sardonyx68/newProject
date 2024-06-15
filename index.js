const booksData = {
    "books": [
        {
            "title": "The Catcher in the Rye",
            "author": "J.D. Salinger",
            "year_published": 1951,
            "genres": ["Fiction", "Classics"],
            "available": true
        },
        {
            "title": "To Kill a Mockingbird",
            "author": "Harper Lee",
            "year_published": 1960,
            "genres": ["Fiction", "Classics"],
            "available": false
        },
        {
            "title": "1984",
            "author": "George Orwell",
            "year_published": 1949,
            "genres": ["Fiction", "Dystopian", "Science Fiction"],
            "available": true
        }
    ]
};

console.log(booksData.books[2]["title"], booksData.books[2].title,
    booksData["books"][2]["title"]
)
console.log(booksData.books[2].genres[0])










