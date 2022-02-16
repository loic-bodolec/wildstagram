import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CameraScreen from './screens/CameraScreen';
import FeedScreen from './screens/FeedScreen';
import ImagesScreen from './screens/ImagesScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Camera" component={CameraScreen} options={{ unmountOnBlur: true }} />
        <Tab.Screen name="Images" component={ImagesScreen} />
        <Tab.Screen name="Feed" component={FeedScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
