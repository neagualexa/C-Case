import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';


class LogoImage extends Component {
  render() {
    return (
      <View>
        <Image
          source={require('../assets/images/logo.png')}
          fadeDuration={0}
          style={{ width: 50, height: 50 }}
          />
      </View>
    );
  }
}

export default LogoImage;