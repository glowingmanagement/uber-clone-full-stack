import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import orders from "../../../data/orders.json";
import styles from "./styles";

const order = orders[0];

const OrderDetailsHeader = () => {
  return (
    <View>
      <View style={styles.page}>
        <Image source={{ uri: order.Restaurant.image }} style={styles.image} />
        <LinearGradient
          colors={["rgba(0,0,0,0.8)", "transparent"]}
          style={styles.background}
        ></LinearGradient>

        <View style={styles.container}>
          <Text style={styles.title}>{order.Restaurant.name}</Text>
          <Text style={styles.subTitle}>{order.status} &#8226; 2 days ago</Text>

          <Text style={styles.menuTitle}>Your Order</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderDetailsHeader;
