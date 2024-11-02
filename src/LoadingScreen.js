import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { CommonActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

class LoadingScreen extends React.Component {
  _toggleUser(user) {
    var action;
    action = { type: "SET_USER", value: user };
    this.props.dispatch(action);
  }
  _retrieveData = async () => {
    try {
      // AsyncStorage.clear();
      const onBoardingViewed = await AsyncStorage.getItem("onBoardingViewed");

      if (onBoardingViewed !== "true") {
        this.props.navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{ name: "OnboardingStack" }],
          })
        );
        return;
      } else {
        this.props.navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{ name: "AppStack" }],
          })
        );
      }

      // const value = await AsyncStorage.getItem("user");
      // if (value !== null) {
      //   var userToken = JSON.parse(value);

      //   let node = userToken.type == "individu" ? "/users" : "/associations";
      //   await firebase
      //     .database()
      //     .ref(node)
      //     .child(userToken.userId)
      //     .once("value")
      //     .then((doc) => {
      //       let user = doc.val();
      //       user.userId = userToken.userId;
      //       user.type = userToken.type;
      //       let routeName = "AuthenticationStack";
      //       if (user.activated) {
      //         routeName =
      //           userToken.type == "individu"
      //             ? "HomeIndividuTabs"
      //             : "HomeAssociationTabs";
      //         this._toggleUser(user);
      //       } else {
      //         alert(
      //           "لقد تم إنشاء الحساب بنجاح وسوف يتم تفعيله بعد التأكد من المعلومات, شكرا لاختياركم منصة دار الخير"
      //         );
      //       }
      //       this.props.navigation.dispatch(
      //         CommonActions.reset({
      //           index: 1,
      //           routes: [{ name: routeName }],
      //         })
      //       );
      //     });
      // } else {
      //   this.props.navigation.dispatch(
      //     CommonActions.reset({
      //       index: 1,
      //       routes: [{ name: "AuthenticationStack" }],
      //     })
      //   );
      // }
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  };
  componentDidMount() {
    this._retrieveData();
  }
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#1F6F78" />
      </View>
    );
  }
}

export default LoadingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
