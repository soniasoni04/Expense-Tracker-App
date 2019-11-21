import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { connect } from "react-redux";
import { GoBackdButton } from '../Buttons'
//import styles from '../Styles'

class FullExpenseDetailsScreen extends Component {

  goBackToMain = () => {
    setTimeout(() => {
      this.props.navigation.navigate('MainScreen')
    }, 1000);
  }


  render() {
    const amountArray = this.props.expense.map(amount => {
      return parseInt(amount.amount)
    })

    return (
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps='always'
          style={styles.content}>
          <Text style={styles.title}> Expense Details List </Text>
          <Text>  {"\n"} </Text>
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

          <Text style={styles.sum}>
            Total expense : {amountArray.reduce((total, item) => {
              return (total + item)
            })}
          </Text>

          <Text></Text>
          <GoBackdButton goBackToMain={this.goBackToMain} />
        </ScrollView>
      </View>
    )
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

function mapStateToProps(state) {
  return {
    expense: state.default.expense
  }
}
export default connect(mapStateToProps)(FullExpenseDetailsScreen);