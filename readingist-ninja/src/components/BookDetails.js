import { useContext} from 'react';
import { BookContext } from '../context/BookContext';
const BookDetails = ({book})=> {
    const { dispatch } = useContext(BookContext);
  return (
    <div>
        <li onClick={()=> dispatch({type: 'REMOVE_BOOK', id: book.id})}>
            <div className='title'>{book.title}</div>
            <div className='author'>{book.author}</div>
            <div className='id'>{book.id}</div>
        </li>
    </div>
  )
}
export default BookDetails;