import React from 'react';
// eslint-disable-next-line object-curly-newline
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import oWhite from '../assets/game-board/o-icon-white.png';
import xWhite from '../assets/game-board/x-icon-white.png';

export default function GameBoard({ gameState, pressHandler }) {
  function generateFields(arr) {
    return arr.map((el, index) => {
      // create a variable mapping given field's gameState to an appropriate image
      let sign;
      if (el === null) { sign = null; }
      else if (el === 'X') { sign = <Image style={styles.gameSign} source={xWhite} />; }
      else if (el === 'O') { sign =  <Image style={styles.gameSign} source={oWhite} />; }
      else { throw new Error('Invalid array passed to generateFields() function'); }
      // create a style object removing outer border from the given field
      let removedBorders = new Object();
      if (index === 0 || index === 1 || index === 2) { removedBorders.borderTopWidth = 0; }
      if (index === 6 || index === 7 || index === 8) { removedBorders.borderBottomWidth = 0; }
      if (index === 0 || index === 3 || index === 6) { removedBorders.borderLeftWidth = 0; }
      if (index === 2 || index === 5 || index === 8) { removedBorders.borderRightWidth = 0; }
      return (
        <Pressable key={index} style={[styles.gameField, removedBorders]} onPress={() => pressHandler(index)}>
          {/* ZASTĄP TO PRAWDZIWYM KÓŁKIEM I KRZYŻYKIEM */}
          <View style={styles.gameSignContainer}>
            {sign}
          </View>
          {/* <Text style={{textAlign: 'center', color: 'white'}}>{sign}</Text> */}
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
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1
  },
  gameField: {
    width: '33%',
    aspectRatio: 1,
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 1,
  },
  gameSignContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameSign: {
    height: '75%',
    width: '75%',
  },
});
