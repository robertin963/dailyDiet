import styled, {css} from "styled-components/native";

export type btnDietaStyleProps = "PRIMARY" | "SECONDARY" | "DEFAULT";

type Props = {
  type: btnDietaStyleProps;
}


export const Container = styled.View`
  flex: 1;
  height: 100%;
`;

export const Context = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.BASE.GRAY[500]};  
  `;

export const Form = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.BASE.GRAY[700]};  
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 0 24px;
  padding-top: 16px;
`;

export const DivLinha = styled.View`
  margin-top: 24px;
`;
export const DivLinhaMetade = styled.View`
  width: 48%;
`;

export const DivLinha2Colunas = styled.View`
  margin-top: 24px;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const DivLinha2ColunasSemMargem = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const Label = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    color: ${theme.COLORS.BASE.GRAY[200]};
  `};  
  
`;

export const Input = styled.TextInput`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    color: ${theme.COLORS.BASE.GRAY[100]};
  `};  
  border: 1px solid;
  width: 100%;
  height: 48px;
  border-radius: 6px;
  padding: 14px;
  border-color: ${({theme}) => theme.COLORS.BASE.GRAY[500]};
  margin-top: 4px;
`;

export const BtnDieta = styled.TouchableOpacity<Props>`
  flex-direction: row;
  /* width: 160px; */
  width: 100%;
  height: 50px;
  background-color: ${({theme, type}) => 
    type === "PRIMARY" ? theme.COLORS.BRAND.GREEN.LIGHT : 
    type === 'SECONDARY' ? theme.COLORS.BRAND.RED.LIGHT : 
    theme.COLORS.BASE.GRAY[600]};  
  align-items: center;
  justify-content: center;
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    color: ${theme.COLORS.BASE.GRAY[100]};
  `};  
`;


export const CirculoStatus = styled.View<Props>`
  height: 8px;
  width: 8px;
  background-color: ${({theme, type}) =>  type === "PRIMARY" ? theme.COLORS.BRAND.GREEN.DARK : theme.COLORS.BRAND.RED.DARK };
  margin-right: 8px;
  border-radius: 8px;
`;