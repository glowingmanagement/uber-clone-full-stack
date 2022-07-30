import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import restaurants from "../../../data/restaurants.json";
const restaurant = restaurants[0];

const RestaurantDetailsScreen = () => {
  return (
    <View style={styles.page}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />

      <Ionicons
        name="arrow-back-circle"
        size={50}
        color="white"
        style={styles.iconContainer}
      />

      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          £{restaurant.deliveryFee}0 &#8226; {restaurant.minDeliveryTime}-
          {restaurant.maxDeliveryTime} minutes
        </Text>
      </View>
    </View>
  );
};

export default RestaurantDetailsScreen;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  iconContainer: {
    position: "absolute",
    top: 50,
    left: 15,
  },
  page: {
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
  title: {
    fontSize: 35,
    fontWeight: "600",
    marginVertical: 10,
  },
  subtitle: {
    color: "#525252",
    fontSize: 15,
  },
});
