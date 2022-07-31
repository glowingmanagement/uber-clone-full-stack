import { View, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DishListItem from "../../components/DishListItem";
import Header from "./Header";
import styles from "./styles";
import { useRoute } from "@react-navigation/native";

import restaurants from "../../../data/restaurants.json";
const restaurant = restaurants[0];

const RestaurantDetailsScreen = () => {
  const route = useRoute();
  const id = route.params?.id;
  console.log(id);

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        showsVerticalScrollIndicator={false}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={(item) => item.name}
      />
      <Ionicons
        name="arrow-back-circle"
        size={50}
        color="white"
        style={styles.iconContainer}
      />
    </View>
  );
};

export default RestaurantDetailsScreen;
