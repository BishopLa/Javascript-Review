const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}




const book = getBook(3);
book;

// const {author, title, pages, publicationDate, genres, hasMovieAdaptation} = book;
// console.log(title, author, genres);


// // const primaryGenre = genres[0];
// // const secondaryGenre = genres[2];


// //Destucturing

// const [primaryGenre, secondaryGenre, ... otherGenres] = genres;
// console.log(primaryGenre, secondaryGenre, otherGenres);

// const newGenres = ['epic fantasy',...genres]
// newGenres

// const updatedBook = {...book, 
//   //Adding a new property
//   moviePublicationDate:"2021-12-19",
//   //Overiding an existing property
//   pages: 1210,}
// updatedBook

// //Arrow Function
// const getYear = (str) => str.split("-")[0];
// console.log (getYear(publicationDate));

// const summary = ` ${title}, a ${pages}-long book , was written by ${author} and published in ${getYear(publicationDate)}. 
// the book has ${hasMovieAdaptation ? " " : "not"} been adapted as a movie`;
// summary; 
// //tERNARY OPERATION
// const pagesRange =pages > 1000 ? "over a thousand" : "less than a thousand";
// pagesRange;
// console.log (`The book has ${pagesRange} pages`)

// //Short Circuiting and Logical Operators
// //And operators
// console.log(true && "Some strings");
// console.log(false && "Some strings");
// console.log(hasMovieAdaptation && "This book has a movie");
// //falsy: 0, '', null, undefined
// //truthy value
// console.log( "Jonas" && "some string" );
// console.log (0 && " some string" );
// //or operators
// console.log(true || "some string" );
// console.log(false || "some string" );


// console.log(book.translations.spanish);
// const spanishTranslations = book.translations.spanish ||"NOT TRANSLATED"
// spanishTranslations;

// // console.log(book.reviews.librarything.reviewsCount);

// // const countWrong = book.reviews.librarything.reviewsCount || 'No Data'
// // countWrong;


// // const count = book.reviews.librarything.reviewsCount ?? 'No Data';
// // count;


// //Chaining Operator

// function getTotalReviewCount(){
// const goodread = book.reviews?.goodreads?.reviewsCount ?? 0;
// const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
// librarything;
// return goodread + librarything;
// }
// console.log(getTotalReviewCount(book));



// THE ARRAY MAP METHOD


// function getTotalReviewCount(book){
//   const goodread = book.reviews?.goodreads?.reviewsCount ?? 0;
//   const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
//   librarything;
//   return goodread + librarything;
//   }
//   console.log(getTotalReviewCount(book));

 
// const books = getBooks();
// books;
// const x = [1,2,3,4,5,6,7].map((el)=> el * 2);
// console.log(x);


// const titles = books.map((books) => books.title);
// titles;

// const essentialData = books.map((book) => ({
//   title: book.title,
//   author: book.author,
//   reviewsCount: getTotalReviewCount(book),
// }));
// essentialData;

// //ARRAY FILTER
// const longBooks = books
// .filter((books) => books.pages > 500)
// . filter ((books) => books.hasMovieAdaptation);

// longBooks;

// const adventureBooks = books
// .filter((books) => books.genres.includes("adventure",)
// ).map(books => books.title);

// adventureBooks;

// //ARRAY REDUCE METHOD\

// const pagesAllBooks = books.reduce((sum, book) =>  sum + book.pages , 0);
// pagesAllBooks;



// //ARRAY SORT METHOD
//  const  arr = [3, 7, 1, 9, 6];
//  const sorted = arr. slice().sort ((a, b) => a-b);
//  sorted;
//  arr;

//  const sortedByPages = books.slice().sort ((a, b) => b - a);
//  sortedByPages;


//  //IMMUTABLE ARRAYS

// //Add book object to array
//  const newBook = {
//   id: 6,
//   title: "Harry Potter and the chambers of secrets",
//   author: "J. K. Rowling",
//  };
//  const booksAfterAdd = [...books, newBook];
//  booksAfterAdd;
//  //Delete book object from array
//  const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
//  booksAfterDelete;
// //Update book object in the Array
// const booksAfterUpdate = booksAfterDelete.map(book => book.id === 1 ? {...book, pages:1210} : book);
// booksAfterUpdate;

//Asynchronous Javascript Promises

// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(res=> res.json())
// .then((data) => console.log(data));
// console.log("Jonas");


//Asynchronous Javascript Async/Await

async function getToDos (){
 const res = await fetch('https://jsonplaceholder.typicode.com/todos');
 const data = await res.json();
 console.log(data);


 return data;
};
const toDos = getToDos();
console.log(toDos)

console.log("Jonas")