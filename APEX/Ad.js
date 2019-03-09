import React from 'react';
import { Platform } from 'react-native';
import { AdMobBanner } from 'expo';
import Ads from './constants/ads';

export default class Ad extends React.Component {
  componentDidMount(){
  }
  render() {
    if(Platform.OS === 'ios'){
        return (
        <AdMobBanner
        style={styles.bottomBanner}
        bannerSize="smartBannerPortrait"
        adUnitID={Ads['iOS']['BANNER_ID']} // Test ID, Replace with your-admob-unit-id
        testDeviceID="EMULATOR"
        didFailToReceiveAdWithError={this.bannerError}/>
        )
    }else{
        return (
        <AdMobBanner
        style={styles.bottomBanner}
        bannerSize="smartBannerPortrait"
        adUnitID={Ads['ANDROID']['BANNER_ID']} // Test ID, Replace with your-admob-unit-id
        testDeviceID="EMULATOR"
        didFailToReceiveAdWithError={this.bannerError}/>
        )
    }
  }
}