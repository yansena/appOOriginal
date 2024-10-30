import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import {PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
