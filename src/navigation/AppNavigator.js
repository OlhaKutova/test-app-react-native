import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import Home from '../../src/screens/Home';
import Drinks from '../../src/screens/Drinks';
import Filters from '../../src/screens/Filters';
import {setScreenOptions} from '../helpers/setScreenOptions';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={setScreenOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Drinks" component={Drinks} />
        <Stack.Screen name="Filters" component={Filters} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
