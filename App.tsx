/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import HomePage from './src/screens/Home/HomePage';
import DetailsPage from './src/screens/Details/DetailsPage';
import BookingPage from './src/screens/Booking/BookingPage';
import CheckOutPage from './src/screens/CheckOut/CheckOutPage';
import SuccessPage from './src/screens/Success/SuccessPage';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Details" component={DetailsPage} />
        <Stack.Screen name="Booking" component={BookingPage} />
        <Stack.Screen name="Checkout" component={CheckOutPage} />
        <Stack.Screen name="Success" component={SuccessPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
