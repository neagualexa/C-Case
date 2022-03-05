import React, { Component } from 'react';
import { View, Image, StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';


class LogoImage extends Component {
  render() {
    return (
      <View>
        <Image
          source={require('../assets/images/logo.PNG')}
          // source={{ uri: 'https://1drv.ms/u/s!AkKr5NB_nuJQgP9HKjaMlFEIBeY6Qw?e=b6Dm7X' }}
          // source={require('../assets/images/icon.png')}
          fadeDuration={0}
          style={{ width: 50, height: 50 }}
          />
        {/* <Button icon={require('../assets/logo.PNG')}>
        </Button> */}
      </View>
    );
  }
}

export default LogoImage;