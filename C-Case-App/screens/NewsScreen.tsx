import { StyleSheet } from 'react-native';
import LogoImage from '../components/LogoImage';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Emoji from '../components/Emoji';
import React, { useState } from "react";

export default function NewsScreen() {
  return (
    <View style={styles.container}>
      <Emoji symbol="📰" label="Newspaper"/>
      <Text style={styles.title}>Latest Updates</Text>
      <Text style={styles.title}>How to donate, help and support</Text>
      <Text style={styles.text}>This page provides updates about organisations currently providing humanitarian support.</Text>
      <Text style={styles.text}>Current updates with the latest rollout of supplies and donations as well as points of contact.</Text>
      <Text style={styles.text}>You can also find more information about ways to donate and places accepting donations.</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/NewsScreen.tsx" />
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
});
