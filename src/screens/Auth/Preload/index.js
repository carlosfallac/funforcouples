import React from "react"
import { Container } from "../../../themes"

import LottieView from "lottie-react-native";
import Animation from "../../../assets/heart.json"


export function Preload() {
  return (
    <Container>
      <LottieView
        source={Animation}
        autoPlay
        loop={true}
        speed={0.8}
        style={{ width: 150, justifyContent: "center" }}
      />
    </Container>
  );
}