import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase';


export default class App extends Component {
  componentWillMount() {
    let config = {
        apiKey: "AIzaSyAoG_xN1WtSQ8Dam9Fw-0_ZFZqr7P34bT4",
        authDomain: "reduxpersist.firebaseapp.com",
        databaseURL: "https://reduxpersist.firebaseio.com",
        projectId: "reduxpersist",
        storageBucket: "reduxpersist.appspot.com",
        messagingSenderId: "465583414493"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Redux</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
