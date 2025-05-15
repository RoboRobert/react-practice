import { useState } from 'react'
import '../style/App.css'

interface TicButtonData {
  value: string,
  index: number,
  pressed: boolean,
}

interface GameState {
  turn: string,
  gameOver: boolean,
}

function TicTacToe() {
  const defaultState: GameState = {
    turn: 'X',
    gameOver: false
  }
  const [gameState, setGameState] = useState(defaultState);
  const defaultBoard: TicButtonData[] = [{
    value: '',
    index: 0,
    pressed: false
  },
  {
    value: '',
    index: 0,
    pressed: false
  },
  {
    value: '',
    index: 0,
    pressed: false
  },
  {
    value: '',
    index: 0,
    pressed: false
  },
  {
    value: '',
    index: 0,
    pressed: false
  },
  {
    value: '',
    index: 0,
    pressed: false
  },
  {
    value: '',
    index: 0,
    pressed: false
  },
  {
    value: '',
    index: 0,
    pressed: false
  },
  {
    value: '',
    index: 0,
    pressed: false
  },]
  const [board, setBoard] = useState(defaultBoard)

  function resetGame() {
    setBoard(defaultBoard);
    setGameState(defaultState);
  }

  function isGameOver(): string | undefined {
    for(let i = 0; i < board.length/3; i++) {
      // Check columns
      if(board[i].value !== "" && board[i].value ===  board[i+3].value && board[i].value === board[i+6].value) {
        return board[i].value;
      }
      // Check rows
      if(board[i*3].value !== "" && board[i*3].value ===  board[i*3 + 1].value && board[i].value === board[i*3 + 2].value) {
        return board[i].value;
      } 
    }
    // Check left diagonal
    if(board[0].value != "" && board[0].value == board[4].value && board[0].value == board[8].value) {
      return board[0].value;
    }
    if(board[2].value != "" && board[2].value == board[4].value && board[2].value == board[6].value) {
      return board[2].value;
    }

    return undefined;
  }

  function TicButton({ value, index, pressed }: TicButtonData) {
    function handleClick() {
      const newBoard = board.map((e, i) => {
        let newE = e;
        if (i == index) {
          newE.pressed = true;
          newE.value = gameState.turn;
        }
        return newE;
      })

      let newState = gameState;
      const gameOver = isGameOver();
      if(gameOver) {
        alert(`${gameOver} Won the game!`)
        newState.gameOver = true;
      }
      
      if (gameState.turn === "X") {
        newState.turn = "O";
      }
      else newState.turn = "X";

      setGameState(newState);
      setBoard(newBoard);
    }

    return <button className='tic-tac-button' onClick={handleClick} disabled={pressed || gameState.gameOver}>{value}</button>
  }

  return (
    <>
      <h1>TIC TAC TOE</h1>
      {gameState.gameOver ? (
        <button className='play-button' onClick={resetGame}>Play again?</button>
      ) : (<h2>It is {gameState.turn}'s turn.</h2>)}
      <div className='gridBoard'>
        {board.map((e, i) => <TicButton value={e.value} index={i} pressed={e.pressed}></TicButton>)}
      </div>
    </>
  )
}

export default TicTacToe
