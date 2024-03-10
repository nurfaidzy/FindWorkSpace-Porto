import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {Gs} from '../../../assets/styles/GlobalStyle';
import {colors} from '../../../assets/styles/Colors';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../interfaces/HomeInterface';

interface BasicData {
  title: string;
  address: string;
  price: string;
  images: any;
}

interface ItemData extends BasicData {
  onPress?: () => void;
}

function NewsWorthyItem({title, address, price, images, onPress}: ItemData) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePress = () => {
    if (onPress) {
      navigation.navigate('Details');
    }
  };

  return (
    <View style={style.container}>
      <Image source={images} style={style.imageBackground} />
      <View style={style.contentContainer}>
        <View style={style.priceContainer}>
          <Text style={style.price}>{price}</Text>
        </View>
        <View>
          <Text style={[Gs.h2, Gs.textWhite]}>{title}</Text>
          <Text style={[Gs.font400, Gs.textWhite]}>{address}</Text>
        </View>
      </View>
      <TouchableOpacity style={style.button} onPress={handlePress}>
        <Image
          source={require('../../../assets/icons/arrow_right_white.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

export default function NewsWorthiy() {
  const dataItem: BasicData[] = [
    {
      title: 'Hajime',
      address: 'Pantai Utara No.90',
      price: '$421/day',
      images: require('./../../../assets/images/item_2_a.png'),
    },
    {
      title: 'DeepWork',
      address: 'Pantai Selatan No.90',
      price: '$500/day',
      images: require('./../../../assets/images/item_3_a.png'),
    },
  ];
  return (
    <View style={style.pageSize}>
      <Text style={style.mainText}>NewsWorthy</Text>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={dataItem}
          keyExtractor={item => item.title}
          renderItem={({item}) => (
            <View>
              <NewsWorthyItem
                title={item.title}
                address={item.address}
                price={item.price}
                images={item.images}
                onPress={() => {}}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  mainText: {
    ...Gs.h1,
    ...Gs.textBlack,
    marginBottom: 12,
    fontSize: 20,
  },
  pageSize: {
    paddingHorizontal: 20,
  },
  container: {
    marginRight: 40,
    marginBottom: 24,
  },
  imageBackground: {
    ...Gs.cornerXL,
    width: 240,
    height: 320,
    position: 'relative',
  },
  contentContainer: {
    ...Gs.justifyBetween,
    ...Gs.cornerXL,
    backgroundColor: colors.transparentBlack,
    position: 'absolute',
    width: 240,
    height: 320,
    padding: 20,
  },
  priceContainer: {
    ...Gs.cornerXS,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: colors.secondary,
    alignSelf: 'flex-end',
  },
  price: {
    ...Gs.textPrimary,
    ...Gs.font600,
  },
  button: {
    ...Gs.justifyCenter,
    ...Gs.itemsCenter,
    position: 'absolute',
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
    borderRadius: 40,
    zIndex: 2,
    bottom: 24,
    right: -20,
  },
});
