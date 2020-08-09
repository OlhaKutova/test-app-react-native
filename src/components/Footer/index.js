import React from 'react';
import {View, Text} from 'react-native';

import {styles} from '../../styles/components/footerStyles';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>That's all for today</Text>
    </View>
  );
};

export default Footer;
