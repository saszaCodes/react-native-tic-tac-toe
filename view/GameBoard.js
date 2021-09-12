import React from 'react';
// eslint-disable-next-line object-curly-newline
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function GameBoard({ gameState, pressHandler }) {
  function generateFields(arr) {
    return arr.map((el, index) => {
      let sign;
      if (el === null) { sign = 'null'; }
      else if (el === 'X') { sign = 'X'; }
      else if (el === 'O') { sign = 'O'; }
      else { throw new Error('Invalid array passed to generateFields() function') }
      return (
        <Pressable key={index} style={styles.gameField} onPress={() => pressHandler(index)}>
          {/* ZASTĄP TO PRAWDZIWYM KÓŁKIEM I KRZYŻYKIEM */}
          <Text style={{textAlign: 'center'}}>{sign}</Text>
        </Pressable>
      );
    });
  }
  return (
    <View style={styles.gameBoard}>
      {/* ZAMIAST TEGO PRZEKAŻ ARRAY OD APP.JS */}
      {generateFields(gameState)}
    </View>
  );
}

const styles = StyleSheet.create({
  gameBoard: {
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '95%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    aspectRatio: 1
  },
  gameField: {
    width: '33%',
    aspectRatio: 1,
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 1,
  },
});
