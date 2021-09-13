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
    if (checkWinner(playersData.player1.sign)) {
      console.log('Congrats! Player 1 wins!');
      setNewGame('player1', 'player2');
    }
    else if (checkWinner(playersData.player2.sign)) {
      console.log('Congrats! Player 2 wins!');
      setNewGame('player2', 'player1');
    }
    else if (!gameState.includes(null)) {
      console.log('That\'s a tie!');
      const startingPlayer = playersData.player1.startedThisGame ? 'player2' : 'player1';
      setNewGame(null, startingPlayer);
    }
    else if (gameState.join('').length > 0) {
      curPlayer === 'player1' ?
        setCurPlayer('player2') :
        setCurPlayer('player1');
    }
  }, [gameState]);
  function checkWinner(sign) {
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
    // console.log(playersData.player1.sign);
    // console.log(playersData.player2.sign);
    setPlayersData(newPlayersData);
    setCurPlayer(startingPlayer);
    setGameState(new Array(9).fill(null));
  }
  function addSign(index) {
    const curSign = curPlayer === 'player1' ? playersData.player1.sign : playersData.player2.sign;
    if (gameState[index] !== null) {
      console.log(`You cannot place ${curSign} here!`);
      return;
    }
    const newGameState = [...gameState];
    newGameState[index] = curSign;
    // console.log(newGameState);
    // console.log(newGameState[index]);
    setGameState(newGameState);
  }
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>{playersData.player1.startedThisGame ? 'Player 1 starts!': 'Player 2 starts!'}</Text>
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
