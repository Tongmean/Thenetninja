import { createContext, useState , useEffect, useReducer} from 'react';
import { bookReducer } from '../reducers/bookReducer'
export const BookContext = createContext();
const BookContextProvider =({ children })=>{
    const [books, dispatch] = useReducer(bookReducer, [{title: 'Kingdom of wind', author: 'Joy', id: 1}],
    ()=>{
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
    });
    // const addBook = (title, author) =>{
    //     setBook([...books, {title, author, id: Math.random()*10}])
    // };
    // const removeBook = (id) =>{
    //     setBook(books.filter((book)=> book.id !== id));
    // };

    useEffect(()=>{
        localStorage.setItem('books',JSON.stringify(books))
    }, [books]);
    return(
        <BookContext.Provider value={{books, dispatch}}>
            { children }
        </BookContext.Provider>
    );
};
export default BookContextProvider;



// [
//     {title: 'Kingdom of wind', author: 'Joy', id: 1},
//     {title: 'Kingdom of fire', author: 'Yun', id: 2},
// ]
// useEffect(()=>{
//     const localData = localStorage.getItem('books');
//     localData ? JSON.parse(localData) : [];
// },[]);