import { StyleSheet } from 'react-native';
import Emoji from '../components/Emoji';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
// import TextInput from 'react-native-paper';
import React from "react";
import { SafeAreaView, TextInput } from "react-native";
// import Form from 'react-native-form'

export default function HostScreen() {
  return (
      <View style={styles.container}>
        <Emoji symbol="🏠" label="House"/>
        <Text style={styles.title}>Become a Host</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={{ flexDirection:"row" }}>
          <Text style={styles.caption}>First Name: </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Joe"
              maxLength={20}
            />
            <Text style={styles.caption}>Surname: </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Bloggs"
              maxLength={20}
            />
        </View>
        <View style={{ flexDirection:"row" }}>
          <Text style={styles.caption}>Email: </Text>
          <TextInput
              style={styles.textInput}
              placeholder="Email"
              maxLength={20}
          />
        </View>
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
    fontSize: 13,
    fontWeight: 'bold',
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
});
