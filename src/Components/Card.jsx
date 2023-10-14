/* eslint-disable react/prop-types */
import './style.css';

const Card = ({ book }) => {
    console.log(book);

    return (
        <div className=''>
          

            <div className="card glass">
                <div className="card-body h-80 bg-red-00">
                    <h2 className=' text-2xl font-semibold'>{book.volumeInfo.title}</h2>
                    <p className=' text-lg font-semibold'>Author: {book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
                    <p>Published: {book.volumeInfo.publishedDate}</p>

                    <div className="card-actions justify-end">
                        <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>Read More</button>
                    </div>
                </div>
            </div>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box  max-w-4xl">
                    <h2>{book.volumeInfo.title}</h2>
                    <p>Author: {book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
                    <p>Published: {book.volumeInfo.publishedDate}</p>
                    <p>description: {book.volumeInfo.description}</p>
                    
                    <div className="modal-action">
                        <form method="dialog">

                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Card;
