import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {Gs} from '../../../assets/styles/GlobalStyle';
import {colors} from '../../../assets/styles/Colors';

interface PropsData {
  icon?: any;
  label?: string;
  placeholder: string;
}

export default function SearchBar({icon, label, placeholder}: PropsData) {
  return (
    <>
      <View style={style.sectionContainer}>
        {label && <Text style={style.label}>{label}</Text>}
        <View style={style.searchContainer}>
          {icon && <Image source={icon} style={style.iconContainer} />}
          <TextInput placeholder={placeholder} style={style.searchInput} />
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  label: {
    ...Gs.h4,
    ...Gs.textBlack,
    marginTop: 16,
    marginBottom: 4,
  },
  iconContainer: {
    width: 24,
    height: 24,
  },
  searchInput: {
    marginLeft: 10,
  },
  searchContainer: {
    ...Gs.flexRow,
    ...Gs.itemsCenter,
    ...Gs.cornerXL,
    borderWidth: 1,
    borderColor: colors.greyContainer,
    paddingHorizontal: 20,
  },
  sectionContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
});
