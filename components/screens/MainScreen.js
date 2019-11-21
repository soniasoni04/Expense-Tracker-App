import React, { Component } from 'react'
import { connect } from "react-redux";
import { View, ScrollView} from 'react-native'
import Heading from '../Heading'
import { CancelButton, DoneButton, FetchAllButton, FetchSelectedButton } from '../Buttons'
import Amount from '../Amount'
import {SelectedDate} from '../SelectedDate'
import Comment from '../Comments'
import CategoryList from '../CategoryList'
import { expenseData, getFullExpenseDetails, getSelectedExpenseDetails } from "../actions/index";
import styles from '../Styles'


class MainScreen extends Component {
    constructor() {
        super()
        this.state = {
            amount: '',
            chosenDate: '',
            comments: '',
            category: ''
        }

        this.getCancel = this.getCancel.bind(this)
        this.getDone = this.getDone.bind(this)
    }


    getCancel = () => {
        this.setState({
            amount: '',
            chosenDate: '',
            comments: '',
            category: ''
        })
    }

    getDone = () => {
        this.props.expenseData(this.state)
        this.getCancel();
    }

    getAmount = (amount) => {
        this.setState({ amount })
    }

    getDateChange = (date) => {
        this.setState({ chosenDate: date })
    }

    getComments = (comments) => {
        this.setState({ comments })
    }

    getChangeCaterogy = (value) => {
        this.setState({
            category : value
          })
    }

    getFetchSelected=()=>{
        setTimeout(()=>{
            this.props.navigation.navigate('SelectedExpenseScreen')
            }, 2000);
    }

    getFetchAll=()=>{
        this.props.getFullExpenseDetails();
        setTimeout(()=>{
            this.props.navigation.navigate('FullExpenseDetailsScreen')
            }, 2000); 
    }

    render() {
        const { amount, chosenDate, comments, category } = this.state

        return (
            <View style={styles.container}>
                <ScrollView
                    keyboardShouldPersistTaps='always'
                    style={styles.content}>
                    <Heading />
                    <Amount
                        inputValue={amount}
                        inputChange={(string) => this.getAmount(string)} />
                    <SelectedDate
                        chosenDate={chosenDate}
                        onDateChange={(date) => this.getDateChange(date)} />

                    <CategoryList category={category} onChangeHandler={(value)=>this.getChangeCaterogy(value)}/>
                    
                    <Comment inputValue={comments} inputChange={(text) => this.getComments(text)} />

                    <DoneButton getDone={this.getDone} />
                    <CancelButton getCancel={this.getCancel} />

                    <FetchSelectedButton fetchSelected={this.getFetchSelected}/>
                    <FetchAllButton fetchAll={this.getFetchAll}/>

                </ScrollView>
            </View>
        )
    }
}


export default connect(null, { expenseData, getFullExpenseDetails, getSelectedExpenseDetails })(MainScreen);
