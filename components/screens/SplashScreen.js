import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
 
export default class SplashScreen extends Component {

  componentDidMount(){
    setTimeout(()=>{
      this.props.navigation.navigate('MainScreen')
    }, 2000);
  }

  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Expense Tracker</Text>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#6a5acd',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  title: {
    position: 'absolute',
    fontFamily: 'Arial',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 48,
    lineHeight: 45,
    alignSelf: 'center',
    letterSpacing: -0.02,
    color: '#FFFFFF'
  }
})