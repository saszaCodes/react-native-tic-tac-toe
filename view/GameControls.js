import React from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

export default function GameControls({ resetScoreHandler, resetGameHandler }) {
  return (
    <View style={styles.controlsContainer}>
      <Pressable onPress={resetGameHandler} style={[styles.button, styles.resetGameButton]}>
        <Text style={styles.resetGameText}>Reset Current Game</Text>
      </Pressable>
      <Pressable onPress={resetScoreHandler} style={[styles.button, styles.resetScoreButton]}>
        <Text style={styles.resetScoreText}>Reset Score</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  controlsContainer: {
    marginVertical: 30,
    alignSelf: 'center',
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  resetGameButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  resetScoreButton: {
    backgroundColor: 'white',
  },
  resetGameText: {
    color: 'white',
  },
  resetScoreText: {
    color: 'black',
  },
});
