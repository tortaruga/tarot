import { Routes, Route, Link } from "react-router-dom"
import Book from "./components/Book.jsx"
import Reading from './components/Reading.jsx'
import Home from "./components/Home.jsx"
import DetailPage from "./components/DetailPage.jsx"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/book" element={<Book />}></Route>
        <Route path="/reading" element={<Reading />}></Route>
        <Route path="/details/:id" element={<DetailPage />}></Route>
      </Routes>
    </>

  )
}

export default App
