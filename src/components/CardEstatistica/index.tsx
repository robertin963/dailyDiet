import { TouchableOpacityProps, View } from 'react-native';
import { Container, cardEstatisticaStyleProps, IconArrowUpRight, TextPercentagem, DivTexts, TextMensagem } from "./styles";


type Props = TouchableOpacityProps & {
  type?: cardEstatisticaStyleProps;
  percentagem: Number;
}

export function CardEstatistica({percentagem, type = 'PRIMARY', ...rest}: Props){
  return (
    <Container type={type} {...rest}>
      
        <IconArrowUpRight 
          type={type}
        />
      <DivTexts>
        <TextPercentagem>{percentagem}%</TextPercentagem>
        <TextMensagem>das refeições dentro da dieta</TextMensagem>
      </DivTexts>
    </Container>
  );
}