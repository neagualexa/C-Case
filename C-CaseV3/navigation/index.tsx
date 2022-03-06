/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import { Image, View, StyleSheet, Text } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/HomeScreen';
import NewsScreen from '../screens/NewsScreen';
import AccomodationScreen from '../screens/AccomodationScreen';
import OrganisationsScreen from '../screens/OrganisationsScreen';
import DonationsScreen from '../screens/DonationsScreen';
import HostScreen from '../screens/HostScreen';
import LogInScreen from '../screens/LoginScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import LogoImage from '../components/LogoImage';
import {userLoggedInAtTheMonent} from '../screens/LoginScreen'

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="About" component={ModalScreen} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Login" component={LogInScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  const ShowloggedUser = () => {
    if(userLoggedInAtTheMonent.username != 'test')
        return(<Text style={{fontSize: 15, fontWeight: 'bold', textDecorationLine: 'underline', padding: 5}}>Logged In as: {userLoggedInAtTheMonent.username}</Text>);  
    else 
        return(<Text style={{fontSize: 15, fontWeight: 'bold', textDecorationLine: 'underline', padding: 5}}>Not logged in</Text>);
  }

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
        
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="star" color={color} />,
          headerLeft: () => (
            <View>
            <Pressable
              onPress={() => navigation.navigate('Home')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
                <LogoImage />
            </Pressable>
            </View>
          ),

          headerRight: () => (
            <View style={{flexDirection:'row'}}>
              {ShowloggedUser()}
            <Pressable
              onPress={() => navigation.navigate('Login')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome5
                name="user"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate('About')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome5
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          </View>
          ),
        })}
      />
      <BottomTab.Screen
        name="Accomodation"
        component={AccomodationScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Accomodation',
          tabBarIcon: ({ color }) => <TabBarIcon name="bed" color={color} />,
          headerLeft: () => (
            <Pressable
            onPress={() => navigation.navigate('Home')}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}>
              <LogoImage />
          </Pressable>
          ),
        })
        }
      />
      <BottomTab.Screen
        name="News"
        component={NewsScreen}  
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'News',
          tabBarIcon: ({ color }) => <TabBarIcon name="newspaper" color={color} />,
          headerLeft: () => (
            <Pressable
            onPress={() => navigation.navigate('Home')}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}>
              <LogoImage />
          </Pressable>
          ),
        })
        }
      />
      <BottomTab.Screen
        name="Organisations"
        component={OrganisationsScreen}  
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Organisations',
          tabBarIcon: ({ color }) => <TabBarIcon name="peace" color={color} />,
          headerLeft: () => (
            <Pressable
            onPress={() => navigation.navigate('Home')}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}>
              <LogoImage />
          </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Donations"
        component={DonationsScreen}  
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Donations',
          tabBarIcon: ({ color }) => <TabBarIcon name="donate" color={color} />,
          headerLeft: () => (
            <Pressable
            onPress={() => navigation.navigate('Home')}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}>
              <LogoImage />
          </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name='Host'
        component={HostScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Host',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.navigate('Home')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
                <LogoImage />
            </Pressable>
          ),

          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Login')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome5
                name="user"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
    </BottomTab.Navigator>
    
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome5>['name'];
  color: string;
}) {
  return <FontAwesome5 size={30} style={{ marginBottom: -3 }} {...props} />;
}
