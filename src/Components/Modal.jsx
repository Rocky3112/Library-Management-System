/* eslint-disable react/prop-types */
import './style.css'

const Modal = ({ book, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{book.volumeInfo.title}</h2>
        <p>Author: {book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
        <p>Published: {book.volumeInfo.publishedDate}</p>
        <p>Description: {book.volumeInfo.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
