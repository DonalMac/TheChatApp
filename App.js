import React, { Component } from "react";
import "react-native-gesture-handler";
// import react Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import the screens
import Start from "./components/Start";
import Chat from "./components/Chat";

import { ActionSheetProvider } from '@expo/react-native-action-sheet';

// Create the navigator
const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <NavigationContainer>
        <ActionSheetProvider>
          <Stack.Navigator initialRouteName="Start">
            <Stack.Screen name="Start" component={Start} />
            <Stack.Screen name="Chat" component={Chat} />
          </Stack.Navigator>
        </ActionSheetProvider>
      </NavigationContainer>

    );
  }
}