import React from 'react';
import {AuthProvider} from './src/nav/AuthProvider';
import Routes from './src/nav/Routes';

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
