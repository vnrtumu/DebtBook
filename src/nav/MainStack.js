import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import HomeScreen from '../screens/Main/HomeScreen';
import BookScreen from '../screens/Main/BookScreen';
import AddContact from '../screens/Main/AddContact';
import ViewBook from '../screens/Main/ViewBook';
import UpdateBook from '../screens/Main/UpdateBook';
import ProfileScreen from '../screens/Main/ProfileScreen';

import Colors from '../assets/constants/Colors';
import ViewContact from '../screens/Main/ViewContact';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ViewContact" component={ViewContact} />
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
      <Stack.Screen name="ViewContact" component={ViewContact} />
      <Stack.Screen name="AddContact" component={AddContact} />
      {/* <Stack.Screen name="UpdateBook" component={UpdateBook} /> */}
    </Stack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

const MainStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={Colors.secondBack}
      inactiveColor={Colors.darkText}
      barStyle={{backgroundColor: Colors.appBackground}}
      tabBarOptions={{showLabel: false}}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.secondBack,
        headerShown: false,
        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Book"
        component={BookStack}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="account-plus"
              color={color}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="ios-settings" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// function getHeaderTitle(route) {
//   // If the focused route is not found, we need to assume it's the initial screen
//   // This can happen during if there hasn't been any navigation inside the screen
//   // In our case, it's "Feed" as that's the first screen inside the navigator
//   const routeName = getFocusedRouteNameFromRoute(route);

//   switch (routeName) {
//     case 'Feed':
//       return 'News feed';
//     case 'Profile':
//       return 'My profile';
//     case 'Account':
//       return 'My account';

//     default:
//       return 'flex';
//   }
// }

export default MainStack;
