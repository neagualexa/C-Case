import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import Emoji from '../components/Emoji';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  return (
    <SafeAreaView >
      <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}> </Text>
      <Text style={styles.title}>About <Emoji symbol="🌍" label="globe"/></Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.text}>The Ukrainian refugee crisis is the large ongoing movement of people in and out of Ukraine during the 2022 Russian invasion of Ukraine.</Text>
      <Text style={styles.text}>It began with the initial invasion of Russian troops on 24 February 2022.</Text>
      <Text style={styles.text}>Several European countries were already preparing to take in refugees before the invasion, especially Poland which was ready to accept 1 million refugees.</Text>
      <Text style={styles.text}>Hundreds of thousands fled in the first few days after the attack.</Text>
      <Text style={styles.text}>Most have found refuge in neighboring countries west of Ukraine: Poland, Hungary, Moldova, Romania and Slovakia.</Text>
      <Text style={styles.text}>Many of those affected are seeking refuge in the homes of relatives who live abroad.</Text>
      <Text style={styles.text}>Railroad companies in several states such as Poland and Germany allow Ukrainian refugees to travel by train free of charge.</Text>
      <Text style={styles.text}>Ukrainians can travel freely to many other European countries due to previous agreements with other countries and the Schengen area.</Text>
      <Text style={styles.text}>Some refugees without Ukrainian citizenship as well as Romani people have reported discrimination at the border.</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.text}>Our aim is to provide a centralised platform where aid and offers of support to the Ukrainian refugees can be coordinated.</Text>
      <Text style={styles.text}>We hope the application can connect individuals in need of help with those who able and willing to provide it.</Text>
      <Text style={styles.text}>Together as a diverse and international array of people, we stronger and can help overcome these times of difficulty.</Text>
      <Text style={styles.text}>We hope our site can help make donating and getting involved as easy and straight forward as possible and thank all volunteers for time and support.</Text>
      <Text style={styles.text}>Any suggestions to improve the platform are always welcome so please get in touch.</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.text}>A map of where Ukrainian refugees have fled.</Text>
      <SafeAreaView style={styles.container}>
        <Image source={{uri: "https://e3.365dm.com/22/03/800x600/skynews-ukrainian-refugees_5694262.png?bypass-service-worker&20220304155616"}} style={styles.image} />
      </SafeAreaView>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/ModalScreen.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // maxWidth: '80%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 13,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
    height: 400,
    width: 400,
  },
});
