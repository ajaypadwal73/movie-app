import React from "react";
import { Text, View, StyleSheet } from "react-native";

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
    width: "100%",
    height: 50,
    backgroundColor: "#8a8381",
  },
  title: {
    fontSize: 24,
    fontWeight: "400",
    color: "white",
    marginVertical: 8,
    marginLeft: 12,
    alignItems: "center",
  },
});
