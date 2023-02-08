import React, {useState, useContext, useEffect} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import Colors from '../assets/constants/Colors';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import {AuthContext} from './AuthProvider';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
  },
};
const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  return (
    <NavigationContainer theme={theme}>
      {user ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
