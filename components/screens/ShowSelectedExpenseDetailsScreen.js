import React, { Component } from 'react'
import { View, Text, StyleSheet,ScrollView } from 'react-native'
import { connect } from "react-redux";
import { GoBackdButton } from '../Buttons'

class ShowSelectedExpenseDetailsScreen extends Component {

  goBackToMain = () => {
    setTimeout(() => {
      this.props.navigation.navigate('MainScreen')
    }, 1000);
  }


  render() {
    console.log("expense : ", this.props.expense)

    const amountArray = this.props.expense.map(expense => {
      return parseInt(expense.amount)
    })

    console.log("amount array: ", amountArray)

    return (

      <View style={styles.container}>
          <Text style={styles.title}> Expense Details </Text>
          <Text> {"\n"} </Text>
          <Text style={styles.containerText}>
            {this.props.expense.map((expense, index) => {
              return <Text key={index} style={styles.textBold}>
                Category : <Text style={styles.text}> {expense.category} {"\n"}</Text>
                Date : <Text style={styles.text}> {expense.chosenDate} {"\n"}</Text>
                Amount : <Text style={styles.text}> {expense.amount} {"\n"}</Text>
                {"\n"}
              </Text>
            })}
          </Text>

          <GoBackdButton goBackToMain={this.goBackToMain} />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    expense: state.default.expense
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginTop: 50,
  },
  content: {
    flex: 1,
    paddingTop: 60
  },
  title: {
    textAlign: 'center',
    fontSize: 35,
    color: 'rgba(175, 47, 47, 1)',
    fontWeight: '700',
  },
  containerText: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginTop: 10,
    marginLeft: 20
  },
  textBold: {
    textAlign: 'left',
    fontSize: 20,
    color: 'black',
    fontWeight: '700',
    marginLeft: 25,
    paddingLeft: 10
  },
  text: {
    textAlign: 'left',
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




export default connect(mapStateToProps)(ShowSelectedExpenseDetailsScreen);