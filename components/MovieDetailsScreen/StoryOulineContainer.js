import React from 'react'
import { View, Text, StyleSheet } from "react-native";

function StoryOulineContainer({storyOutline="Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's"}) {
  return (
    <View style={styles.storyOutlineContainer}>
        <Text numberOfLines={4} style={styles.storyOutlineText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </View>
  )
}

export default StoryOulineContainer

const styles = StyleSheet.create({
  storyOutlineContainer: {
    flex: 1,
    marginHorizontal: 24,
  },
  storyOutlineText: {
    lineHeight: 25,
    letterSpacing: 0.5,
    color: "#393737",
  },
  });
  