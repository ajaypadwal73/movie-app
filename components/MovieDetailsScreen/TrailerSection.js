import React from "react";
import { View, Text, StyleSheet, Image, Button, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import TrailerButton from "../TrailerButton";

function TrailerSection() {
  return (
    <View style={styles.trailerContentContainer}>
      <View style={styles.trailerTitleContainer}>
        <Text style={styles.trailerTitleText}>Trailers</Text>
      </View>
      <View style={styles.trailersContainer}>
        <TrailerButton />
        <TrailerButton />
        <TrailerButton />
      </View>
    </View>
  );
}

export default TrailerSection;

const styles = StyleSheet.create({
  trailerContentContainer: {
    flex: 2,
    marginHorizontal: 24,
  },
  trailerTitleContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#Ada8a8",
  },
  trailerTitleText: {
    fontSize: 15,
  },
  trailersContainer:{
    flex: 1
  }
});