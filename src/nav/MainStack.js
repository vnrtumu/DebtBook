import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/Main/HomeScreen';
import BookScreen from '../screens/Main/BookScreen';
import AddBook from '../screens/Main/AddBook';
import ViewBook from '../screens/Main/ViewBook';
import UpdateBook from '../screens/Main/UpdateBook';
import ProfileScreen from '../screens/Main/ProfileScreen';
import {Image} from 'react-native';
import Colors from '../assets/constants/Colors';

const Stack = createNativeStackNavigator();

function DashboardStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

const BookStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Book" component={BookScreen} />
      <Stack.Screen name="ViewBook" component={ViewBook} />
      <Stack.Screen name="UpdateBook" component={UpdateBook} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/img/tab/plusBlue.png')}
              style={{height: size, width: size, tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Book"
        component={BookStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/img/tab/bookBlue.png')}
              style={{height: size, width: size, tintColor: color}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/img/tab/accBlue.png')}
              style={{height: size, width: size, tintColor: color}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainStack;
