import React from "react";
import { View, Text, StyleSheet, Image, Button, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

function TrailerButton({trailerNumber}) {
  return (
    <View style={styles.trailersButtonContainer}>
      <View style={styles.trailerButton}>
        <Pressable android_ripple={{ color: "black" }}>
          <View style={styles.trailerButtonContent}>
            <View style={styles.iconContainter}>
              <Ionicons name="play-circle-outline" size={32} />
            </View>
            <View>
              <Text>Play trailer {trailerNumber+1}</Text>
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

export default TrailerButton;

const styles = StyleSheet.create({
  trailersButtonContainer: {
    marginBottom: 35,
    flexDirection: 'column',
    height: 20
  },
  trailerButton: {
    backgroundColor: "#E8e4e4",
    marginVertical: 15,
    height: 45,
  },
  trailerButtonContent: {
    flexDirection: "row",
    marginLeft: 12,
    alignItems: "center",
    marginVertical: 6,
  },
});
