import { Link } from "react-router-dom";

function HomePage() {
  return (
    <nav>
       <Link to="game">Play Tic Tac Toe</Link>
    </nav>
  )
}

export default HomePage;