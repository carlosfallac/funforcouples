import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 94px;
  flex-direction: row;
  overflow: hidden;
  margin-bottom: 16px;
`;

export const Content = styled.TouchableOpacity`
  flex: 1;
  padding: 15px;
  justify-content: center;
  align-items: center;
  background-color: #CB902A;
  border-radius: 10px;
`;

export const Information = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  flex: 1;
  font-size: 18px;
  font-family: 'Poppins_700Bold';
  text-transform: uppercase;
  color: #fff;
`;
