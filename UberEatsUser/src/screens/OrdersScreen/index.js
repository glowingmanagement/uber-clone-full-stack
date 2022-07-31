import { View, Text, StyleSheet, FlatList } from "react-native";
import OrderListItem from "../../components/OrderListItem";
import orders from "../../../data/orders.json";

const OrderScreen = () => {
  return (
    <View>
      <OrderListItem />
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});
