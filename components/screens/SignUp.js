import React, { Component } from 'react';
import { View, Text, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import t from 'tcomb-form-native';
import Person, { formOptions } from '../Person';
import styles from '../SignUp.styles';
import { signUp } from "../actions/index";
import {users} from "../actions/index";
import { connect } from "react-redux";


 class SignUp extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = { newUser: null };
  }

  componentDidMount() {
    // focus on the "name" field
    this.refs.form.getComponent('email').refs.input.focus();
    this.props.users();
  }

  clearForm() {
    this.setState({ newUser: null });
  }

  onChange(newUser) {
    this.setState({ newUser });
    //console.log("user details : ", this.state)

  }

  onSubmit() {
    const { form } = this.refs;
    const newUser = form.getValue();
    if (!newUser) return;
    console.log("newUser with state", this.state);
    console.log("only newUser with email : ", this.state.newUser.email);
    console.log("only newUser with psaaword: ", this.state.newUser.password);

    this.props.signUp(this.state.newUser);
    this.clearForm();
    
    setTimeout(()=>{
      this.props.navigation.navigate('LoginScreen')
      }, 2000);
      
  }


  render() {
    const Form = t.form.Form;
    return (
      <View style={styles.outerContainer}>
        <KeyboardAvoidingView
            behavior="padding"
            style={styles.container}> 
            <View style={styles.container}>
              <Text style={styles.title}>Sign up</Text>
              
              <Form
                ref="form"
                type={Person}
                options={formOptions} 
                value={this.state.newUser}
                onChange={this.onChange} />
            
              <TouchableHighlight
              style={styles.button}
              onPress={this.onSubmit}
              underlayColor='#99d9f4' >
                <Text style={styles.buttonText}>Sign up</Text>
              </TouchableHighlight>

          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

function mapStateToProps (state) {

  console.log("state value from mapStateToProps : ", state)
  

  return { message: 'hello' }
}


export default connect(mapStateToProps, { signUp,users })(SignUp);