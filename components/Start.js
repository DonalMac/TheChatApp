import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { useState, useEffect } from 'react';

export default function Screen1({ navigation }) {
  const [name, setUserName] = useState('');
  const [bgcolor, setBackGroundColor] = useState('');
  const [active, setActive] = useState('');

  useEffect(() => {
    navigation.setOptions({
      title: 'Start',
      headerStyle: bgcolor,
    });
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/A5_project_assets/BackgroundImage.png')}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.loginCard}>
          <Text style={styles.my1}>Login</Text>
          <TextInput
            style={[styles.my1, styles.loginInput]}
            placeholder="Enter Username"
            onChangeText={(e) => setUserName(e)}
          />
          <Button
            title="Go to Chat"
            color={'#87bdd8'}
            onPress={() => {
              navigation.navigate('Chat', { name: name, bgcolor: bgcolor });
            }}
            value={name}
            style={[styles.my1, styles.color3]}
          />
          <Text style={styles.colorText}>Choose a Background Color</Text>
          <View style={[styles.circleContainer, styles.my1]}>
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="Color 1"
              accessibilityHint="Lets you choose a Background Color"
              accessibilityRole="button"
              onPress={() => {
                setBackGroundColor(styles.color1);
                setActive('color1');
              }}
              style={[
                styles.circle,
                styles.color1,
                active === 'color1' ? styles.active : styles.inActive,
              ]}
            ></TouchableOpacity>
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="Color 2"
              accessibilityHint="Lets you choose a Background Color"
              accessibilityRole="button"
              onPress={() => {
                setBackGroundColor(styles.color2);
                setActive('color2');
              }}
              style={[
                styles.circle,
                styles.color2,
                active === 'color2' ? styles.active : styles.inActive,
              ]}
            ></TouchableOpacity>
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="Color 3"
              accessibilityHint="Lets you choose a Background Color"
              accessibilityRole="button"
              onPress={() => {
                setBackGroundColor(styles.color3);
                setActive('color3');
              }}
              style={[
                styles.circle,
                styles.color3,
                active === 'color3' ? styles.active : styles.inActive,
              ]}
            ></TouchableOpacity>
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="Color 4"
              accessibilityHint="Lets you choose a Background Color"
              accessibilityRole="button"
              onPress={() => {
                setBackGroundColor(styles.color4);
                setActive('color4');
              }}
              style={[
                styles.circle,
                styles.color4,
                active === 'color4' ? styles.active : styles.inActive,
              ]}
            ></TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginCard: {
    backgroundColor: 'white',
    width: '70%',
    padding: 15,
    borderRadius: 13,
  },
  circleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  circle: {
    backgroundColor: 'gray',
    height: 40,
    width: 40,
    borderRadius: 20,
    margin: 5,
    borderColor: '#667292',
    borderWidth: 4,
  },
  colorText: {
    textAlign: 'center',
    marginTop: 10,
  },
  my1: {
    marginTop: 10,
    marginBottom: 10,
  },
  loginInput: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  color1: {
    backgroundColor: '#cfe0e8',
  },
  color2: {
    backgroundColor: '#b7d7e8',
  },
  color3: {
    backgroundColor: '#87bdd8',
  },
  color4: {
    backgroundColor: '#daebe8',
  },
  active: {
    borderColor: '#667292',
    borderWidth: 6,
  },
  inActive: {
    borderColor: '#8d9db6',
  },
});