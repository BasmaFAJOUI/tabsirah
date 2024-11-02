import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  Button,
} from "react-native";
import { Divider } from "react-native-elements";
import { useFonts } from "expo-font";

export default function ActiviteComponent(props) {
  const [loaded] = useFonts({
    tajawalRegular: require("../../../assets/fonts/Tajawal-Regular.ttf"),
    tajawalBold: require("../../../assets/fonts/Tajawal-Bold.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.action(props.item)}
    >
      {/* Top */}
      <View style={styles.image_container}>
        <Image
          resizeMode="cover"
          source={{ uri: props.item.image }}
          style={styles.image}
        />
      </View>
      <Divider
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#eaeaea",
          width: "100%",
          alignSelf: "center",
        }}
      ></Divider>

      {/* Title */}

      <View style={styles.title_container}>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={{ fontSize: 20, fontFamily: "tajawalRegular" }}
        >
          {props.item.title}
        </Text>
      </View>

      {/* Description */}
      <View style={styles.description_container}>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={{ fontSize: 14, fontFamily: "tajawalRegular" }}
        >
          {props.item.description}
        </Text>
      </View>

      {/* Bottom */}
      {/* <View style={styles.cards_container}>
        <View style={styles.association_container}>
          <View style={styles.name_container}>
            <Text style={styles.association_name}>
              {props.item.association}
            </Text>
            <View style={styles.icon_container}>
              <FeatherIcon
                style={{ flexWrap: "wrap" }}
                name="globe"
                size={16}
                color="white"
              />
            </View>
          </View>
        </View>
        <View style={styles.city_container}>
          <View style={styles.name_city_container}>
            <Text style={styles.city_name}>{props.item.goal}</Text>
            <View style={styles.icon_container}>
              <FeatherIcon
                style={{ flexWrap: "wrap" }}
                name="target"
                size={18}
                color="black"
              />
            </View>
          </View>
        </View>
      </View> */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 290,
    alignSelf: "center",
    width: "90%",
    backgroundColor: "white",
    top: 5,
    elevation: 10,
    marginBottom: 15,
    borderColor: "black",
    borderRadius: 7,
  },

  // Top
  image_container: {
    flex: 4,
    backgroundColor: "white",
    borderColor: "black",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },

  image: {
    width: "100%",
    height: "100%",
    borderColor: "black",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },

  // Middle
  title_container: {
    flex: 0.8,
    justifyContent: "center",
    backgroundColor: "white",
    paddingHorizontal: "4%",
  },

  // Description

  description_container: {
    backgroundColor: "white",
    paddingHorizontal: "4%",
    flex: 1.1,
    height: 20,
    borderColor: "black",
    borderRadius: 10,
  },

  cards_container: {
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  // Association
  association_container: {
    paddingHorizontal: "5%",
    backgroundColor: "white",
  },
  name_container: {
    backgroundColor: "black",
    flexDirection: "row",
    height: "65%",
    paddingHorizontal: 5,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  association_name: {
    color: "white",
    fontSize: 10,
    flexWrap: "wrap",
    paddingRight: 5,
  },

  // City
  city_container: {
    paddingHorizontal: "5%",
    backgroundColor: "yellow",
  },

  name_city_container: {
    backgroundColor: "yellow",
    flexDirection: "row",
    height: "65%",
    paddingHorizontal: 5,
    alignSelf: "flex-end",
    alignItems: "center",
    borderRadius: 5,
  },
  city_name: {
    color: "black",
    fontSize: 12,
    flexWrap: "wrap",
    paddingRight: 5,
  },

  icon_container: {},
});
