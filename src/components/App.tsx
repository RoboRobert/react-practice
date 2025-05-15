import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../style/App.css'

function App() {
  const [boardGrid, setBoardGrid] = useState([["X"," "," "],[" ","X"," "],[" "," ","X"]])

  function TicButton({i1, i2, value}) {
    function handleClick() {
      setBoardGrid(boardGrid[i1][i2] = "X");
    }
  }

  return (
    <>
      <h1>TIC TAC TOE</h1>
      <div className='gridBoard'>
        {boardGrid.map((e1, i1) => e1.map((e2, i2) => <button>{e2}</button>))}
      </div>
    </>
  )
}

export default App
