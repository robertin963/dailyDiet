import { SafeAreaView } from 'react-native-safe-area-context';

import styled, {css} from "styled-components/native";

import { ArrowLeft } from 'phosphor-react-native';

export type cardEstatisticaStyleIconeVoltarProps = "PRIMARY" | "SECONDARY" | "GRAY";

type Props = {
  type: cardEstatisticaStyleIconeVoltarProps;
}


export const Container = styled.TouchableOpacity<Props>`
  width: 100%;
  height: 132px;
  background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.BRAND.GREEN['LIGHT'] : type === 'SECONDARY' ? theme.COLORS.BRAND.RED['LIGHT'] : theme.COLORS.BASE.GRAY[500]};  
  top: 0;
  
  `;

export const AreaSegura = styled(SafeAreaView)`
  height: 132px;
  flex-direction: row; 
  margin-top: 20px;
  /* justify-items: center; */

`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  height: 132px;
  width: 50px;
  align-items: center;
  /* background-color: blue; */
  top: 0;
  left: 0;
  margin-top: -20px;

  
  
`;

export const IconArrowLeft = styled(ArrowLeft).attrs<Props>(({ theme, type }) => ({
  size: 32,
  color: type === 'PRIMARY' ? theme.COLORS.BRAND.GREEN['DARK'] : type === 'SECONDARY' ? theme.COLORS.BRAND.RED['DARK'] : theme.COLORS.BASE.GRAY[200]
}))`
  //position: absolute;
  left: 9px;
  /* top: 40px; */
  width: 24px;
  height: 24px;
`;

export const DivTexts = styled.View`
  
  flex: 1;
  align-items: center;
  margin-left:  -50px;
`;

export const TextPercentagem = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_M}px;
    color: ${theme.COLORS.BASE.GRAY[100]};
  `};  
  line-height: 41px
`;

export const TextMensagem = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.BODY_S}px;
    color: ${theme.COLORS.BASE.GRAY[200]};
  `};  
  height: 18px;
  line-height: 18px
`;