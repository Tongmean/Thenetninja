import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import BookDetails from './BookDetails';
function BookList() {
    const { books } = useContext(BookContext);
  return (
    <div>
      {books.length ? (
        <div className='book-list'>
            <ul>
                { books.map((book)=>{
                    return ( < BookDetails book={book} key={book.id}/>)
                })}
            </ul>
        </div>
      ):(
        <div className='empty'> No Books to read. Hello free time :)</div>
      )}
    </div>
  )
}

export default BookList;
