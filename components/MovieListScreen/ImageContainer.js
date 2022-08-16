import React from "react";
import { Pressable, View, Image, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";



function ImageContainer() {
  const navigation = useNavigation();

  const imageOnPressHandler = () => {
    navigation.navigate('MovieDetail')
  }
  return (
    <View style={styles.imageContainer}>
      <Pressable style={styles.button} onPress={imageOnPressHandler}>
        <Image
          source={require("../../assets/images/1.jpg")}
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
