import React, { useContext, useState} from 'react';
import { BookContext} from '../context/BookContext';
function BookForm() {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch({type: 'ADD_BOOK', book: {
            title, author
        }});
        setAuthor('');
        setTitle('');
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" required placeholder='Book Title' value={title} onChange={(e)=> setTitle(e.target.value)}/>
            <input type="text" required placeholder='Book author' value={author} onChange={(e)=> setAuthor(e.target.value)}/>
            <button type="submit">add Books</button>
        </form>
    </div>
  )
}

export default BookForm;