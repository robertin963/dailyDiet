import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, Alert } from "react-native";
import { format } from 'date-fns';
import { CardHeaderNovaRefeicao } from "@components/CardHeaderNovaRefeicao";
import { TextInputMask } from "react-native-masked-text";
import { BtnEditarExcluir, CirculoStatusDieta, Container, Context, SubTitulo, TextoStatusDieta, Titulo, TituloXS, ViewBtnEditarExcluir, ViewDentroDieta, ViewPrincipal, ViewTextos } from "./styles";

type RoutesParamsProps = {
    title: string;
    refeicao: string;
    descricao: string;
    hora: string;
    dentroDieta: boolean;
    type: 'PRIMARY' | 'SECONDARY';
}

export function DetalhesRefeicao(){

  const navigation = useNavigation();
  const route = useRoute();
  const { title, refeicao, descricao, hora, dentroDieta, type } = route.params as RoutesParamsProps;  

  return (
    <Container>
      <Context type={type}>
        <CardHeaderNovaRefeicao label="Refeição" type={dentroDieta ? 'PRIMARY' : 'SECONDARY'} />
        <ViewPrincipal>
          <ViewTextos>
            <Titulo>{refeicao}</Titulo>
            <SubTitulo>{descricao}</SubTitulo>
            <TituloXS>Data e hora</TituloXS>
            <SubTitulo>{title} às {hora}</SubTitulo>
            <ViewDentroDieta>
              <CirculoStatusDieta type={type}/>
              <TextoStatusDieta>{dentroDieta ? 'dentro da dieta' : 'fora da dieta'}</TextoStatusDieta>
            </ViewDentroDieta>
          </ViewTextos>
        </ViewPrincipal>
        <ViewBtnEditarExcluir>
          <BtnEditarExcluir type="PRIMARY" />
          <BtnEditarExcluir type="DEFAULT" />
        </ViewBtnEditarExcluir>
      </Context>
      
    </Container>
  );  
}