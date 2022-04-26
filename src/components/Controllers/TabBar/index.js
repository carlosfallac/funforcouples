import React, { useEffect, useState, useRef } from "react";
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { TabArea, TabItem, TabItemCenter } from "./style";
import LottieView from "lottie-react-native";
import Heart from "../../../assets/heart.json";
import Hearts from "../../../assets/hearts.json";

export function TabBar({ state, navigation }) {
  const goTo = (screenName) => {
    navigation.navigate(screenName);
  }
  const [save, setSave] = useState(false);
  const animation = useRef(null);
  const firstRun = useRef(null);

  useEffect(() => {
    if (firstRun.current) {
      if (save) {
        animation.current.play(0, 60);
      }
      else {
        animation.current.play(0, 60);
      }
      firstRun.current = false;
    } else if (save) {
      animation.current.play(0, 60);
    } else {
      animation.current.play(0, 60);
    }
  }, [save]);
  return (
    <TabArea>
      <TabItem onPress={() => goTo('Trips')}>
        <FontAwesome5 name="map-marked-alt" size={28} color="#FFF" style={{ opacity: state.index === 0 ? 1 : 0.7 }} />
      </TabItem>
      <TabItem onPress={() => goTo('Movies')}>
        <FontAwesome name="play-circle" size={28} color="#FFF" style={{ opacity: state.index === 1 ? 1 : 0.7 }} />
      </TabItem>
      <TabItemCenter onPress={() => setSave(!save)}>
        <LottieView
          source={Hearts}
          autoPlay={false}
          loop={false}
          speed={0.8}
          style={{ width: 150, marginTop: -50 }}
          ref={animation}
        />
        <LottieView
          source={Heart}
          autoPlay
          loop={true}
          speed={0.8}
          style={{ width: 50, justifyContent: "center", marginTop: -50 }}
        />
      </TabItemCenter>
      <TabItem onPress={() => goTo('Extras')}>
        <FontAwesome5 name="tram" size={28} color="#FFF" style={{ opacity: state.index === 2 ? 1 : 0.7 }} />
      </TabItem>
      <TabItem onPress={() => goTo('Account')}>
        <FontAwesome name="user" size={28} color="#FFF" style={{ opacity: state.index === 3 ? 1 : 0.7 }} />
      </TabItem>
    </TabArea>
  )
}