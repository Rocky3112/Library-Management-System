
// import  { useState } from 'react';
// import axios from 'axios';
import { useForm } from 'react-hook-form';
// import './Addbooks.css'

const AddBook = () => {
  const { register, handleSubmit } = useForm();
  // const [message, setMessage] = useState('');

  const onSubmit = async (data) => {

    console.log(data);
    // e.preventDefault();

    // try {
    //   const response = await axios.post('/api/add-book', { name, author });
    //   setMessage(response.data.message);
    // } catch (error) {
    //   setMessage('Error: Book Already Exists');
    // }
  };

  return (
    <div className="text-center ">
      <span className="text-2xl font-semibold text-white">Add Books in Library</span>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-200 p-10 rounded shadow-xl">
      <div className="flex items-center justify-between gap-6">
        <div className="grid gap-5">

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
          />

          <label htmlFor="author">Author Name:</label>
          <input
            type="text"
            id="author"
            {...register("author", { required: true })}
          />
        </div>
      </div>

      <div className="mt-4">
        <input
          type="submit"
          value="ADD BOOK"
          className="hover:bg-blue-500 text-black bg-white py-3 px-4 rounded"
        />
      </div>
    </form>
      {/* <div className="mt-4 text-green-600">{message}</div> */}
      <a href="adminhome" className="text-white mt-4">Go Back</a>
    </div>
  );
};

export default AddBook;
