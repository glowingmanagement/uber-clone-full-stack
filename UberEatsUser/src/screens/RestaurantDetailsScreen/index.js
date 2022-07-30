import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import DishListItem from "../../components/DishListItem";
import Header from "./Header";
import styles from "./styles";

import restaurants from "../../../data/restaurants.json";
const restaurant = restaurants[0];

const RestaurantDetailsScreen = () => {
  return (
    <View style={styles.page}>
      <Ionicons
        name="arrow-back-circle"
        size={50}
        color="white"
        style={styles.iconContainer}
      />

      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        showsVerticalScrollIndicator={false}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
      />
    </View>
  );
};

export default RestaurantDetailsScreen;
