import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";

export default class Start extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", backgroundColor: "white" };
  }

  changeBackgroundColor = (newColor) => {
    this.setState({ backgroundColor: newColor });
  };

  render() {
    const backgroundImage = require("../assets/A5_project_assets/BackgroundImage.png");
    const userIcon = require("../assets/A5_project_assets/icon.svg");

    //background color choices
    const colors = {
      color1: "#090C08",
      color2: "#474056",
      color3: "#8A95A5",
      color4: "#B9C6AE",
    };

    return (
      <View style={styles.container}>
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
          <View style={styles.titleBox}>
            <Text style={styles.title}>ChatMe</Text>
          </View>
          <View style={styles.startBox}>
            <View style={styles.textBox}>
              <Image source={userIcon} style={styles.userIcon} />
              <TextInput
                style={styles.input}
                onChangeText={(username) => this.setState({ username })}
                value={this.state.username}
                placeholder="Type your Name here:"
              />
            </View>
            <View style={styles.themeBox}>
              <Text style={styles.infoTextBox}>Choose Background Color</Text>
              <View style={styles.colorPalette}>
                <TouchableOpacity
                  onPress={() => {
                    this.changeBackgroundColor(colors.color1);
                  }}
                  style={styles.colorSelection}
                >
                  <View style={styles.Circle1Box}></View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.changeBackgroundColor(colors.color2);
                  }}
                  style={styles.colorSelection}
                >
                  <View style={styles.Circle2Box}></View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.changeBackgroundColor(colors.color3);
                  }}
                  style={styles.colorSelection}
                >
                  <View style={styles.Circle3Box}></View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.changeBackgroundColor(colors.color4);
                  }}
                  style={styles.colorSelection}
                >
                  <View style={styles.Circle4Box}></View>
                </TouchableOpacity>
              </View>
            </View>
            <Pressable
              style={styles.buttonBox}
              onPress={() =>
                this.props.navigation.navigate("Chat", {
                  username: this.state.username,
                  backgroundColor: this.state.backgroundColor,
                })
              }
            >
              <Text style={styles.buttonText}>Start Chatting</Text>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

// Styling section start:
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  titleBox: {
    height: "44%",
    width: "88%",
  },
  title: {
    fontSize: 45,
    fontWeight: "600",
    color: "#FFFFFF",
    textAlign: "center",
    padding: 20,
  },
  startBox: {
    marginBottom: 30,
    backgroundColor: "white",
    flexGrow: 1,
    flexShrink: 0,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 10,
    height: 260,
    minHeight: 260,
    maxHeight: 300,
    height: "44%",
    width: "88%",
  },
  textBox: {
    flexDirection: "row",
    width: "88%",
    borderColor: "#757083",
    borderWidth: 1,
    padding: 10,
  },
  userIcon: {
    padding: 10,
    margin: 5,
    height: 20,
    width: 20,
    resizeMode: "stretch",
    alignItems: "center",
    opacity: 0.5,
  },
  input: {
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    opacity: 0.5,
  },
  themeBox: {
    flexDirection: "column",
    padding: 20,
    marginRight: "auto",
    width: "88%",
  },
  infoTextBox: {
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    opacity: 1,
    padding: 5,
  },
  colorPalette: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  colorSelection: {
    alignSelf: "center",
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "white",
  },
  Circle1Box: {
    flexDirection: "row",
    backgroundColor: "#090C08",
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 2,
  },
  Circle2Box: {
    flexDirection: "row",
    backgroundColor: "#474056",
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 2,
  },
  Circle3Box: {
    flexDirection: "row",
    backgroundColor: "#8A95A5",
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 2,
  },
  Circle4Box: {
    flexDirection: "row",
    backgroundColor: "#B9C6AE",
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 2,
  },
  buttonBox: {
    flexDirection: "column",
    backgroundColor: "#757083",
    width: "88%",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    textAlign: "center",
    padding: 20,
  },
});