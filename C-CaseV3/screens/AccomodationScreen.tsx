import { StyleSheet } from 'react-native';
import LogoImage from '../components/LogoImage';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Emoji from '../components/Emoji';
import React, { useState } from "react";
import { Alert, FlatList, SafeAreaView, Modal, Pressable } from "react-native";
import { Avatar, Button, Card, Title, Paragraph, DefaultTheme } from 'react-native-paper';

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
    host: "Dimitri",
    contact: "Tel:07479XXXXX, email: dimitri@help.com",
    description: "2 rooms for 4 adults with storage space and a shared bathroom",
    url: 'https://www.essentialhomeandgarden.com/wp-content/uploads/2020/03/mattress-on-floor.jpg',
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Siret, Romania",
    info: "Siret Football Club",
    host: "Andrei",
    contact: "Tel:074897XXXXX, email: andrei@help.com",
    description: "Free beds for 10 people(adults and kids) next to club office.",
    url: 'https://www.irishtimes.com/polopoly_fs/1.4816824.1646253799!/image/image.jpg_gen/derivatives/landscape_685/image.jpg',
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Chisinau, Moldova",
    info: "family hotel, main boulevard",
    host: "Ioana",
    contact: "Tel:075785XXXXX, email: ioana@help.com",
    description: "Moldexpo Centre in Chisinau hosts more than 100 refugees from Ukraine",
    url: 'https://www.helpage.org/silo/images/nina-93-ukraine_2016x1134.jpg',
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "Przemysl, Poland",
    info: "School gym, city centre",
    host: "Vlad",
    contact: "Tel:07231XXXXX, email: vlad@help.com",
    description: "shelter housing for 90 refugees",
    url: 'https://th.bing.com/th/id/OIP.Lik1bEdzRHoeKUCOQq_JSgHaEo?pid=ImgDet&rs=1',
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    title: "Przemysl, Poland",
    info: "Train station Nr1",
    host: "Klara",
    contact: "Tel:079489XXXXX, email: klara@help.com",
    description: "train station shelter for women and children fleeing Ukraine",
    url: 'https://static.independent.co.uk/2022/03/03/07/Poland_Russia_Ukraine_War_95184.jpg?quality=75&width=640&auto=webp&crop=7748:5061,smart',
  },
];


var curr_post = 0;
const LeftContent = props => <Avatar.Icon {...props} theme={theme} color='#f1c40f' icon="map" />

const Item = ({ item, onPress, curr_post }) => (
<Card style={{marginBottom:20, marginHorizontal:10}}>
  <Card.Title title={item.title} subtitle=" " left={LeftContent} />
  <Card.Content>
    <Paragraph>{item.description}</Paragraph>
  </Card.Content>
  <Card.Cover source={{ uri: item.url }} />
  <Card.Actions>
    <Button theme={theme} onPress={onPress}>Learn More</Button>
  </Card.Actions> 
  {/* <Text>{curr_post}</Text> */}
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
const [modalVisible, setModalVisible] = useState(false);


   const renderItem = ({ item }) => {
     return (
       <Item
         item={item}
        onPress={() => {setSelectedId(item.id); setModalVisible(true); curr_post=DATA.indexOf(item);}}
        curr_post={DATA.indexOf(item)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.scroll_container}>
      <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Details pop up screen has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
                 
                <Card style={{marginBottom:20, marginHorizontal:10}}>
                  <Card.Title title={"Town & Country: "+DATA[curr_post].title} subtitle={"Address: "+DATA[curr_post].info} />
                  <Card.Content>
                    <Paragraph>{"Description: "+DATA[curr_post].description}</Paragraph>
                    <Paragraph>{'\n'}{"Host: "+DATA[curr_post].host}</Paragraph>
                    <Paragraph>{"Contact: "+DATA[curr_post].contact}</Paragraph>
                  </Card.Content>
                  <Card.Cover source={{ uri: DATA[curr_post].url }} />
                </Card>  
                  
              
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Details</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

      <View style={styles.container}>
        <Text style={styles.title}> </Text>
        <Emoji symbol="🛏️" label="Bed"/>
        <Text style={styles.title}>Accomodation</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text style={styles.text}>Here you can find the latest offers of accomodation including further details.</Text>
        <Text style={styles.text}>Click on the posts below to find out more.</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        numColumns={2}
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
  },
  //////////
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  modalView: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
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