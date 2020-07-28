import React from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import { THEME } from "../theme";
export const Navbar = ({ title }) => {
  return (
    <View
      style={{
        ...styles.navbar,
        ...Platform.select({
          ios: styles.navbarIos,
          android: styles.navbarAndroid,
        }),
      }}
    >
      <Text style={styles.text}> {title} </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  navbar: {
    height: 70,

    justifyContent: "flex-end",
    alignItems: "center",
  },
  navbarAndroid: {
    backgroundColor: THEME.MAIN_COLOR,
  },
  navbarIos: {
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 24,
    color: Platform.os === "android" ? "#fff" : THEME.MAIN_COLOR,
  },
});
