import styled from 'styled-components/native';

export const ContainerFull = styled.View`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  gap: 10px;

  padding: 20px;
`;

export const ContainerForm = styled.View`
  flex: 1;
  padding: 20px;

  gap: 10px;
`;

export const ContainerInput = styled.View`
  flex: 1;

  gap: 10px;
  padding: 10px;
  width: 100%;
`;

export const Input = styled.TextInput`
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #333;
`;

export const QrCode = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
