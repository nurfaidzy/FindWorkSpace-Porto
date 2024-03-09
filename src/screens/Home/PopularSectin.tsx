import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Gs} from '../../../assets/styles/GlobalStyle';
import {colors} from '../../../assets/styles/Colors';

export default function PopularSectin() {
  return (
    <View style={style.mainContainer}>
      <View>
        <Text style={style.textStyle}>Popular</Text>
      </View>
      <View>
        <View style={Gs.flexRow}>
          <Image
            source={require('./../../../assets/images/item_1_a.png')}
            style={style.mainImagePopuler}
          />
          <View>
            <Image
              source={require('./../../../assets/images/item_1_b.png')}
              style={style.imagePopuler}
            />
            <Image
              source={require('./../../../assets/images/item_1_c.png')}
              style={style.imagePopuler}
            />
          </View>
        </View>
      </View>
      <View style={style.populerContent}>
        <View>
          <Text style={[Gs.h2, Gs.textBlack]}>Indoor Work</Text>
          <Text style={[Gs.textGrey]}>Jalan Angga Bekerja No.18</Text>
        </View>
        <View style={style.pricePopular}>
          <Text style={[Gs.font600, Gs.textPrimary]}>$599/day</Text>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  mainImagePopuler: {
    ...Gs.cornerXL,
    flex: 1,
    height: 200,
    marginRight: 10,
  },
  imagePopuler: {
    ...Gs.cornerMD,
    width: 130,
    height: 95,
    marginBottom: 10,
  },
  textStyle: {
    ...Gs.textBlack,
    marginBottom: 12,
  },

  populerContent: {
    ...Gs.flexRow,
    ...Gs.justifyBetween,
  },
  pricePopular: {
    ...Gs.justifyCenter,
    ...Gs.itemsCenter,
    ...Gs.cornerXS,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: colors.secondary,
  },
});
