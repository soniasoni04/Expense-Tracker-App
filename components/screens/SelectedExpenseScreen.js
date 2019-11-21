import React, { Component } from 'react'
import {View, ScrollView} from 'react-native'
import { connect } from "react-redux";
import { StartDate, EndDate } from '../SelectedDate'
import { SubmitButton, GoBackdButton } from '../Buttons'
import { getSelectedExpenseDetails } from "../actions/index";
import styles from '../Styles'


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

function mapStateToProps(state) {

    console.log("expense details thru expense reducer ", state.default.expense)

    return {
        expense: state.default.expense
    }
}


export default connect(mapStateToProps, { getSelectedExpenseDetails })(SelectedExpenseScreen);