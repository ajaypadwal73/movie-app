import React from "react";
import { View, Text, StyleSheet, Image, Button, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import TrailerButton from "../TrailerButton";

function TrailerSection({trailers}) {
  return (
    <View style={styles.trailerContentContainer}>
      <View style={styles.trailerTitleContainer}>
        <Text style={styles.trailerTitleText}>TRAILERS</Text>
      </View>
      <View style={styles.trailersContainer}>
        {trailers.map((trailer, index) => (
          <TrailerButton key={trailer} trailerNumber={index}/>
        ))}
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
    fontSize: 16,
    color: '#70716F'
  },
  trailersContainer:{
    flex: 1
  }
});
