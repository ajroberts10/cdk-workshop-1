const authors = [
  {
    id: 1,
    name: "Jane Austen",
    genre: "Fiction",
    nationality: "British",
  },
  {
    id: 2,
    name: "Mark Twain",
    genre: "Fiction",
    nationality: "American",
  },
  {
    id: 3,
    name: "Toni Morrison",
    genre: "Literary Fiction",
    nationality: "American",
  },
];

exports.handler = async function (event) {
  console.log("request:", JSON.stringify(event, undefined, 2));
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify(authors),
  };
};
