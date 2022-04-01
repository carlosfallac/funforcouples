import styled from "styled-components"

export const ModalContainer = styled.View`
  width: 100%;
  max-height: 70%;
  background-color: #FFF;
  padding: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #CB902A;
`

export const ModalScrollerView = styled.ScrollView`
  width: 100%;
  margin-top: 10px;
`

export const Title = styled.Text`
  font-size: 18px;
  font-family: 'Poppins_700Bold';
  text-transform: uppercase;
  color: #FFF;
`

export const Description = styled.Text`
  font-size: 16px;
  font-family: 'Poppins_400Regular';
  text-align: center;
  color: #FFF;
`

export const Image = styled.Image`
  width: 100%;
  height: 150px;
  margin-bottom: 10px;
`

export const Button = styled.TouchableOpacity`
  margin: 30px 0;
  padding: 10px 30px;
  border-radius: 10px;
  background-color: #901238;
`
