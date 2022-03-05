import { StyleSheet } from 'react-native';
import LogoImage from '../components/LogoImage';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Emoji from '../components/Emoji';
import React, { useState } from "react";
import { FlatList, SafeAreaView,Image, StatusBar, TouchableOpacity } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function AccomodationScreen() {
  return (
      <ScrollScreenView/>
  );
}


const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Przemysl, Poland",
    info: "House 23",
    description: "2 rooms for 4 adults with storage space and a shared bathroom",
    url: 'https://picsum.photos/700',
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Siret, Romania",
    info: "Siret Football Club",
    description: "Free beds for 10 people(adults and kids) next to club office.",
    url: '../assets/images/house(1).jpg',
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Chisinau, Moldova",
    info: "",
    description: "",
    url: '../assets/images/house(1).jpg',
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "Przemysl, Poland",
    info: "School gym",
    description: "shelter housing for 90 refugees",
    url: '../assets/images/house(1).jpg',
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    title: "Fifth Location",
    info: "",
    description: "",
    url: '../assets/images/house(1).jpg',
  },
];

const LeftContent = props => <Avatar.Icon {...props} icon="map" />

 const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <Card style={{marginBottom:20}}>
    <Card.Title title={item.title} subtitle=" " left={LeftContent} />
    <Card.Content>
      <Paragraph>{item.description} {item.url}</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: item.url }} />
    <Card.Actions>
      {/* //<Button>Cancel</Button> */}
      <Button>Learn More</Button>
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
        <Emoji symbol="🛏️" label="Bed"/>
        <Text style={styles.title}>Accomodation</Text>
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
