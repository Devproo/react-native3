// In App.js in a new project

import * as React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/homeScreen'
import DetailsScreen from './screens/detailsScreen'
import About from './screens/about'
import Profile from './screens/profile'


const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
     
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            title: 'My Home',
            headerRight: () => <Button title='Update count' />,
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title='Info'
                color='#fff'
              />
            ),
            headerStyle: {
              backgroundColor: 'skyblue',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        {/* <Tab.Screen name='Messages' component={Messages} /> */}
        <Stack.Screen name='Details' component={DetailsScreen} />
        <Stack.Screen name='About' component={About} />
        <Stack.Screen
          name='Profile'
          component={Profile}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
