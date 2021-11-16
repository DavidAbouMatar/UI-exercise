import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

//get the screen width and height
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.middleContainer}>

        <View style={styles.topContainer}>
          <View style={styles.top}>
            <View style={styles.topText}>
              <View style={styles.box} />
              <Text style={styles.text}>{"Name"}</Text>
              <View style={styles.box} />
            </View>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.bottom}>
            <Text style={styles.text}>{"Balance"}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#0e1c23",
    alignItems: "center",
    justifyContent: "center",
  },
  middleContainer: {
    width: windowWidth / 1.6,
    height: windowHeight / 4,
    borderRadius: 25,
    overflow: "hidden",
  },
  topContainer: {
    height: "50%",
    backgroundColor: "#f5f4fb",
    borderBottomColor: "transparent",
    overflow: "hidden",
  },
  bottomContainer: {
    height: "50%",
    backgroundColor: "#fefffe",
    borderTopColor: "transparent",
    overflow: "hidden",
  },
  top: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fefffe",
    borderBottomLeftRadius: 50,
  },
  bottom: {
    width: "100%",
    height: "100%",
    backgroundColor: "#f5f4fb",
    borderTopRightRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  topText: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  box: {
    width: 35,
    height: 35,
    borderRadius: 5,
    backgroundColor: "#0e1c23",
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
  },
});
