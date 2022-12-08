import { CardEstatisticaIconeVoltar } from "@components/CardEstatisticaIconeVoltar";
import { CardEstatisticaSemIcone } from "@components/CardEstatisticaSemIcone";
import { useRoute } from "@react-navigation/native";
import { Container, Context, DivCardsQtdRefeicoes, Title } from "./styles";

type RoutesParamsProps = {
  percentagem: number;
  type: 'PRIMARY' | 'SECONDARY';
}

export function Estatisticas(){
  
  const route = useRoute();

  const { percentagem, type } = route.params as RoutesParamsProps;


  return (
    <Container type={type}>
      <CardEstatisticaIconeVoltar percentagem={percentagem} />
      <Context>
        <Title>Estatísticas gerais</Title>
        <CardEstatisticaSemIcone valor={22} textoEmbaixo="melhor sequência de pratos dentro da dieta" />
        <CardEstatisticaSemIcone valor={109} textoEmbaixo="refeições registradas" />
        <DivCardsQtdRefeicoes>
          <CardEstatisticaSemIcone valor={99} textoEmbaixo="refeições dentro da dieta"  type="PRIMARY"/>
          <CardEstatisticaSemIcone valor={10} textoEmbaixo="refeições fora da dieta"  type="SECONDARY"/>
        </DivCardsQtdRefeicoes>
      </Context>
    </Container>
  );

}