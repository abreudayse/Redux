import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase';


export default class Home extends Component {
  state = {
    employees: []
  }

  componentWillMount() {

    firebase.database().ref('employees')
    .on('value', snapshot => {
      this.setState({ employees: snapshot.val() });
    });

  }

  render() {
    console.log(this.state.employees);
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
