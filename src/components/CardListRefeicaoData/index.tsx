import { CardListRefeicoes } from "@components/CardListRefeicoes";
import { useEffect, useState } from "react";
import { SectionList } from "react-native";
import { Container, DataRefeicao } from "./styles";


export function CardListRefeicoesData(){

  const dadosRefeicoes = [
    {
      title: "12.08.22",
      data: [
        { hora: "20:00", refeicao: "X-Tudo" , type: 'SECONDARY' },
        { hora: "16:00", refeicao: "Whey protein com leite" , type: 'PRIMARY' },
        { hora: "12:30", refeicao: "Salada Ceasar com frango..." , type: 'PRIMARY' },
        { hora: "09:30", refeicao: "Vitamina de Banana com ..." , type: 'PRIMARY' }
      ]
    },
    {
      title: "11.08.22",
      data: [
        { hora: "20:00", refeicao: "X-Tudo" , type: 'SECONDARY' },
        { hora: "16:00", refeicao: "Whey protein com leite" , type: 'PRIMARY' },
        { hora: "12:30", refeicao: "Salada Ceasar com frango..." , type: 'PRIMARY' },
        { hora: "09:30", refeicao: "Vitamina de Banana com ..." , type: 'PRIMARY' }
      ]
    },
    {
      title: "10.08.22",
      data: [
        { hora: "20:00", refeicao: "X-Tudo" , type: 'SECONDARY' },
        { hora: "16:00", refeicao: "Pamonha a moda com Linguiça" , type: 'SECONDARY' },
        { hora: "12:30", refeicao: "Salada Ceasar com frango..." , type: 'PRIMARY' },
        { hora: "09:30", refeicao: "Vitamina de Banana com ..." , type: 'PRIMARY' }
      ]
    },
    {
      title: "09.08.22",
      data: [
        { hora: "20:00", refeicao: "X-Tudo" , type: 'SECONDARY' },
        { hora: "16:00", refeicao: "Whey protein com leite" , type: 'PRIMARY' },
        { hora: "12:30", refeicao: "Salada Ceasar com frango..." , type: 'PRIMARY' },
        { hora: "09:30", refeicao: "Vitamina de Banana com ..." , type: 'PRIMARY' }
      ]
    }
  ];


  return (
    <Container>
      <SectionList 
        sections={dadosRefeicoes}
        keyExtractor={(item, index) => item.hora + item.refeicao + index}
        renderItem={({ item }) => 
          <CardListRefeicoes hora={item.hora} nomeRefeicao={item.refeicao} type={item.type} />                 
        }
        renderSectionHeader={({section: {title} }) => (
          <DataRefeicao>{title}</DataRefeicao>
        )}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled={false}
      />      
    </Container>
  );
}