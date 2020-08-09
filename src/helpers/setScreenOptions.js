import React from 'react';
import {Image, Platform, TouchableOpacity} from 'react-native';

export const setScreenOptions = ({navigation, route}) => ({
  headerTitleStyle: {
    fontSize: 24,
    alignSelf: 'center',
  },
  headerStyle: {
    height: Platform.OS === 'ios' ? 100 : 70,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: Platform.OS === 'ios' ? 1 : 10,
  },
  headerLeft: () => {
    if (route.name !== 'Home') {
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
    if (route.name !== 'Home') {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate('Filters')}
          style={route.name === 'Filters' ? {opacity: 0} : ''}>
          <Image
            source={require('../../assets/images/filter.png')}
            style={
              route.name === 'Filters'
                ? {opacity: 0}
                : {width: 29, height: 29, marginRight: 20}
            }
          />
        </TouchableOpacity>
      );
    }
  },
});
