import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


{/* MagicButton component from video */
function MagicButton() {

  return (
    <button onClick={() => alert("You clicked the magic button!")}>
      Click me!
    </button>
  )

}
{/* ---------------COMPONENET #1-------------------- */


{/* ---------------- DATA STRUCTURE ---------------- */


const books = [
  {
    id: 1,
    title: "A Farewell to Arms",
    author: "Ernest Hemingway",
    year: 1929
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    year: 1949
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
  }
]

/* -------- COMPONENT #2 -------- */
function BookCard({ title, author, year }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Published: {year}</p>
    </div>
  )
}

/* -------- COMPONENT #3 -------- */
function BookList({ bookArray }) {
  return (
    <div>
      <h2>Book List</h2>
      {bookArray.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
          year={book.year}
        />
      ))}
    </div>
  )
}





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
        My name is zachary robinson and this is my change
      </p>
      <MagicButton />
      <BookList bookArray={books} />
    </>
  )
}

export default App
