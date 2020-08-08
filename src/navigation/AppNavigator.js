import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

import Home from '../../src/screens/Home';
import Drinks from '../../src/screens/Drinks';
import Filters from '../../src/screens/Filters';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const screens = [
    {title: 'Home', component: Home},
    {title: 'Drinks', component: Drinks},
    {title: 'Filters', component: Filters},
  ];
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {screens.map((item, index) => (
          <Stack.Screen
            key={index}
            name={item.title}
            component={item.component}
            options={({navigation}) => ({
              headerTitleStyle: {
                fontSize: 24,
              },
              headerStyle: {
                //height: 70,
                height: 100,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 1,
              },
              headerLeft: () => {
                if (item.title !== 'Home') {
                  return (
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                      <Image
                        source={require('../../assets/images/arrowBack.png')}
                        style={{width: 29, height: 29, marginLeft: 20}}
                      />
                    </TouchableOpacity>
                  );
                }
              },
              headerRight: () => {
                if (item.title === 'Drinks') {
                  return (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Filters')}>
                      <Image
                        source={require('../../assets/images/filter.png')}
                        style={{width: 29, height: 29, marginRight: 20}}
                      />
                    </TouchableOpacity>
                  );
                }
              },
            })}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
