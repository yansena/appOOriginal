import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScrreen from '../screens/HomeScreen';
import CreateQrCode from '../screens/CreateQrCode';
import VisualizationQrCode from '../screens/VisualizationQrCode';

const Routes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerTitleStyle: {fontWeight: 'bold'},
      }}
      initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScrreen}
        options={{title: 'Home', headerShown: false}}
      />
      <Stack.Screen
        name="CreateQrCode"
        component={CreateQrCode}
        options={{title: 'Create QR Code', headerShown: false}}
      />
      <Stack.Screen
        name="VisualizationQrCode"
        component={VisualizationQrCode}
        options={{title: 'Visualization QR Code', headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routes;
