import styled, {css} from "styled-components/native";

export const Container = styled.View`
  margin-top  : 40px;
`;
export const TextTitle = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    color: ${theme.COLORS.BASE.GRAY[100]};
  `};  
  line-height: 20.8px ;
  margin-bottom: 8px
`;