import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export const AppName = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Nonogram</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
