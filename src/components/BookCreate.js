import { useState } from 'react';
import { useContext } from 'react';
import BooksContext from '../context/books';

function BookCreate() {
  const [title, setTitle] = useState('');
  const { createBook } = useContext(BooksContext);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle('');
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <label>Title</label>
      <form onSubmit={handleSubmit} className="container.is-fluid">
        <input
          className="input"
          placeholder="Title"
          value={title}
          onChange={handleChange}
          required
        />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;
