import React, { useRef } from 'react';
import { StyleSheet, Text, TextInput, View, Keyboard } from 'react-native';

export default function Score({ playersData, changeHandler, curPlayer }) {
  // create references allowing for access to input components
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  // when keyboard is closed, unset focus from input components
  Keyboard.addListener('keyboardDidHide', () => {
    inputRef1.current.blur();
    inputRef2.current.blur();
  });
  function generatePlayerScore(player) {
    // add this style to current player's score
    const curPlayerHighlight = {backgroundColor: 'rgba(255, 255, 255, 0.3)'};
    return (
      <View style={[styles.playerScoreContainer, curPlayer === player && curPlayerHighlight]}>
        <TextInput
          ref={player === 'player1' ? inputRef1 : inputRef2}
          style={styles.playerName}
          value={playersData[player].name}
          onChangeText={(text) => changeHandler(text, player)}
        />
        <Text style={styles.playerSign}>{playersData[player].sign}</Text>
        <Text style={styles.playerScore}>{playersData[player].score}</Text>
      </View>
    )
  }
  return (
    <View style={styles.scoresContainer}>
      {generatePlayerScore('player1')}
      <Text style={styles.versusText}>vs.</Text>
      {generatePlayerScore('player2')}
    </View>
  );
}

const styles = StyleSheet.create({
  scoresContainer: {
    marginVertical: 30,
    alignSelf: 'center',
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerScoreContainer: {
    height: '100%',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 15,
    overflow: 'hidden',
    alignItems: 'center',
  },
  playerName: {
    fontSize: 18,
    color: 'black',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingTop: 5,
  },
  playerSign: {
    color: 'black',
    backgroundColor: 'white',
    width: '100%',
    textAlign: 'center',
    paddingBottom: 5,
  },
  playerScore: {
    fontSize: 24,
    color: 'white',
    paddingVertical: 10
  },
  versusText: {
    color: 'white',
    paddingHorizontal: 15,
  },
});
