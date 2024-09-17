import React from "react";
import { StyleSheet, View, Text, } from "react-native";

export default function Menu() {
  return (
    <View style={styles.container}>
    
      <Text> Menu! </Text>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
});