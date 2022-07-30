import { View, Text, Image, FlatList, StyleSheet } from "react-native";

import restaurants from "../../../data/restaurants.json";
const restaurant = restaurants[0];

const RestaurantDetailsScreen = () => {
  return (
    <View style={styles.page}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <Text style={StyleSheet.title}>{restaurant.name}</Text>
      <Text style={styles.subtitle}>
        £{restaurant.deliveryFee}0 &#8226; {restaurant.minDeliveryTime}-
        {restaurant.maxDeliveryTime} minutes
      </Text>
    </View>
  );
};

export default RestaurantDetailsScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
});
