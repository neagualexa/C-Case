import { StyleSheet } from 'react-native';
import { Image, TouchableOpacity} from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import LogoImage from '../components/LogoImage';
import Emoji from '../components/Emoji';
import { RootTabScreenProps } from '../types';
import React from 'react';
import { DefaultTheme } from 'react-native-paper';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <Emoji symbol='🇺🇦' label="Flag: Ukraine"/>
      {/* <LogoImage /> */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      <Text style={styles.title}>Ukraine Humanitarian Support</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.text}>The Ukrainian people are undergoing a horrible tragedy.</Text>
      <Text style={styles.text}>It is our goal and duty to help and supply them with all the humanitarian support and compassion we can.</Text>
      <Text style={styles.text}>We aim to provide them with temporary accommodation with anyone willing to welcome them into their home.</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <LogoImage />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={{ flexDirection:"row" }}>
        <TouchableOpacity onPress={() => navigation.navigate('Accomodation')} style={styles.button}>
          <Text style={styles.buttonText}>Search for Rooms</Text>
        </TouchableOpacity>
        <View
          style={{
          borderLeftWidth: 10,
          borderLeftColor: 'white',
          }}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Host')} style={styles.button}>
          <Text style={styles.buttonText}>Become a Host</Text>
        </TouchableOpacity>
        <EditScreenInfo path="/screens/HomeScreen.tsx" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
  },
});

const theme = {
  ...DefaultTheme,
   roundness: 2, 
   colors: {
   ...DefaultTheme.colors,
   primary: '#3498db',
   accent: '#f1c40f',
   },
};