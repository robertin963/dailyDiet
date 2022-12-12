import { Alert, TouchableOpacityProps, View } from 'react-native';
import { Container, IconArrowLeft, TextPercentagem, DivTexts, cardEstatisticaStyleIconeVoltarProps, AreaSegura, BackButton } from "./styles";

import { useNavigation } from '@react-navigation/native';


type Props = TouchableOpacityProps & {
  type?: cardEstatisticaStyleIconeVoltarProps;
  label: String;
}

export function CardHeaderNovaRefeicao({label, type = 'PRIMARY', ...rest}: Props){

  const navigation = useNavigation();

  function handleGoBack(){
    navigation.navigate('home');
  }

  return (
    <Container type={type} {...rest}>
      <AreaSegura>
      <IconArrowLeft type={type} /> 
      <BackButton onPress={handleGoBack}>        
      </BackButton>      
      <DivTexts>
        <TextPercentagem>{label}</TextPercentagem>
      </DivTexts>
      </AreaSegura>
    </Container>
  );
}