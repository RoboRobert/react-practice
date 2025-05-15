import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import TicTacToe from "./TicTacToe";
import HomePage from "./HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/game" element={<TicTacToe></TicTacToe>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;