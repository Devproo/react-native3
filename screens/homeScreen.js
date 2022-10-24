import * as React from 'react'
import { useState } from 'react'
import { Button, View, Text, FlatList, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'



// function HomeTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name='Feed' component={FeedScreen} />
//       <Tab.Screen name='Profile' component={ProfileScreen} />
//       <Tab.Screen name='Account' component={AccountScreen} />
//     </Tab.Navigator>
//   )
// }
export default function HomeScreen({ navigation}) {
  const [count, setCount] = React.useState(0)
  

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)} title='Update count' />
      ),
    })
  }, [navigation])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
 
        <Text>Home Screen</Text>
   
      <Text>Count: {count}</Text>
      <Button
        title='Go to Details'
        onPress={() => {
          navigation.navigate('Details', {
            name: 'Adam Mohamed',
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }}
      />
      <Button
        title='Go to About'
        onPress={() => {
          navigation.navigate('About', {
            screen: 'Messages',
            // screen: 'Settings',
            // params: {
            //   screen: 'Sound',
            //   params: {
            //     screen: 'Media',
            //   },
            // },
          })
        }}
      />
      <Button
        title='Go to Profile'
        onPress={() => {
          name: 'Adam'
          navigation.navigate('Profile', { name: 'Adam Profile' })
        }}
      />
    </View>
  )
}
