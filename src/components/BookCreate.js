import { useState } from 'react';
import { useContext } from 'react';
import BooksContext from '../context/books';

function BookCreate() {
  const [title, setTitles] = useState('');
  const { createBook } = useContext(BooksContext);

  const handlerChange = (event) => {
    setTitles(event.target.value);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitles('');
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handlerSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handlerChange}></input>
        <button className="button">Create</button>
      </form>
    </div>
  );
}

export default BookCreate;
