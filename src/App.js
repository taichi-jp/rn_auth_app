import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';
import firebase from 'firebase';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDNiTJC56f2PQ8CBfAQKLqTXRsNYfAbwbI',
      authDomain: 'rn-auth-2af34.firebaseapp.com',
      databaseURL: 'https://rn-auth-2af34.firebaseio.com',
      projectId: 'rn-auth-2af34',
      storageBucket: 'rn-auth-2af34.appspot.com',
      messagingSenderId: '803092148817'
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
