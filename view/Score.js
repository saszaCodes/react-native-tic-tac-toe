import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Score({ player1Score = 0, player2Score = 0, player1Name = 'Player 1', player2Name = 'Player 2', changeHandler }) {
  return (
    <View style={styles.scoresContainer}>
      <View style={styles.playerScoreContainer}>
        <TextInput style={styles.playerName} value={player1Name} onChangeText={(text) => changeHandler(text, 'player1')}/>
        <Text style={styles.playerScore}>{player1Score}</Text>
      </View>
      <Text style={styles.versusText}>vs.</Text>
      <View style={styles.playerScoreContainer}>
        <TextInput style={styles.playerName} value={player2Name} onChangeText={(text) => changeHandler(text, 'player2')}/>
        <Text style={styles.playerScore}>{player2Score}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scoresContainer: {
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
    paddingVertical: 5,
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
