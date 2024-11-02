import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, Share } from "react-native";
import { Divider, Icon } from "react-native-elements";
import OptionComponent from "../../../shared/components/OptionComponent";

const CqInfoScreen = ({ navigation }) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "طريقة رائعة لتعزيز العمل الخيري ونشر الخير في المجتمع هي عبر تحميل تطبيق دار الخير والتعاون مع جهات خيرية مختلفة. قم بتحميل التطبيق الآن وشاركه مع أصدقائك لتعزيز الوعي بالأعمال الخيرية وتحقيق الفائدة للجميع.",
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.bottom}>
        <OptionComponent
          title=" من نحن؟"
          action={() => navigation.navigate("AboutDarlkhirScreen")}
        />
        <Divider style={styles.divider1} />
        <OptionComponent title="شارك التطبيق" action={onShare} />
        <Divider style={styles.divider1} />
        <OptionComponent title="صندوق الاقتراحات" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  // TOP
  top: {
    flex: 1.3,
    justifyContent: "center",
    alignItems: "center",
  },

  // -- Avatar --
  avatar_container: {
    backgroundColor: "white",
  },
  avatar_bubble: {
    width: "30%",
    borderColor: "#1F6F7877",
    backgroundColor: "#D5E6FB",
    borderWidth: 2,
    borderRadius: 300,
    aspectRatio: 1,
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },

  // MIDDLE
  middle: {
    flex: 1,
    paddingHorizontal: "7%",
    justifyContent: "space-evenly",
  },

  // BOTTOM
  bottom: {
    backgroundColor: "white",
    flex: 2,
    paddingHorizontal: "7%",
    marginTop: "7%",
  },

  // DIVIDER
  divider: {
    borderBottomWidth: 2,
    borderBottomColor: "#1F6F7877",
    width: "90%",
    alignSelf: "center",
  },
  divider1: {
    borderBottomWidth: 2,
    borderBottomColor: "#EAEAEA",
    width: "100%",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  section_title: {
    color: "#7B8794",

    fontSize: 12,
    alignSelf: "flex-end",
  },
});
// const mapStateToProps = (state) => {
//   return {
//     user: state.user,
//   };
// };
export default CqInfoScreen;
