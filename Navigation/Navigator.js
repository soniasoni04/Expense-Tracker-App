import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import SignupScreen from '../components/screens/SignUp'
import LoginScreen from '../components/screens/Login'
import SplashScreen from '../components/screens/SplashScreen'
import MainScreen from '../components/screens/MainScreen'
import FullExpenseDetailsScreen from '../components/screens/FullExpenseDetailsScreen'
import SelectedExpenseScreen from '../components/screens/SelectedExpenseScreen'
import ShowSelectedExpenseDetailsScreen from '../components/screens/ShowSelectedExpenseDetailsScreen'

const RootStack = createStackNavigator({
  SignupScreen: { screen: SignupScreen },
  LoginScreen: { screen: LoginScreen },
  SplashScreen: { screen: SplashScreen },
  MainScreen: { screen: MainScreen },
  FullExpenseDetailsScreen: { screen: FullExpenseDetailsScreen },
  SelectedExpenseScreen: { screen: SelectedExpenseScreen },
  ShowSelectedExpenseDetailsScreen: { screen: ShowSelectedExpenseDetailsScreen }

}, {
  initialRouteName: 'SignupScreen',
  headerMode: 'none'
})

const Navigator = createAppContainer(RootStack)

export default Navigator
