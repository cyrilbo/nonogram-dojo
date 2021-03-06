import * as React from "react";
import { View, StyleSheet, StatusBar, Platform } from "react-native";
import Constants from "expo-constants";
import { AppName } from "./components/AppName.js";
import { Grid } from "./components/Grid.js";
import { NonogramGameProvider } from "./nonogramGame/NonogramGameContext.js";
import { CheckGridButton } from "./components/CheckGridButton.js";
import { NonogramPicker } from "./components/NonogramPicker.js";
import { Spacer } from "./components/Spacer.js";

export default function App() {
  return (
    <NonogramGameProvider>
      <StatusBar
        barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
      />
      <View style={styles.container}>
        <AppName />
        <NonogramPicker />
        <Spacer height={20} />
        <Grid />
        <Spacer height={20} />
        <CheckGridButton />
      </View>
    </NonogramGameProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 8,
  },
});
