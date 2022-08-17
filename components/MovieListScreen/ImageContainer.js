import React from "react";
import { Pressable, View, Image, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";



function ImageContainer({movieDetails}) {
  const navigation = useNavigation();

  const imageOnPressHandler = () => {
    navigation.navigate('MovieDetail', movieDetails)
  }
  return (
    <View style={styles.imageContainer}>
      <Pressable style={styles.button} onPress={imageOnPressHandler}>
        <Image
          source={{uri: movieDetails.photoUrl}}
          style={styles.image}
        />
      </Pressable>
    </View>
  );
}

export default ImageContainer;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    flexDirection: "row",
    width: "50%",
    height: 275,
  },
  button: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
