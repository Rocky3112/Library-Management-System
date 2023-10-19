
import  { useState } from 'react';
import axios from 'axios';
// import './Addbooks.css'

const AddBook = () => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/add-book', { name, author });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error: Book Already Exists');
    }
  };

  return (
    <div className="text-center ">
      <span className="text-2xl font-semibold text-white">Add Books in Library</span>
      <form onSubmit={handleFormSubmit}>
        <div className="mt-4">
          <input
            type="text"
            name="name"
            placeholder="Enter Book Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-80 py-3 px-4 border rounded"
            required
          />
        </div>
        <div className="mt-4">
          <input
            type="text"
            name="auth"
            placeholder="Enter Author Name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-80 py-3 px-4 border rounded"
            required
          />
        </div>
        <div className="mt-4">
          <input type="submit" value="ADD BOOK" className="hover:bg-blue-500 text-black bg-white py-3 px-4 rounded" />
        </div>
      </form>
      <div className="mt-4 text-green-600">{message}</div>
      <a href="adminhome" className="text-white mt-4">Go Back</a>
    </div>
  );
};

export default AddBook;
