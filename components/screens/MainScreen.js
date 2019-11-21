import React, { Component } from 'react'
import { connect } from "react-redux";
import { View,Text, ScrollView} from 'react-native'
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
        //console.log("do reset everything!!")
        this.setState({
            amount: '',
            chosenDate: '',
            comments: '',
            category: ''
        })
    }

    getDone = () => {
        //console.log("press done, update the state values")
        //console.log("updated state date: ", this.state)
        this.props.expenseData(this.state)

        this.getCancel();
    }

    getAmount = (amount) => {
        this.setState({ amount })
    }

    onDateChange = (date) => {
        this.setState({ chosenDate: date })
    }

    inputChange = (comments) => {
        this.setState({ comments })
    }

    categoryUpdate = (event) => {
        console.log("event click : ", event.target.value)
        console.log("u are inside category block")
    }

    fetchSelected=()=>{
        //console.log("fetch selected data details ")        
        //console.log("gong to another screen")

        setTimeout(()=>{
            this.props.navigation.navigate('SelectedExpenseScreen')
            }, 2000);
    }

    fetchAll=()=>{
        //console.log("fetch all details ")
        this.props.getFullExpenseDetails();

        //console.log("going to another screen:")

        setTimeout(()=>{
            this.props.navigation.navigate('FullExpenseDetailsScreen')
            }, 2000); 
    }

    // onSelect=(text)=>{
    //     console.log("hello from canada", text)
    //     this.setState({
    //         canada : text
    //     })
    // }

    render() {
        const { amount, chosenDate, comments, category } = this.state
        //console.log("state value: ", this.state)
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
                        onDateChange={(date) => this.onDateChange(date)} />
                    <CategoryList />
                    
                    <Comment inputValue={comments} inputChange={(text) => this.inputChange(text)} />

                    <DoneButton getDone={this.getDone} />
                    <CancelButton getCancel={this.getCancel} />

                    <FetchSelectedButton fetchSelected={this.fetchSelected}/>
                    <FetchAllButton fetchAll={this.fetchAll}/>

                </ScrollView>
            </View>
        )
    }
}


export default connect(null, { expenseData, getFullExpenseDetails, getSelectedExpenseDetails })(MainScreen);
