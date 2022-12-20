import { CardEstatisticaIcone } from "@components/CardEstatisticaIcone";
import { CardRefeicaoBtn } from "@components/CardRefeicaoBtn";
import { HeaderHome } from "@components/HeaderHome";
import { CardListRefeicoes } from "@components/CardListRefeicoes";
import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { CardListRefeicoesData } from "@components/CardListRefeicaoData";


export function Home(){
  const navigation = useNavigation();

  function handleViewEstatisticas(){
    navigation.navigate('estatisticas', { percentagem: 90.86 , type: 'PRIMARY' } )
  }

  return (
    <Container>
      <HeaderHome />
      <CardEstatisticaIcone percentagem={90.86}  type='PRIMARY' onPress={handleViewEstatisticas}/>
      <CardRefeicaoBtn />
      <CardListRefeicoesData />      
    </Container>
  );
}