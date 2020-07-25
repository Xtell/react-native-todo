import React, { useState } from "react";
import { View, Text, Modal, StyleSheet, Button, ImagePropTypes } from "react-native";

export const AppModal = (props) => {
  return (
    <View style={styles.container}>
      <Modal animationType="slide" visible={props.visible} transparent={true}>
        <View style={styles.container}>
          <View style={styles.modalContainer}>
            {props.children}
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",

  },
  modalContainer: {
    margin: 20,
    padding: 35,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    elevation: 5,
  },
});
