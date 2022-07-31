import { View, Text, StyleSheet, FlatList } from "react-native";

const BasketDishItem = ({ BasketDish }) => {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>1</Text>
      </View>
      <Text style={styles.productName}>{BasketDish.name}</Text>
      <Text style={styles.price}>£{BasketDish.price.toFixed(1)}0</Text>
    </View>
  );
};

export default BasketDishItem;

const styles = StyleSheet.create({
  name: {
    fontSize: 24,
    fontWeight: "700",
    marginVertical: 10,
  },
  productName: {
    fontWeight: "600",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  quantityContainer: {
    backgroundColor: "lightgrey",
    paddingHorizontal: 5,
    marginRight: 5,
    paddingVertical: 2,
    borderRadius: 3,
  },
  price: {
    marginLeft: "auto",
  },
});
