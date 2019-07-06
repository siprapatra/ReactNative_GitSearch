import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const Card = ({
  title,
  value,
  titleStyle = {},
  valueStyle = {},
  viewContainer = {},
  additionText = ""
}) => {
  return (
    <View style={[style.cardContainer, viewContainer]}>
      <Text style={[style.title, titleStyle]}>
        {" "}
        {title} {additionText.length ? "\n " + additionText : ""}{" "}
      </Text>
      <Text style={[style.value, valueStyle]}> {value} </Text>
    </View>
  );
};

const style = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    marginTop: 12
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: "400",
    color: "black"
  },
  value: {
    fontSize: 18,
    fontWeight: "600",
    color: "black"
  }
});
export default Card;
