import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import './style.css'
const Home = () => {
  const [searchTerm, setSearchTerm] = useState('Harry Potter'); // Set your initial search term
  const [books, setBooks] = useState([]);


  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
        );

        setBooks(response.data.items || []); // Extract book data from the response
      } catch (error) {
        console.error('Error fetching data:', error);
      }

    };

    fetchData();
  }, [searchTerm]);
  //   console.log(books);

  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>A room without books is like<br /> a body without a soul.</h1>
        </div>
        <div className="row2">
          <h2>Find Your Book</h2>
          <div className="search">
            <input type="text" placeholder="Enter Your Book Name"
              value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
              onKeyPress={searchTerm} />
            <button><i className="fas fa-search"></i></button>
          </div>
          <img src="./images/bg2.png" alt="" />
        </div>
      </div>

      <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-16 m-7">
        {

          books.map((book) => (
            <Card key={book.id} book={book} />
          ))

        }
      </div>
    </>
  )
}
export default Home;