import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;  
  background-color: ${({ backgroundColor }) => backgroundColor};
  align-items: center;
  padding: 10px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #fff;
  font-family: 'Poppins_700Bold';
`;