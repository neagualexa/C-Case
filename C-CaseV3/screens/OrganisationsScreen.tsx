import { StyleSheet } from 'react-native';
import LogoImage from '../components/LogoImage';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Emoji from '../components/Emoji';
import { useState, useCallback } from "react";
import { FlatList, SafeAreaView, Linking, StatusBar, TouchableOpacity, Alert } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function OrganisationsScreen() {
  return (
      <ScrollScreenView/>
  );
}


const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb29ba",
    title: "Doctors Without Borders",
    info: "",
    description: "Provides medical humanitarian support to the people fleeing the country ",
    url: "https://www.doctorswithoutborders.org/what-we-do/countries/ukraine",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f93",
    title: "GlobalGiving",
    info: "",
    description: "",
    url: "https://www.globalgiving.org/",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d82",
    title: "Caritas Ukraine",
    info: "",
    description: "Provides food, clothing and other humanitarian needs to people in Ukraine",
    url: "https://www.caritas.eu/caritas-ukraine/",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d83",
    title: "World Central Kitchen",
    info: "",
    description: "Provides warm meals for refugees",
    url: "https://wck.org/",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d84",
    title: "Razom for Ukraine",
    info: "",
    description: "Aims to help Ukraine pursue a democratic society that has civil rights for all",
    url: "https://razomforukraine.org/donate/",
  },
];


const LeftContent = props => <Avatar.Icon {...props} icon="heart" />

const Item = ({ item, onPress, backgroundColor, textColor }) => (
<Card style={{marginBottom:20}}>
  <Card.Title title={item.title} subtitle=" " left={LeftContent} />
  <Card.Content>
    <Paragraph>{item.description}</Paragraph>
  </Card.Content>
  {/* <Card.Cover source={item.url} /> */}
  <Card.Actions>
    {/* //<Button>Cancel</Button> */}
    <Button onPress={() => {
      window.open(item.url, '_blank');
    }}> Official Link </Button>
  </Card.Actions> 
</Card>
);

//DEBUG original ITEM
// const Item = ({ item, onPress, backgroundColor, textColor }) => (
//   <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
//     <Text style={[styles.title, textColor]}>{item.title}</Text>
//   </TouchableOpacity>
// );

const ScrollScreenView = () => {
  const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
      const backgroundColor = item.id === selectedId ? "#badfff" : "#d9edff";
      const color = item.id === selectedId ? 'white' : 'black';
      return (
        <Item
          item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{backgroundColor}} 
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.scroll_container}>

      <View style={styles.container}>
        <Emoji symbol="☮️" label="Peace"/>
        <Text style={styles.title}>Organisations</Text>
        <Text style={styles.text}>Here you can find the latest offers of accomodation including further details.</Text>
        <Text style={styles.text}>Click on the posts below to find out more.</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        
      </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll_container: {
    flex:1,
    marginLeft: 30,
    marginRight: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  text: {
    fontSize: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
  },
  item: {
    padding: 100,
    marginVertical: 10,
    marginHorizontal: 16,
  },
  todo: {
    margin: 0,
    backgroundColor: '#d9edff',
    color: 'white',
    fontSize: 10,
    padding: 0
  }
  
});
