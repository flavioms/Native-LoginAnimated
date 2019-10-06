import React, { Component } from "react";

import { View, Image, Text, StyleSheet, Dimensions } from "react-native";

// import { Container } from './styles';

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    height: 70,
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default class MusicApp extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "flex-end"
        }}
      >
        <View style={{ ...StyleSheet.absoluteFill }}>
          <Image
            source={require("../assets/bg.jpg")}
            style={{ flex: 1, height: null, width: null }}
          />
        </View>
        <View style={{ height: height / 3, justifyContent: "center" }}>
          <View style={styles.button}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>SIGN IN</Text>
          </View>

          <View style={{ ...styles.button, backgroundColor: "#2E71DC" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
              SIGN UP
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
