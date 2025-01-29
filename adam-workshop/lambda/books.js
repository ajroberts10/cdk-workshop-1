const books = [
  {
    id: 1,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    published_year: 1813,
    genre: "Romance",
  },
  {
    id: 2,
    title: "Sense and Sensibility",
    author: "Jane Austen",
    published_year: 1811,
    genre: "Romance",
  },
  {
    id: 3,
    title: "Adventures of Huckleberry Finn",
    author: "Mark Twain",
    published_year: 1884,
    genre: "Adventure",
  },
  {
    id: 4,
    title: "The Adventures of Tom Sawyer",
    author: "Mark Twain",
    published_year: 1876,
    genre: "Adventure",
  },
  {
    id: 5,
    title: "Song of Solomon",
    author: "Toni Morrison",
    published_year: 1977,
    genre: "Fiction",
  },
];

exports.handler = async function (event) {
  console.log("request:", JSON.stringify(event, undefined, 2));
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify(books),
  };
};
