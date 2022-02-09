import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { TabArea, TabItem, TabItemCenter } from "./style";
import LottieView from "lottie-react-native";
import Heart from "../../../assets/heart.json";

export function TabBar() {
  const navigation = useNavigation();
  const goTo = (screenName) => {
    navigation.navigate(screenName);
  }
  return (
    <TabArea>
      <TabItem onPress={() => goTo('Trips')}>
        <FontAwesome5 name="map-marked-alt" size={28} color="#FFF" />
      </TabItem>
      <TabItem onPress={() => goTo('Movies')}>
        <FontAwesome name="play-circle" size={28} color="#FFF" />
      </TabItem>
      <TabItemCenter>
        <LottieView
          source={Heart}
          autoPlay
          loop={true}
          speed={0.8}
          style={{ width: 50, justifyContent: "center" }}
        />
      </TabItemCenter>
      <TabItem onPress={() => goTo('Extras')}>
        <FontAwesome5 name="tram" size={28} color="#FFF" />
      </TabItem>
      <TabItem onPress={() => goTo('Account')}>
        <FontAwesome name="user" size={28} color="#FFF" />
      </TabItem>
    </TabArea>
  )
}