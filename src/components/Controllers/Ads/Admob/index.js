import React from "react";
import { TestIds, BannerAd, BannerAdSize } from '@react-native-firebase/admob';

export function Admob() {
  const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-1160553534851656~8289995895';
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