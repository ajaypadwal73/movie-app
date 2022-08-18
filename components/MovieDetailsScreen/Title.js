import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { COLOR } from "../../constants/colors";

function Title({ title = "Title" }) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default Title;

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: COLOR.titleBackground,
    height: 50,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "400",
    marginLeft: 10,
  },
});
