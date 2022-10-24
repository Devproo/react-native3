import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../screens/homeScreen'
import About from '../screens/about'
import DetailsScreen from '../screens/detailsScreen'

const screens = {
    HomeScreen: {
        screen:HomeScreen
    },
    DetailsScreen: {
        screen: DetailsScreen
    },
    About: {
        screen: About
    }
}
const HomeStack = createNativeStackNavigator(screens)
export default createAppContainer(HomeStack)