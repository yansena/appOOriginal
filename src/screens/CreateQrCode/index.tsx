import React, {useState} from 'react';
import * as Style from './styles';
import {Appbar, Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import QRCode from 'react-native-qrcode-svg';

const CreateQrCode = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [qrCodeValue, setQrCodeValue] = useState<null | string | undefined>(
    null,
  );

  const navigation = useNavigation();

  const generateQrCode = () => {
    const newData = {name, description, url};
    setQrCodeValue(JSON.stringify(newData));
  };

  return (
    <Style.ContainerFull>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Criar novo QrCode" />
      </Appbar.Header>

      <Style.ContainerForm>
        <Style.ContainerInput>
          <Style.Input placeholder="Nome" value={name} onChangeText={setName} />
          <Style.Input
            placeholder="Descrição"
            value={description}
            onChangeText={setDescription}
          />
          <Style.Input placeholder="URL" value={url} onChangeText={setUrl} />
          <Button mode="contained" onPress={generateQrCode}>
            Gerar QrCode
          </Button>

          <Style.QrCode>
            {qrCodeValue && <QRCode value={qrCodeValue} size={200} />}
          </Style.QrCode>
        </Style.ContainerInput>
      </Style.ContainerForm>
    </Style.ContainerFull>
  );
};

export default CreateQrCode;
