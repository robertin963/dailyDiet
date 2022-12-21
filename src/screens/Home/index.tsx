import { CardEstatisticaIcone } from "@components/CardEstatisticaIcone";
import { CardRefeicaoBtn } from "@components/CardRefeicaoBtn";
import { HeaderHome } from "@components/HeaderHome";
import { CardListRefeicoes } from "@components/CardListRefeicoes";
import { Container } from "./styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { CardListRefeicoesData } from "@components/CardListRefeicaoData";
 import { refeicaoGetEstatisticas } from "@storage/refeicao/refeicaoGetEstatisticas";
import { useCallback, useState } from "react";

type RefeicaoProps = {
  qtdRefeicoes: number;
  qtdRefeicoesDentro: number;
  qtdRefeicoesFora: number; 
  percentagemDentroDieta: number;
}

export function Home(){
  const navigation = useNavigation();
  const [estatistica, setEstatistica] = useState<RefeicaoProps>()
  
  async function handleGetEstatisticas(){
    const estatisticas = await refeicaoGetEstatisticas();
    setEstatistica(prev => estatisticas);
    //console.log(estatistica);
  }

  function handleViewEstatisticas(){
    navigation.navigate('estatisticas', { percentagem: estatistica?.percentagemDentroDieta , type: estatistica?.percentagemDentroDieta >= 50 ? 'PRIMARY' : 'SECONDARY' } )
  }

  useFocusEffect(useCallback(() => {
    handleGetEstatisticas();
  },[]));

  return (    
    <Container>
      <HeaderHome />
      <CardEstatisticaIcone 
        percentagem={estatistica?.percentagemDentroDieta}  
        type={estatistica?.percentagemDentroDieta >= 50 ? 'PRIMARY' : 'SECONDARY'} 
        onPress={handleViewEstatisticas}/>
      <CardRefeicaoBtn />
      <CardListRefeicoesData />      
    </Container>
  );
}