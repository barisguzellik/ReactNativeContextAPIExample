import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './Pages/Main';
import Second from './Pages/Second';
import MyProvider from './MyProvider';
import MyContext from './MyContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <MyProvider>

      <NavigationContainer>
        <MyContext.Consumer>
          {
            context => {
              return (
                <Stack.Navigator>
                  <Stack.Screen options={{ title: context.count }} name="Main" component={Main} />
                  <Stack.Screen name="Second" component={Second} />
                </Stack.Navigator>
              )
            }
          }
        </MyContext.Consumer>
      </NavigationContainer>

    </MyProvider>
  )
}