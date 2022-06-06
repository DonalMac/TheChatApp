import React from 'react';
import { StyleSheet, Text, View, FlatList, LogBox, Button } from 'react-native';

const firebase = require('firebase');
require('firebase/firestore');


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      lists: [],
      userId: 0,
      logText: 'Loggin in...',
    };

    const firebaseConfig = {
      apiKey: "AIzaSyDsVJRvLSKhctnMlbQuY0dhx-XBEXDZL2M",
      authDomain: "thechatapp-869c0.firebaseapp.com",
      projectId: "thechatapp-869c0",
      storageBucket: "thechatapp-869c0.appspot.com",
      messagingSenderId: "307129298445",
      appId: "1:307129298445:web:a85033b573ebff2f55af44",
      measurementId: "G-73FYCKJBZ7"
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  componentDidMount() {
    this.referenceShoppingLists = firebase.firestore().collection('shoppinglists');
    this.unsubscribe = this.referenceShoppingLists.onSnapshot(this.onCollectionUpdate)
  }


  componentWillUnmount() {
    this.unsubscribe();
  }

  onCollectionUpdate = (querySnapshot) => {
    const lists = [];
    // go through each document
    querySnapshot.forEach((doc) => {
      // get the QueryDocumentSnapshot's data
      var data = doc.data();
      lists.push({
        name: data.name,
        items: data.items.toString(),
      });
    });
    this.setState({
      lists,
    });
  };


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Firebase...... {this.state.logText}</Text>
        <FlatList
          data={this.state.lists}
          renderItem={({ item }) => (
            <Text style={styles.item}>
              {item.name}: {item.items}
            </Text>
          )}
        />
        <Button
          title="add Item"
          onPress={() => {
            addList();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  item: {
    fontSize: 20,
    color: 'blue',
  },
  text: {
    fontSize: 30,
  },
});

export default App;