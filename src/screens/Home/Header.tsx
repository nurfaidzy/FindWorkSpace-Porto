import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Gs} from '../../../assets/styles/GlobalStyle';

export default function Header() {
  return (
    <View style={style.headContainer}>
      <View style={Gs.flexRow}>
        <View>
          <Image source={require('../../../assets/images/profile_1.png')} />
        </View>
        <View>
          <Text style={Gs.textBlack}>Hi, Shayna</Text>
          <Text style={[Gs.font700, Gs.textBlack]}>@shaynawork</Text>
        </View>
      </View>
      <View style={Gs.flexRow}>
        <Image
          source={require('../../../assets/icons/gift.png')}
          style={style.iconContainer}
        />
        <Image
          source={require('../../../assets/icons/notification.png')}
          style={style.iconContainer}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  headContainer: {
    ...Gs.flexRow,
    ...Gs.itemsCenter,
    ...Gs.justifyBetween,
    padding: 24,
  },
  profileContainer: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  iconContainer: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
});
