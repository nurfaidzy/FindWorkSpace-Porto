import {View, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../../assets/styles/Colors';
import Header from './Header';

export default function HomePage() {
  return (
    <View style={style.container}>
      <View>{Header()}</View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greyLight,
  },
});
