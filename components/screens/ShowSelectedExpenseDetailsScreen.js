import React, { Component } from 'react'
import {View, Text } from 'react-native'
import { connect } from "react-redux";
import {GoBackdButton } from '../Buttons'
import styles from '../Styles'
 
class ShowSelectedExpenseDetailsScreen extends Component {

    goBackToMain=()=>{

        setTimeout(()=>{
            this.props.navigation.navigate('MainScreen')
            }, 1000);
    }

  render() {
      const amountArray = this.props.expense.map(amount => {
          return parseInt(amount.amount)
      })
      
      //console.log("amount array : ", amountArray)
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Expense Details </Text>
        <Text style={styles.title}> ---------------------    </Text>
        <Text>      </Text>
        <Text style={styles.text}> Date {"            "} Amount{"\n"} </Text>
        <Text>
        
        {this.props.expense.map((expense, index) => {
            return <Text key={index} style={styles.text}> 
                        {expense.chosenDate} {"   "}
                        {expense.amount}  {"\n"} 
                    </Text> })}
        </Text> 
        <Text style={styles.sum}> 
            Total expense : {amountArray.reduce((total, item) => {
                return (total + item)
            })}
        </Text>
        <Text></Text>  
        <GoBackdButton goBackToMain={this.goBackToMain} />
      </View>
    )
  }
}

function mapStateToProps (state) {
    //console.log("expense details thru expense reducer ", state.default.expense)
    return {
        expense : state.default.expense
     }
  }
  
  
export default connect(mapStateToProps)(ShowSelectedExpenseDetailsScreen);