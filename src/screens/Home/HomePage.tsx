import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import PopularSectin from './PopularSectin';
import NewsWorthiy from './NewsWorthiy';

export default function HomePage() {
  return (
    <View style={style.mainContainer}>
      <View>
        <Header />
        <SearchBar
          icon={require('../../../assets/icons/location.png')}
          placeholder="Find Work Space at Jakarta"
        />
      </View>
      <ScrollView style={style.scrollContainer}>
        <PopularSectin />
        <NewsWorthiy />
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  scrollContainer: {
    height: 50000,
  },
});
