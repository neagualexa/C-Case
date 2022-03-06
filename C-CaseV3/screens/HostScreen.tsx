import { StyleSheet } from 'react-native';
import Emoji from '../components/Emoji';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
// import TextInput from 'react-native-paper';
import React from "react";
import { SafeAreaView, TextInput } from "react-native"
import { Image, TouchableOpacity} from 'react-native';;
import { Button, Paragraph, Dialog, Portal, Provider,DefaultTheme } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
// import Form from 'react-native-form'

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={60}
    />
  );
}

export default function HostScreen() {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const [name, onChangeName] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [address, onChangeAddr] = React.useState('');

  return (
      <View style={styles.container}>
        <Text style={styles.title}> </Text>
        <Emoji symbol="🏠" label="House"/>
        <Text style={styles.title}>Become a Host</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text style={styles.text}>Want to Host?</Text>
        <View style={{ flexDirection:"row" }}>
          <FontAwesome name="check-circle" size={20} color="#3498db" />
          <Text style={styles.caption}> Provide a safe space for any time from a several days to a few weeks. </Text>
        </View>
        <View style={{ flexDirection:"row" }}>
          <FontAwesome name="check-circle" size={20} color="#3498db" />
          <Text style={styles.caption}> Provide local connections to refugees. </Text>
        </View>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={{ flexDirection:"row" }}>
          <Text style={styles.caption}>Full Name: </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Full Name"
              maxLength={20}
              value={name}
              onChangeText={onChangeName}
            />
        </View>
        <View style={{ flexDirection:"row" }}>
          <Text style={styles.caption}>  Email: </Text>
          <TextInput
              style={styles.textInput}
              placeholder="Email"
              maxLength={20}
              value={email}
              onChangeText={onChangeEmail}
          />
        </View>
        <View style={{ flexDirection:"row" }}>
          <Text style={styles.caption}>  Address: </Text>
          <UselessTextInput
            multiline
            numberOfLines={3}
            placeholder="Address"
            onChangeText={text => onChangeAddr(text)}
            value={address}
            style={styles.textInput}
          />
        </View>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Provider>
          <View>
            <Button onPress={showDialog}> Submit </Button>
            <Portal>
              <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Content>
                  <Paragraph>Thank you, you will receive a confirmation in your email</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button onPress={hideDialog}>Done</Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
          </View>
        </Provider>
{/*        
        <TouchableOpacity onPress={() => navigation.navigate('Accomodation')} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity> */}
      </View>
  );
}

// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

// const HostScreen = () => {
//   const [text, onChangeText] = React.useState("Useless Text");
//   const [number, onChangeNumber] = React.useState(null);



//     return (
//       <SafeAreaView>
//         <Emoji symbol="🏠" label="House"/>
//         <Text style={styles.title}>Become a Host</Text>
//         <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
//           <TextInput
//             style={styles.input}
//             onChangeText={onChangeText}
//             value={text}
//           />
//       </SafeAreaView>

//     );
// };



// const InputTextBox = () => {
//   const [text, setText] = React.useState("");
//   return (
//     <TextInput
//       label="Email"
//       value={text}
//       onChangeText={text => setText(text)}
//     />
//   );
// };



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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    padding: 5,
  },
  textInput: {
    fontSize: 15,
    padding: 2,
  },
  caption: {
    fontSize: 15,
    padding: 4,
  },
  button: {
    backgroundColor: "white",
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