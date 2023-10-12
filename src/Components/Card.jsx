/* eslint-disable react/prop-types */
import  { useState } from "react";
import Modal from "./Modal";
import './style.css';

const Card = ({ book }) => {
    const [selectedBook, setSelectedBook] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (book) => {
        setSelectedBook(book);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedBook(null);
        setIsModalOpen(false);
    };

    return (
        <div>
            <h1>Book Search</h1>

            <ul>
                {book.map((book) => (
                    <li key={book.id} onClick={() => openModal(book)}>
                        <h2>{book.volumeInfo.title}</h2>
                        <p>Author: {book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
                        <p>Published: {book.volumeInfo.publishedDate}</p>
                        <p>Description: {book.volumeInfo.description}</p>
                    </li>
                ))}
            </ul>

            {isModalOpen && (
                <Modal onClose={closeModal}>
                    <h2>{selectedBook.volumeInfo.title}</h2>
                    <p>Author: {selectedBook.volumeInfo.authors && selectedBook.volumeInfo.authors.join(', ')}</p>
                    <p>Published: {selectedBook.volumeInfo.publishedDate}</p>
                    <p>Description: {selectedBook.volumeInfo.description}</p>
                </Modal>
            )}
        </div>
    );
};

export default Card;
