import React from "react";
import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View>
        <Text>Sorry, this page was not found.</Text>
      </View>
    </>
  );
}
