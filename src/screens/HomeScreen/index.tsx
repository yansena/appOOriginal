import React from 'react';
import {Appbar, Button} from 'react-native-paper';

import * as Style from './styles';
import {useNavigation} from '@react-navigation/native';

const HomeScrreen = () => {
  const navigation = useNavigation();
  return (
    <Style.ContainerFull>
      <Appbar.Header>
        <Appbar.Content title="Tela inicial" />
      </Appbar.Header>

      <Style.Container>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('CreateQrCode')}>
          Criar novo QrCode
        </Button>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('VisualizationQrCode')}>
          Ler QrCode
        </Button>
      </Style.Container>
    </Style.ContainerFull>
  );
};

export default HomeScrreen;
