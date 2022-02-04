import styled from "styled-components/native"

export const Container = styled.SafeAreaView`
  background-color: #FFF;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const ScrollContainer = styled.ScrollView`
  flex: 1;
  background-color: #FFF;
  padding: 40px 10px;
`

export const Title = styled.Text`
  font-family: 'Poppins_700Bold';
  font-size: 32px;
  text-align: center;
`

export const Button = styled.TouchableOpacity`
    width: 200px;
    height: 50px;
    justify-content: center;
    align-items: center;
    background-color: #CB902A;
    border-radius: 50px;
    margin-top: 30px;
`

export const DisableButton = styled.TouchableOpacity`
    width: 200px;
    height: 50px;
    justify-content: center;
    align-items: center;
    background-color: #CB902A;
    border-radius: 50px;
    margin-top: 30px;
    opacity: 0.5;
`

export const TextButton = styled.Text`
    color: #FFF;
    font-family: "Poppins_400Regular";
    font-size: 16px;
`

export const Input = styled.TextInput`
    width: 300px;
    height: 50px;
    margin-top: 10px;
    padding: 10px;
    border-bottom-width: 2px;
    border-bottom-color: #CB902A;
    margin-left: auto;
    margin-right: auto;
    color: #141414;
`