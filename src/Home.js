import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ListView} from 'react-native';
import firebase from 'firebase';
import _ from 'lodash';

const ListItem = ( employee ) => {
  console.log(employee);
  const myEmployee = employee.employee;
  return (
    <View style={{backgroundColor: 'yellow'}}>
      <Text>{myEmployee.name}</Text>
    </View>
  )
}

export default class Home extends Component {
  state = {
    employees: [],
    dataSource: new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
  }

  componentWillMount() {

    firebase.database().ref('employees')
    .on('value', snapshot => {
      const emp = _.map(snapshot.val(), (val, uid) => {
        return { ...val, uid };
      })
      this.setState({ 
        employees: emp,
        dataSource: this.state.dataSource.cloneWithRows(emp)
      });
    });

  }

  renderRow = (employee) => {
    return <ListItem employee={employee}/>;
  }

  render() {
    console.log(this.state.employees);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Redux</Text>
        <ListView
          enableEmptySections
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
