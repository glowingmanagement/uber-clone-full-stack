import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const OrderListItem = ({ order }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate("Order", { id: order.id })}
      style={styles.page}
    >
      <Image source={{ uri: order.Restaurant.image }} style={styles.image} />

      <View>
        <Text style={styles.name}>{order.Restaurant.name}</Text>
        <Text style={styles.price}>3 items &#8226; £38.30</Text>
        <Text style={styles.price}>2 days ago &#8226; {order.status}</Text>
      </View>
    </Pressable>
  );
};

export default OrderListItem;

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    margin: 5,
    alignItems: "center",
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 10,
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
  },
  price: {
    marginVertical: 5,
    color: "#696969",
  },
});
