import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TextButton } from "../../../themes";
import { ButtonContainer, ButtonTextWrapper, IconWrapper } from "./style";

export const SocialButton = ({
  buttonTitle,
  btnType,
  color,
  backgroundColor,
  ...rest
}) => {
  let bgColor = backgroundColor;
  return (
    <ButtonContainer
      style={{ backgroundColor: bgColor }}
      {...rest}>
      <IconWrapper>
        <FontAwesome name={btnType} style={{ fontWeight: 'bold' }} size={20} color={color} />
      </IconWrapper>
      <ButtonTextWrapper>
        <TextButton style={{ color: color }}>{buttonTitle}</TextButton>
      </ButtonTextWrapper>
    </ButtonContainer>
  );
};
