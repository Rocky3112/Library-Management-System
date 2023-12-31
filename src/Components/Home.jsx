import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import './style.css'
// import img from '../assets/a.jpg'
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
      <div className="head sm:p-5">
        <div className="row1">
          <h1>A room without books is like<br /> a body without a soul.</h1>
        </div>
        <div className="row2 lg:mt-20">
          <h2 className="">Find Your Book</h2>
          <div className="Search">
            <input className="border w-64" type="text" placeholder="Enter Your Book Name"
              value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
              onKeyPress={searchTerm} />
            {/* <button><i className=" btn fas fa-search"></i></button> */}
          </div>
          {/* <img src={img} alt="" /> */}
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