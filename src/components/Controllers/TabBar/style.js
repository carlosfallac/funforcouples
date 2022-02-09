import styled from "styled-components";

export const TabArea = styled.View`
    height: 60px;
    background-color: #901238;
    flex-direction: row;
`

export const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const TabItemCenter = styled.View`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    border-radius: 35px;
    border: 3px solid #901238;
    margin-top: -20px;
`

export const AvatarIcon = styled.Image`
    width: 24px;
    height: 24px;
    border-radius: 12px;
`