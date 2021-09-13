import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GameBoard from './view/GameBoard';
import Score from './view/Score';

export default function App() {
  const [gameState, setGameState] = useState(new Array(9).fill(null));
  const [curPlayer, setCurPlayer] = useState('player1');
  const [playersData, setPlayersData] = useState({
    player1: {
      sign: 'X',
      score: 0,
      startedThisGame: true,
    },
    player2: {
      sign: 'O',
      score: 0,
      startedThisGame: false,
    }
  })
  useEffect(() => {
    // check if either player won
    if (checkWinner(playersData.player1.sign)) {
      console.log('Congrats! Player 1 wins!');
      setNewGame('player1', 'player2');
    }
    else if (checkWinner(playersData.player2.sign)) {
      console.log('Congrats! Player 2 wins!');
      setNewGame('player2', 'player1');
    }
    // if not, check if it's a tie
    else if (!gameState.includes(null)) {
      console.log('That\'s a tie!');
      const startingPlayer = playersData.player1.startedThisGame ? 'player2' : 'player1';
      setNewGame(null, startingPlayer);
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
        sign: playersData.player1.sign,
        score: winningPlayer === 'player1' ? playersData.player1.score + 1 : playersData.player1.score,
        startedThisGame: startingPlayer === 'player1',
      },
      player2: {
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
  function addSign(index) {
    // check if move is legal
    const curSign = playersData[curPlayer].sign;
    if (gameState[index] !== null) {
      console.log(`You cannot place ${curSign} here!`);
      return;
    }
    // if it's legal, update gameState array
    const newGameState = [...gameState];
    newGameState[index] = curSign;
    setGameState(newGameState);
  }
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>{curPlayer === 'player1' ? 'Player 1\'s move!': 'Player 2\'s move!'}</Text>
      <GameBoard gameState={gameState} pressHandler={addSign}/>
      <Score player1Score={playersData.player1.score} player2Score={playersData.player2.score}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    color: 'white'
  },
});
