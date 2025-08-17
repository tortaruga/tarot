import { Routes, Route} from "react-router-dom"
import Book from "./components/Layout/Book.jsx"
import Reading from './components/Layout/Reading.jsx'
import Home from "./components/Layout/Home.jsx"
import DetailPage from "./components/Layout/DetailPage.jsx"

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
