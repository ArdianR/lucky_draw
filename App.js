import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, WebView, PermissionsAndroid } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import IMEI from 'react-native-imei';

// async function requestPermission() {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
//       {
//         'title': 'Photo App needs access Camera Permission',
//         'message': 'so you can take awesome pictures'
//       }
//     )
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       console.warn("You can use the camera")
//     } else {
//       console.warn("Camera permission denied")
//     }
//   } catch (err) {
//     console.warn(err)
//   }
// }

export default class App extends Component {

  // componentDidMount() {
  //   requestPermission()
  // }

  injectjs() {

    let dataImei = IMEI.getImei();

    let jsCode = `document.getElementById('email').value = '${dataImei}';`;

    return jsCode;
  }


  render() {

    return (
      <WebView
        source={{uri: 'http://odpbckmjg.oppomobile.id/app/back'}}
        style={styles.container}
        javaScriptEnabledAndroid={true}
        injectedJavaScript={this.injectjs()}
        javaScriptEnabled={true}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
