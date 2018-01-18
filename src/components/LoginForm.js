import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
  state = { email: '', password: '', error: '' };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({error: ''});

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        this.setState({error: 'Create User'});
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(() => {
          // emailがすでに登録されている(passwordが間違っている) or emailの形式が不正
          // emailはFirebaseでバリデーションされる
          this.setState({error: 'Authentication Failed.'});
        });
      });
  }

  render() {
    return(
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="example@gmail.com"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm;
