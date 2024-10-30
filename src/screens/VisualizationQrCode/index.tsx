import React, {useEffect, useState} from 'react';

import * as Style from './styles';
import {Appbar, Button, Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import {Alert, StyleSheet} from 'react-native';

const VisualizationQrCode = () => {
  const {hasPermission, requestPermission} = useCameraPermission();
  const device = useCameraDevice('back');
  const navigation = useNavigation();

  useEffect(() => {
    requestPermission();
  }, []);

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      if (codes.length > 0) {
        const codeData = codes[0].value;
        console.log('codes', codes);
        Alert.alert('QR Code Escaneado', `Conteúdo: ${codeData}`, [
          {text: 'OK', onPress: () => {}},
        ]);
      }
      console.log(`Scanned ${codes.length} codes!`);
    },
  });

  if (!hasPermission || device == null) {
    return (
      <>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Visualizar QrCode" />
        </Appbar.Header>
        <Style.Container>
          <Text style={{color: 'white'}}>Carregando câmera...</Text>
        </Style.Container>
      </>
    );
  }
  return (
    <Style.ContainerFull>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Visualizar QrCode" />
      </Appbar.Header>

      <Style.Container>
        <Style.ScannerMessage>
          Encontre um código para escanear
        </Style.ScannerMessage>
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
          codeScanner={codeScanner}
        />
      </Style.Container>
    </Style.ContainerFull>
  );
};

export default VisualizationQrCode;
