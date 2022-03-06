import { StyleSheet } from 'react-native';
import LogoImage from '../components/LogoImage';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Emoji from '../components/Emoji';
import React, { useState } from "react";
import { FlatList, SafeAreaView, Linking, StatusBar, TouchableOpacity, Alert } from "react-native";
import { Avatar, Button, Card, Title, Paragraph, DefaultTheme } from 'react-native-paper';

export default function NewsScreen() {
  return (
    <ScrollScreenView/>
  );
}


const DATA = [
  {
    id: "58694a0f-3da1-471f-bd96-145571e39d83",
    title: "Ukrinform",
    info: "Ukrinform brings the latest news, daily news, political news,\n business news, social news, cultural news, sports news.",
    description: "",
    url: "https://www.ukrinform.net/",
    logo: "https://logowik.com/content/uploads/images/ukrinform3979.jpg",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb39ba",
    title: "BBC News",
    info: "Visit BBC News for up-to-the-minute news, \nbreaking news, video, audio and feature stories.",
    description: "",
    url: "https://www.bbc.co.uk/news/world-60525350",
    logo: "https://static.wikia.nocookie.net/bbc/images/f/f1/BBC_News_channel_logo.png/revision/latest?cb=20210516184723",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97g93",
    title: "CNN",
    info: "Find the latest breaking news and information \non the top stories, weather, \nbusiness, entertainment, politics, and more.",
    description: "",
    url: "https://edition.cnn.com/2022/02/14/world/gallery/ukraine-russia-crisis/index.html",
    logo: "http://assets.stickpng.com/thumbs/5842ab75a6515b1e0ad75b0b.png",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571f29d82",
    title: "The Guardian",
    info: "Latest news, sport, business, comment, analysis and reviews \nfrom the Guardian, the world's leading liberal voice.",
    description: "",
    url: "https://www.theguardian.com/world/live/2022/mar/05/russia-ukraine-war-latest-news-nato-gives-green-light-to-bombing-with-lack-of-no-fly-zone-says-zelenskiy?filterKeyEvents=false&page=with:block-6223e6488f0872dfc8c96bba",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/The_Guardian_2018.svg/2560px-The_Guardian_2018.svg.png",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145572e29d84",
    title: "Romania Insider",
    info: "The most reliable media source for articles \nin English dedicated to Romania: latest news in business, \npolitics and society, feature stories on business.",
    description: "",
    url: "https://www.romania-insider.com/ro-red-cross-ukraine-aid-mar-2022",
    logo: "https://cdn.romania-insider.com/cdn/ff/pLk4rqBvyr8iCGuOdsPeksaU4jvOBUjbSVBi5hg5cMA/1643904565/public/2022-02/ri_logo.png",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145572e29d85",
    title: "TVN24 Poland",
    info: "Czytaj najnowsze informacje i oglądaj \nwideo w portalu informacyjnym TVN24!",
    description: "",
    url: "https://tvn24.pl/tvn24-news-in-english",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Tvn24_Logo.svg/1200px-Tvn24_Logo.svg.png",
  },
];

const LeftContent = props => <Avatar.Icon {...props} theme={theme} color='#f1c40f' icon="newspaper"/>

const Item = ({ item, onPress}) => (
<Card style={{marginBottom:20, marginHorizontal:10}}>
  <Card.Title title={item.title} subtitle=" " left={LeftContent} />
  <Card.Content>
    <Paragraph>{item.info}</Paragraph> 
  </Card.Content>
  {/* <Card.Cover source={item.url} /> */}
  <Card.Actions>
    {/* //<Button>Cancel</Button> */}
    <Button theme={theme} onPress={() => {
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
      return (
        <Item
          item={item}
        onPress={() => setSelectedId(item.id)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.scroll_container}>

      <View style={styles.container}>
      <Text style={styles.title}> </Text>
        <Emoji symbol="📰" label="Newspaper"/>
        <Text style={styles.title}>Latest Updates</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text style={styles.text}>This page provides updates about the latest situation regarding support for Ukraine.</Text>
        <Text style={styles.text}>Particular details about organisations providing support and how and where you can donate items can be found in the tabs below.</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        
      </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        numColumns={3}
        horizontal={false}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: window.innerWidth,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:10,
  },
  scroll_container: {
    flex:1,
    marginLeft: 30,
    marginRight: 30,
    alignItems: 'center',
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

const theme = {
   ...DefaultTheme,
    roundness: 2, 
    colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
    },
};