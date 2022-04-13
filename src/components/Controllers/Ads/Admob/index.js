import React from "react";
import { BannerAd, BannerAdSize } from '@react-native-firebase/admob';

export function Admob() {
  const adUnitId = 'ca-app-pub-1160553534851656/9518305322';
  return (
    <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.SMART_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
  )
}