import { CardListRefeicoes } from "@components/CardListRefeicoes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { refeicoesGetAll } from "@storage/refeicao/refeicaoGetAll";
import { IDENTIFICADOR_COLLECTION } from "@storage/storageConfig";
import { useCallback, useEffect, useState } from "react";
import { SectionList } from "react-native";
import { Container, DataRefeicao } from "./styles";


type refeicaoProps = {  
  title: string,
      data: [
        { 
          id: number,
          hora: string, 
          refeicao: string, 
          descricao: string;          
          dentroDieta: boolean,
          type: "PRIMARY" | "SECONDARY"
        }
      ]
}

export function CardListRefeicoesData(){
  const [dadosRefeicoes, setDadosRefeicos]  = useState<refeicaoProps[]>([]);

  try {
    async function fetchRefeicoes(){
      const dados = await refeicoesGetAll();
      
      dados.map(dado => {
        dado.data.sort((a,b) => a.hora < b.hora)
      })
      setDadosRefeicos(dados);
    }    
    useFocusEffect(useCallback(() => {
      fetchRefeicoes();
    },[]));
    
  } catch (error) {
    console.log(error);
  }

  // const dadosRefeicoes = [
  //   {
  //     title: "12.08.22",
  //     data: [
  //       { hora: "20:00", refeicao: "X-Tudo" , type: 'SECONDARY' },
  //       { hora: "16:00", refeicao: "Whey protein com leite" , type: 'PRIMARY' },
  //       { hora: "12:30", refeicao: "Salada Ceasar com frango..." , type: 'PRIMARY' },
  //       { hora: "09:30", refeicao: "Vitamina de Banana com ..." , type: 'PRIMARY' }
  //     ]
  //   },
  //   {
  //     title: "11.08.22",
  //     data: [
  //       { hora: "20:00", refeicao: "X-Tudo" , type: 'SECONDARY' },
  //       { hora: "16:00", refeicao: "Whey protein com leite" , type: 'PRIMARY' },
  //       { hora: "12:30", refeicao: "Salada Ceasar com frango..." , type: 'PRIMARY' },
  //       { hora: "09:30", refeicao: "Vitamina de Banana com ..." , type: 'PRIMARY' }
  //     ]
  //   },
  //   {
  //     title: "10.08.22",
  //     data: [
  //       { hora: "20:00", refeicao: "X-Tudo" , type: 'SECONDARY' },
  //       { hora: "16:00", refeicao: "Pamonha a moda com Linguiça" , type: 'SECONDARY' },
  //       { hora: "12:30", refeicao: "Salada Ceasar com frango..." , type: 'PRIMARY' },
  //       { hora: "09:30", refeicao: "Vitamina de Banana com ..." , type: 'PRIMARY' }
  //     ]
  //   },
  //   {
  //     title: "09.08.22",
  //     data: [
  //       { hora: "20:00", refeicao: "X-Tudo" , type: 'SECONDARY' },
  //       { hora: "16:00", refeicao: "Whey protein com leite" , type: 'PRIMARY' },
  //       { hora: "12:30", refeicao: "Salada Ceasar com frango..." , type: 'PRIMARY' },
  //       { hora: "09:30", refeicao: "Vitamina de Banana com ..." , type: 'PRIMARY' }
  //     ]
  //   }
  // ];


  return (
    <Container>
      <SectionList 
        sections={dadosRefeicoes}
        keyExtractor={(item, index) => item.hora + item.refeicao + index}
        renderItem={({ item }) => 
          <CardListRefeicoes hora={item.hora} id={item.id} nomeRefeicao={item.refeicao} type={item.type} />                 
        }
        renderSectionHeader={({section: {title} }) => (
          <DataRefeicao>{title.replace('/','.').replace('/','.')}</DataRefeicao>
        )}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled={false}
      />      
    </Container>
  );
}