import { useState } from 'react';

function BookCreate({ onCreate }) {
  const [title, setTitles] = useState('');

  const handlerChange = (event) => {
    setTitles(event.target.value);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
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
