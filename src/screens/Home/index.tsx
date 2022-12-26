import { CardEstatisticaIcone } from "@components/CardEstatisticaIcone";
import { CardRefeicaoBtn } from "@components/CardRefeicaoBtn";
import { HeaderHome } from "@components/HeaderHome";
import { CardListRefeicoes } from "@components/CardListRefeicoes";
import { Container } from "./styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { CardListRefeicoesData } from "@components/CardListRefeicaoData";
 import { refeicaoGetEstatisticas } from "@storage/refeicao/refeicaoGetEstatisticas";
import { useCallback, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IDENTIFICADOR_COLLECTION, REFEICOES_COLLECTION } from "@storage/storageConfig";

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

  async function handleZerarListas(){
    const idStorage = JSON.stringify({id: 0});
    await AsyncStorage.setItem(IDENTIFICADOR_COLLECTION, idStorage);
    const refeicaoStorage = JSON.stringify({});
    await AsyncStorage.setItem(REFEICOES_COLLECTION,refeicaoStorage);

  }

  useFocusEffect(useCallback(() => {
    //handleZerarListas();
    handleGetEstatisticas();
  },[]));

  return (    
    <Container>
      <HeaderHome />
      <CardEstatisticaIcone 
        percentagem={estatistica?.percentagemDentroDieta ? estatistica?.percentagemDentroDieta : 0}  
        type={estatistica?.percentagemDentroDieta >= 50 ? 'PRIMARY' : 'SECONDARY'} 
        onPress={handleViewEstatisticas}/>
      <CardRefeicaoBtn />
      <CardListRefeicoesData />      
    </Container>
  );
}