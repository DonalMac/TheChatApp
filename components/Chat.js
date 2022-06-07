import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import {
  GiftedChat,
  Bubble,
  Time,
  SystemMessage,
  Day,
  InputToolbar,
} from 'react-native-gifted-chat';
import NetInfo from '@react-native-community/netinfo';

const firebase = require('firebase');
require('firebase/firestore');
require('firebase/auth');

const firebaseConfig = {
  apiKey: "AIzaSyDsVJRvLSKhctnMlbQuY0dhx-XBEXDZL2M",
  authDomain: "thechatapp-869c0.firebaseapp.com",
  projectId: "thechatapp-869c0",
  storageBucket: "thechatapp-869c0.appspot.com",
  messagingSenderId: "307129298445",
  appId: "1:307129298445:web:a85033b573ebff2f55af44",
  measurementId: "G-73FYCKJBZ7"
};

class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      user: '',
      userId: 0,
      isConnected: undefined,
    };
  }

  async getmessages() {
    let messages = '';
    try {
      messages = (await AsyncStorage.getItem('messages')) || [];
      this.setState({
        messages: JSON.parse(messages),
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  async saveMessages() {
    try {
      await AsyncStorage.setItem(
        'messages',
        JSON.stringify(this.state.messages)
      );
    } catch (error) {
      console.log(error.message);
    }
  }
  async deleteMessages() {
    try {
      await AsyncStorage.removeItem('messages');
      this.setState({
        messages: [],
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  componentDidMount() {
    NetInfo.fetch().then((connection) => {
      if (connection.isConnected) {
        if (!firebase.apps.length) {
          firebase.initializeApp(firebaseConfig);
        }
        this.refChatMsg = firebase.firestore().collection('messages');
        console.log('online');

        this.authUnsubscribe = firebase
          .auth()
          .onAuthStateChanged(async (user) => {
            if (!user) {
              await firebase.auth().signInAnonymously();
            }
            this.setState({
              user: user.uid,
              messages: [],
            });

            this.unsubscribeMsg = this.refChatMsg
              .orderBy('createdAt', 'desc')
              .onSnapshot(this.onCollectionUpdate);
          });

        this.setState({
          isConnected: true,
        });
      } else {
        console.log('offline');
        this.getmessages();
        this.setState({
          isConnected: false,
        });
      }
    });

    let name = this.props.route.params.name;
    this.props.navigation.setOptions({
      title: name,
      headerStyle: this.props.bgcolor,
    });
  }

  onCollectionUpdate = (querySnapshot) => {
    const messages = [];

    querySnapshot.forEach((doc) => {
      let data = doc.data();
      messages.push({
        _id: doc.id,
        text: data.text,
        createdAt: data.createdAt.toDate(),
        user: data.user,
      });
    });
    this.setState({ messages });
    this.saveMessages();
  };

  componentWillUnmount() {
    if (this.state.isConnected) {
      this.authUnsubscribe();
      this.unsubscribeMsg();
    }
  }

  onSend(messages = []) {
    this.addmessage(messages[0]);
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }
  addmessage = (message) => {
    message.id = message._id;
    this.refChatMsg.add(message);
  };

  renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        textStyle={{
          right: {
            color: 'black',
          },
        }}
        wrapperStyle={{
          right: {
            backgroundColor: '#bccad6',
            color: 'red',
          },
          left: {
            backgroundColor: '#f1e3dd',
          },
        }}
      />
    );
  };

  renderTime = (props) => {
    return (
      <Time
        {...props}
        timeTextStyle={{
          right: {
            color: '#667292',
          },
          left: {
            color: '#667292',
          },
        }}
      />
    );
  };

  renderSystemMessage = (props) => {
    return <SystemMessage {...props} textStyle={{ color: '#667292' }} />;
  };

  renderDay = (props) => {
    return <Day {...props} textStyle={{ color: '#667292' }} />;
  };

  renderInputToolbar = (props) => {
    if (this.state.isConnected === false) {
    } else {
      return <InputToolbar {...props} />;
    }
  };

  render() {
    let bgcolor = this.props.route.params.bgcolor;
    return (
      <View style={[styles.container, bgcolor]}>
        <GiftedChat
          renderInputToolbar={this.renderInputToolbar}
          renderUsernameOnMessage={true}
          renderDay={this.renderDay}
          renderSystemMessage={this.renderSystemMessage}
          renderBubble={this.renderBubble}
          renderTime={this.renderTime}
          messages={this.state.messages}
          onSend={(messages) => this.onSend(messages)}
          user={{ _id: this.state.userId, name: this.props.route.params.name }}
        />
        {Platform.OS === 'android' ? (
          <KeyboardAvoidingView behavior="height" />
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Chat;