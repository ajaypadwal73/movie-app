import React from 'react'
import { View, Text, StyleSheet } from "react-native";

function StoryOulineContainer({storyOutline="Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's"}) {
  return (
    <View style={styles.storyOutlineContainer}>
        <Text numberOfLines={3} style={styles.storyOutlineText}>
          {storyOutline}
        </Text>
      </View>
  )
}

export default StoryOulineContainer

const styles = StyleSheet.create({
    storyOutlineContainer: {
      flex: 0.5,
      margin: 24,
    },
    storyOutlineText: {
      lineHeight: 25,
      letterSpacing: 0.5,
      color: "#393737",
    },
  });
  