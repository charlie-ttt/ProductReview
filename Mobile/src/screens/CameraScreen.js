import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { withNavigation } from 'react-navigation';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import { BarCodeScanner } from 'expo-barcode-scanner';

class CameraScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };

  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={styles.CameraContainer}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={styles.BarcodeCamera}
        />
        <View style={styles.ButtonStyle}>
          {scanned && (
            <Button
              title={'CLICK to Scan Again'}
              onPress={() => this.setState({ scanned: false })}
            />
          )}
        </View>
      </View>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });

    Alert.alert(
      `Scanned! upc: ${data}`,
      `Please select an option`,
      [
        {
          text: 'See Product Info',
          onPress: () =>
            this.props.navigation.navigate('SingleProduct', { gtinupc: data })
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    );
  };
}

const styles = StyleSheet.create({
  CameraContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  BarcodeCamera: {
    ...StyleSheet.absoluteFillObject
  },
  ButtonStyle: {
    marginBottom: 40
  }
});

export default withNavigation(CameraScreen);
