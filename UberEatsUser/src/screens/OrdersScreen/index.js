import { View, Text, StyleSheet, FlatList } from "react-native";
import OrderListItem from "../../components/OrderListItem";
import orders from "../../../data/orders.json";

const OrderScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
      />
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingTop: 50,
  },
});
