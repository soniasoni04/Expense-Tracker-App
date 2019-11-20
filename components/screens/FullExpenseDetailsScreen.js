import React, { Component } from 'react'
import {StyleSheet, View, Text } from 'react-native'
import { connect } from "react-redux";
 
class FullExpenseDetailsScreen extends Component {

  componentDidMount(){
    console.log("hello")
  }

  
  render() {
      const amountArray = this.props.expense.map(amount => {
          return parseInt(amount.amount)
      })

      console.log("amount array : ", amountArray)
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Expense Details List </Text>
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
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        marginTop: 80
    },
    title: {
        textAlign: 'center',
        fontSize: 35,
        color: 'rgba(175, 47, 47, 1)',
        fontWeight: '700',
      },
    
      text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
    marginLeft: 25,
    
    },
    sum: {
        textAlign: 'center',
        fontSize: 30,
        color: 'black',
        fontWeight: '700',
        marginLeft: 20
        }

})


function mapStateToProps (state) {

    console.log("expense details thru expense reducer ", state.default.expense)
  
    return {
        expense : state.default.expense
     }
  }
  
  
  export default connect(mapStateToProps)(FullExpenseDetailsScreen);