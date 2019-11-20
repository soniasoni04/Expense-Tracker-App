import React, { Component } from 'react'
import { connect } from "react-redux";
import { View, ScrollView, StyleSheet } from 'react-native'
import Heading from '../Heading'
import { CancelButton, DoneButton, FetchAllButton, FetchSelectedButton } from '../Buttons'
import Amount from '../Amount'
import SelectedDate from '../SelectedDate'
import Comment from '../Comments'
import CategoryList from '../CategoryList'
import { expenseData, getFullExpenseDetails } from "../actions/index";

class MainScreen extends Component {
    constructor() {
        super()
        this.state = {
            amount: '',
            chosenDate: null,
            comments: '',
            category: '',
            type: '',
        }

        this.getCancel = this.getCancel.bind(this)
        this.getDone = this.getDone.bind(this)
    }

    getCancel = () => {
        console.log("do reset everything!!")
        this.setState({
            amount: '',
            chosenDate: null,
            comments: '',
            category: '',
            type: '',
        })
    }

    getDone = () => {
        console.log("press done, update the state values")
        console.log("updated state date: ", this.state)
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
        console.log("fetch selected data details ")
    }

    fetchAll=()=>{
        console.log("fetch all details ")
        this.props.getFullExpenseDetails();

        console.log("going to another screen:")

        setTimeout(()=>{
            this.props.navigation.navigate('FullExpenseDetailsScreen')
            }, 2000); 
    }

    render() {
        const { amount, chosenDate, comments, category, type } = this.state
        console.log("state value: ", this.state)
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    content: {
        flex: 1,
        paddingTop: 60
    }
})

function mapStateToProps(state) {

    //console.log("state value from mapStateToProps from mainscreen: ", state)

    return { message: 'hello' }
}


export default connect(mapStateToProps, { expenseData, getFullExpenseDetails })(MainScreen);
