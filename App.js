import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, StatusBar } from 'react-native';
import GameBoard from './view/GameBoard';
import Score from './view/Score';
import GameControls from './view/GameControls';
import WinnerModal from './view/WinnerModal';

export default function App() {
  const [gameState, setGameState] = useState(new Array(9).fill(null));
  const [curPlayer, setCurPlayer] = useState('player1');
  const [playersData, setPlayersData] = useState({
    player1: {
      name: 'Player 1',
      sign: 'X',
      score: 0,
      startedThisGame: true,
    },
    player2: {
      name: 'Player 2',
      sign: 'O',
      score: 0,
      startedThisGame: false,
    }
  })
  const [winnerModalControls, setWinnerModalControls] = useState({
    show: false,
    winner: null,
  });
  useEffect(() => {
    // check if either player won
    if (checkWinner(playersData.player1.sign)) {
      setNewGame('player1', 'player2');
      setWinnerModalControls({
        show: true,
        winner: playersData.player1.name
      });
    }
    else if (checkWinner(playersData.player2.sign)) {
      setNewGame('player2', 'player1');
      setWinnerModalControls({
        show: true,
        winner: playersData.player2.name
      });
    }
    // if not, check if it's a tie
    else if (!gameState.includes(null)) {
      const startingPlayer = playersData.player1.startedThisGame ? 'player2' : 'player1';
      setNewGame(null, startingPlayer);
      setWinnerModalControls({
        show: true,
        winner: null
      });
    }
    // if not, and it's not a start of new game, change current player
    else if (gameState.join('').length > 0) {
      curPlayer === 'player1' ?
        setCurPlayer('player2') :
        setCurPlayer('player1');
    }
  }, [gameState]);
  function checkWinner(sign) {
    // define win conditions and check if they're met; return true if yes, else return false
    if (
      gameState[0] === sign && gameState[1] === sign && gameState[2] === sign ||
      gameState[3] === sign && gameState[4] === sign && gameState[5] === sign ||
      gameState[6] === sign && gameState[7] === sign && gameState[8] === sign ||
      gameState[0] === sign && gameState[3] === sign && gameState[6] === sign ||
      gameState[1] === sign && gameState[4] === sign && gameState[7] === sign ||
      gameState[2] === sign && gameState[5] === sign && gameState[8] === sign ||
      gameState[0] === sign && gameState[4] === sign && gameState[8] === sign ||
      gameState[2] === sign && gameState[4] === sign && gameState[6] === sign
    ) { return true; }
    else { return false; }
  }
  function setNewGame(winningPlayer, startingPlayer) {
    // prepare players data at the beggining a of new game
    const newPlayersData = {
      player1: {
        name: playersData.player1.name,
        sign: playersData.player1.sign,
        score: winningPlayer === 'player1' ? playersData.player1.score + 1 : playersData.player1.score,
        startedThisGame: startingPlayer === 'player1',
      },
      player2: {
        name: playersData.player2.name,
        sign: playersData.player2.sign,
        score: winningPlayer === 'player2' ? playersData.player2.score + 1 : playersData.player2.score,
        startedThisGame: startingPlayer === 'player2',
      }
    };
    // set new players data, starting player and empty the game board
    setPlayersData(newPlayersData);
    setCurPlayer(startingPlayer);
    setGameState(new Array(9).fill(null));
  }
  function resetScore() {
    // prepare players data, where each has 0 points, don't change anything else
    const newPlayersData = {
      player1: {
        name: playersData.player1.name,
        sign: playersData.player1.sign,
        score: 0,
        startedThisGame: playersData.player1.startedThisGame,
      },
      player2: {
        name: playersData.player2.name,
        sign: playersData.player2.sign,
        score: 0,
        startedThisGame: playersData.player2.startedThisGame,
      }
    };
    // set new players data
    setPlayersData(newPlayersData);
  }
  function addSign(index) {
    // check if move is legal
    const curSign = playersData[curPlayer].sign;
    if (gameState[index] !== null) {
      return;
    }
    // if it's legal, update gameState array
    const newGameState = [...gameState];
    newGameState[index] = curSign;
    setGameState(newGameState);
  }
  function changeName(newName, player) {
    const newPlayersData = {...playersData};
    newPlayersData[player].name = newName;
    setPlayersData(newPlayersData);
  }
  return (
    <>
      <StatusBar />
      <ScrollView style={styles.container}>
        { winnerModalControls.show && 
          <WinnerModal 
            winner={winnerModalControls.winner}
            pressHandler={() => setWinnerModalControls({ show: false, winner: null })}
          />
        }
        <Score
          player1Score={playersData.player1.score}
          player1Name={playersData.player1.name}
          player2Score={playersData.player2.score}
          player2Name={playersData.player2.name}
          playersData={playersData}
          changeHandler={changeName}
          curPlayer={curPlayer}
        />
        <GameBoard gameState={gameState} pressHandler={addSign}/>
        <GameControls 
          resetGameHandler={() => setNewGame(null, curPlayer)}
          resetScoreHandler={resetScore}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
