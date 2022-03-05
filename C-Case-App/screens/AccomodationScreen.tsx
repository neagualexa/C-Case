import { StyleSheet } from 'react-native';
import LogoImage from '../components/LogoImage';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Emoji from '../components/Emoji';
import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, TouchableOpacity } from "react-native";
// import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function AccomodationScreen() {
  return (
    <View style={styles.container}>
      <Emoji symbol="🏠" label="House"/>
      <Text style={styles.title}>Accomodation</Text>
      <Text style={styles.text}>Here you can find the latest offers of accomodation including further details.</Text>
      <Text style={styles.text}>Click on the posts below to find out more.</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/AccomodationScreen.tsx" />
      <ScrollScreenView/>
    </View>
  );
}


const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Location",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Location",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Location",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "Fourth Location",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    title: "Fifth Location",
  },
];

 const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

<FlatList
keyExtractor={(item) => item.id.toString()}
data={DATA}
renderItem={({ item }) => (
<Text >{item.title}</Text>
)}
/>

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
    <SafeAreaView style={styles.container}>
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
    flex: 5,
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
