import React, {Component} from 'react';
import firebase from 'firebase';

import Home from './Home';

class App extends Component {
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
      <Home />
    );
  }
}

export default App;
