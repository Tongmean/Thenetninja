import { createContext, useState } from 'react';
export const BookContext = createContext();
const BookContextProvider =(props)=>{
    const [books, setBook] = useState([
        {title: 'Kingdom of wind', author: 'Joy', id: 1},
        {title: 'Kingdom of fire', author: 'Yun', id: 2}
    ]);
    const addBook = (title, author) =>{
        setBook([...books, {title, author, id: Math.random()}])
    };

    const removeBook = (id) =>{
        setBook(books.filter((book)=> book.id !== id));
    };
    return(
        <BookContext.Provider value={{books, addBook, removeBook}}>
            { props.children }
        </BookContext.Provider>
    );

};
export default BookContextProvider;