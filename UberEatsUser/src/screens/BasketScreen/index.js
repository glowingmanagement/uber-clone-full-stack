import { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import BasketDishItem from "./BasketDishItem";

import restaurants from "../../../data/restaurants.json";

const restaurant = restaurants[0];

const BasketScreen = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name}</Text>

      <Text style={styles.yourItem}>Your Items</Text>

      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <BasketDishItem BasketDish={item} />}
      />

      <View style={styles.separator}></View>

      <View style={styles.button}>
        <Text style={styles.buttonText}>Create Order</Text>
      </View>
    </View>
  );
};

export default BasketScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 50,
    padding: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    marginVertical: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "lightgrey",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 20,
  },
  yourItem: {
    fontWeight: "bold",
    marginTop: 20,
    fontSize: 19,
  },
});
