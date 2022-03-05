import { StyleSheet } from 'react-native';
import LogoImage from '../components/LogoImage';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Emoji from '../components/Emoji';
import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, TouchableOpacity } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function DonationsScreen() {
  return (
      <ScrollScreenView/>
  );
}

const DATA = [
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    title: "Leeds Polish Catholic Centre, West Yorkshire",
    description: "Collecting items such as blankets, clothes, toilet rolls, nappies and toothbrushes",
    url: "",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    title: "Polish White Eagle Club in Balham, South London",
    description: "Accepting clothing, bedding and other items to help refugees from Ukraine",
    url: "",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Unicef",
    description: "Whether you decide to make a one-off donation or pledge a monthly gift, we promise that the donation you make to UNICEF today will be used to help keep a child safe.",
    url: "https://www.unicef.org/ukraine/en/take-action",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "UN Refugee Agency",
    description: "Filippo Grandi, High Commissioner for Refugees, said the UN Refugee Agency is working with the authorities, UN and other partners in Ukraine and is ready to provide humanitarian assistance wherever necessary and possible.",
    url: "https://donate.unrefugees.org.uk/",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "United Help Ukraine",
    description: "Russia launched a war against Ukraine killing more than 2000 people just in one week. Stand with the people of Ukraine! Our focus is on medical supplies, humanitarian aid, wounded warriors and raising awareness.",
    url: "https://unitedhelpukraine.org/",
  },
];

const LeftContent = props => <Avatar.Icon {...props} icon="pin" />

  const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <Card style={{marginBottom:20}}>
    <Card.Title title={item.title} subtitle=" " left={LeftContent} />
    <Card.Content>
      <Paragraph>{item.description}</Paragraph>
    </Card.Content>
    <Card.Actions>
    <Button onPress={() => {
      window.open(item.url, '_blank');
    }}> Link </Button>
    </Card.Actions> 
  </Card>
);

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
        <Text style={styles.title}> </Text>
        <Emoji symbol="💸👚🥫" label="donations"/>
        <Text style={styles.title}>Help Donate Support</Text>
        <Text style={styles.text}>This page provides updates about organisations currently accepting donations.</Text>
        <Text style={styles.text}>By clicking on the cards below, you will find details about what where and how you can donate essential supplies including food and clothes.</Text>
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

