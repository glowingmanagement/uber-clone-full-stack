import { FlatList, Image } from "react-native";
import orders from "../../../data/orders.json";
import restaurants from "../../../data/restaurants.json";
import BasketDishItem from "../../components/BasketDishItem";
import OrderDetailsHeader from "./Header";

const order = orders[0];

const OrderDetailsScreen = () => {
  return (
    <FlatList
      ListHeaderComponent={OrderDetailsHeader}
      data={restaurants[0].dishes}
      renderItem={({ item }) => <BasketDishItem BasketDish={item} />}
    />
  );
};

export default OrderDetailsScreen;
