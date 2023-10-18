
import  { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

  };

  return (
    <div className="text-center">
      <span className="text-2xl font-semibold">Add Books in Library</span>
      <form onSubmit={handleFormSubmit}>
        <div className="mt-4">
          <input
            type="text"
            name="name"
            placeholder="Enter Book Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-64 p-2 border rounded"
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
            className="w-64 p-2 border rounded"
            required
          />
        </div>
        <div className="mt-4">
          <input type="submit" value="ADD BOOK" className="bg-blue-500 text-white p-2 rounded" />
        </div>
      </form>
      <div className="mt-4 text-green-600">{message}</div>
      <a href="adminhome" className="text-blue-500 mt-4">Go Back</a>
    </div>
  );
};

export default AddBook;
