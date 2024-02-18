import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../interfaces/HomeInterface';

export default function HomePage() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={{backgroundColor: 'green'}}>
      <Text>HomePage</Text>
      <TouchableOpacity>
        <Text
          onPress={() => {
            navigation.navigate('Details');
          }}>
          Reditect To Details
        </Text>
      </TouchableOpacity>
    </View>
  );
}
