import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, Text } from 'react-native'
import { connect } from "react-redux";
import { StartDate, EndDate } from '../SelectedDate'
import { SubmitButton, GoBackdButton } from '../Buttons'
import { getSelectedExpenseDetails } from "../actions/index";

class SelectedExpenseScreen extends Component {
    constructor() {
        super()
        this.state = {
            startDate: '',
            endDate: ''
        }
    }

    goBackToMain = () => {

        setTimeout(() => {
            this.props.navigation.navigate('MainScreen')
        }, 1000);
    }

    onDateChangeStart = (date) => {
        this.setState({ startDate: date })
    }
    onDateChangeEnd = (date) => {
        this.setState({ endDate: date })
    }

    getSelectedExpense = () => {
        console.log('hihi')
        this.props.getSelectedExpenseDetails(this.state)

        setTimeout(()=>{
            this.props.navigation.navigate('ShowSelectedExpenseDetailsScreen')
            }, 1000); 

        
    }


    render() {
        const { startDate, endDate } = this.state
        const amountArray = this.props.expense.map(amount => {
            return parseInt(amount.amount)
        })


        return (
            <View style={styles.container}>
                <ScrollView
                    keyboardShouldPersistTaps='always'
                    style={styles.content}>

                    <StartDate
                        startDate={startDate}
                        onDateChangeStart={(date) => this.onDateChangeStart(date)} />

                    <EndDate
                        endDate={endDate}
                        onDateChangeEnd={(date) => this.onDateChangeEnd(date)} />

                    <SubmitButton getSelectedExpense={this.getSelectedExpense} />
                    
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
    },
    content: {
        flex: 1,
        paddingTop: 60
    }

})



function mapStateToProps(state) {

    console.log("expense details thru expense reducer ", state.default.expense)

    return {
        expense: state.default.expense
    }
}


export default connect(mapStateToProps, { getSelectedExpenseDetails })(SelectedExpenseScreen);