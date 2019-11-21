import React, { Component } from 'react';
import { View, Text, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import t from 'tcomb-form-native';
import Person, { formOptions } from '../Person';
import styles from '../SignUp.styles';
import { login } from "../actions/index";
import { users } from "../actions/index";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = { User: null };
  }

  componentDidMount() {
    // focus on the "email" field
    this.refs.form.getComponent('email').refs.input.focus();
  }

  clearForm() {
    this.setState({ User: null });
  }

  onChange(User) {
    this.setState({ User });
  }

  onSubmit() {
    const { form } = this.refs;
    const User = form.getValue();

    if (!User) return;

    // console.log("User with state", this.state);
    // console.log("only User with email : ", this.state.User.email);
    // console.log("only User with psaaword: ", this.state.User.password);

    this.props.login(this.state.User);
    this.clearForm();

    setTimeout(() => {
      this.props.navigation.navigate('SplashScreen')
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
            <Text style={styles.title}>Login</Text>

            <Form
              ref="form"
              type={Person}
              options={formOptions}
              value={this.state.User}
              onChange={this.onChange} />

            <TouchableHighlight
              style={styles.button}
              onPress={this.onSubmit}
              underlayColor='#99d9f4' >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableHighlight>

          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default connect(null, { login, users })(Login);