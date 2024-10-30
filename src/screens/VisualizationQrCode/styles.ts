import styled from 'styled-components/native';

export const ContainerFull = styled.View`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #000;
`;

export const ScannerMessage = styled.Text`
  color: white;
  font-size: 18px;
  margin-bottom: 20px;
`;

export const FlashlightIcon = styled.TouchableOpacity`
  position: absolute;
  bottom: 40px;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 10px;
  border-radius: 20px;
`;
