import {View, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../../assets/styles/Colors';
import Header from './Header';
import SearchBar from './SearchBar';
import PopularSectin from './PopularSectin';
import NewsWorthiy from './NewsWorthiy';

export default function HomePage() {
  return (
    <View style={style.container}>
      <View style={style.contentContainer}>
        <Header />
        <SearchBar
          icon={require('../../../assets/icons/location.png')}
          placeholder="Find Work Space at Jakarta"
        />
      </View>
      <View style={style.scrollContainer}>
        <PopularSectin />
        <NewsWorthiy />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greyLight,
  },
  scrollContainer: {
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
});
