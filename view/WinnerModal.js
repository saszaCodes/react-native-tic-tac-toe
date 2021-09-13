import React from 'react';
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';

export default function WinnerModal({ winner, pressHandler }) {
  return (
    <View style={styles.backdrop}>
      <View style={styles.winnerContainer}>
        <Text style={styles.winnerText}>
          {
            winner !== null ?
            `${winner} won! Congrats!` :
            'That\'s a tie!'
          }
        </Text>
        <View style={styles.controlsContainer}>
          <Pressable style={styles.button} onPress={pressHandler}>
            <Text style={styles.buttonText}>Start Next Game</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },
  winnerContainer: {
    backgroundColor: 'white',
    width: '90%',
    height: 200,
    alignSelf: 'center',
    padding: 20,
    borderRadius: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  winnerText: {
    fontSize: 22,
    textDecorationLine: 'underline',
  },
  controlsContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'black',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  buttonText: {
    color: 'white'
  }
});
