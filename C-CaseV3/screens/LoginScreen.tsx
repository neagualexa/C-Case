import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Modal
} from 'react-native';
import { Button, DefaultTheme } from 'react-native-paper';

export var userLoggedInAtTheMonent = {  username: 'test', 
                                        password: '',
                                        details: '',
                                        location: '' ,
                                    };

export default function LogInScreen() {
    return (
        <LoginView/>
      );
}


  const LoginView = () => {
    var Users = [
        { username:'A',
          password:'a',
          details: 'aaaaaaaaaaa',
          location: 'aaaa city' ,
          },
        { username:'B',
          password:'b',
          details: 'bbbb',
          location: 'bbbbb city' ,
      },
      ]
      
      var foundUser = false;
      var wrongUser = false;
      var loggedInState = 0;
      var whichUser = -1;

    const [modalVisible, setModalVisible] = React.useState(false);

    const [username, onChangeName] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [details, onChangeEmail] = React.useState("");
    const [location, onChangeAddr] = React.useState('');

    
      const loginUser = () =>  {
          console.log(username);
        Users.forEach(user => {
          if(foundUser == false){
            console.log(user);
            if(username == user.username && password == user.password){
              foundUser = true;
              whichUser = Users.indexOf(user);
              console.log("User "+whichUser);
            }else 
              wrongUser = true;
          }
        });
        if(foundUser == true && loggedInState == 0){
    
          foundUser=false;
          wrongUser = false;
          loggedInState = 1;
          userLoggedInAtTheMonent = Users[whichUser];
    
        }else if(loggedInState == 1){
            console.log("You are already logged in");
        }else if(wrongUser == true){
            console.log("Password or Username incorect");
            wrongUser = false;
        }
      }
    
      const signUpUser = () => {
            Users.push(
                {
                    username: username,
                    password: password,
                    details: details,
                    location: location,
                }
            );
            userLoggedInAtTheMonent={
                username: username,
                password: password,
                details: details,
                location: location,
            }
            loggedInState = 1;
            
      }
    
      const logoutUser = () => {
          loggedInState = 0;
          Alert.alert("You've logged out");
          userLoggedInAtTheMonent={
            username: 'test',
            password: '',
            details:  '',
            location: '',
        }
      }

      return(
          <View style={styles.container}>


                  <View style={styles.content}>
                      <Text style={styles.welcome}>Log in here</Text>
                      <Text style={styles.instructions}>or continue as a guest</Text>

                      <View style={[styles.inputContainer,{paddingBottom:30}]}>
                        <TextInput underlineColorAndroid='transparent' style={styles.input}
                                     onChangeText={onChangeName}
                                     value={username}
                                     placeholder='username' />

                        <TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={styles.input}
                                     onChangeText={onChangePassword} 
                                     value={password} placeholder='password'/>
                        </View>
                  </View>

                   <View style={{flexDirection:'row',alignContent:'space-between',paddingBottom:10}}>
                    {/* <Text>DEBUG: {username}, {password} >> {loggedInState} </Text>  */}
                        <Button theme={theme}
                            onPress={() => {loginUser(); }}>Log in</Button>
                        <Text>  </Text>

                        <View>
                            <Button theme={theme} style={{paddingBottom: 5}} onPress={() => {setModalVisible(true)}}>Sign up</Button>
                        </View>

                        <Text>  </Text>

                        <Button theme={theme} style={{paddingBottom: 5}}
                            onPress={() => {logoutUser(); }} >Log out</Button>
                    </View>
                      {/* <Text style={[styles.instructions]}>Existent users:</Text>
                            {Users.map((u, i) => {
                                           return(<Text key={i}>{u.username}</Text>);
                                        })} */}


                    {/* SIGN UP */}
                    <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        console.log("Details pop up screen has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.inputContainer}>
                                <TextInput underlineColorAndroid='transparent' style={styles.input}
                                    onChangeText={onChangeName}
                                    value={username}
                                    placeholder='username' />

                                <TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={styles.input}
                                    onChangeText={onChangePassword}
                                    value={password} placeholder='password'/>
                                
                                <TextInput underlineColorAndroid='transparent' style={styles.input}
                                    onChangeText={onChangeEmail}
                                    value={details} placeholder='email address (optional)'/>
                                
                                <TextInput underlineColorAndroid='transparent' style={styles.input}
                                    onChangeText={onChangeAddr}
                                    value={location} placeholder='house address (optional)'/>

                                <Text> </Text>
                                 {/* <Text> {username}, {password}, {details}, {location} </Text> //DEBUG */}

                                <Button theme={theme} style={[styles.button,{marginBottom:10}]} onPress={()=>{
                                        if(loggedInState == 1){
                                            Alert.alert("You are already logged in with user "+ Users[whichUser].username.toString());
                                        }else if(username == undefined || password == undefined){
                                                Alert.alert("Not all gaps are completed");
                                        }else{
                                            signUpUser();
                                            setModalVisible(!modalVisible);
                                        }
                                        //this.emptyStateText();
                                    }}>Create Account</Button>

                                <Button style={styles.button} theme={theme} onPress={()=>{ setModalVisible(!modalVisible);}}>Back</Button>
                            </View>
                        </View>
                    </Modal>
              
          </View>
      )
  }



const styles=StyleSheet.create({
  container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#FFFFFF',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  backgroundImage:{
      flex:1,
      alignSelf:'stretch',
    //   width:null,
      justifyContent:'center',
  },
  welcome:{
      fontSize:20,
      fontWeight: 'bold',
      textAlign:'center',
      margin:10,
  },
  guest:{
    textDecorationLine: "underline",
    color: "3498db",
  },
  instructions:{
      textAlign:'center',
      color:'#333333',
      marginBottom:5,
  },
  content:{
      alignItems:'center',
      borderColor: '#3498db',
      borderWidth: 2,
      borderRadius: 9,
      padding: 5,
  },
  logo:{
      color:'white',
      fontSize:40,
      fontStyle:'italic',
      fontWeight:'bold',
      textShadowColor:'#252525',
      textShadowOffset:{width:1,height:1},
      textShadowRadius:5,
      marginBottom:20,
      minHeight: 90,
  },
  inputContainer:{
      margin:20,
      marginBottom:0,
      padding:20,
      paddingBottom:10,
      alignSelf:'stretch',
      borderWidth:1,
      borderColor:'#fff',
      backgroundColor:'rgba(255,255,255,0.8)',
  },
  input:{
      fontSize:16,
      height:40,
      padding:10,
      marginBottom:10,
      backgroundColor:'rgba(255,255,255,1)',
  },
  button: {
    borderRadius: 20,
    backgroundColor: "white",
    padding: 10,
    elevation: 2,
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