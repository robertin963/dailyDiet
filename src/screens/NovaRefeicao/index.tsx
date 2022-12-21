import { useState } from "react";
import { StyleSheet } from "react-native";
import { format } from 'date-fns';
import { CardHeaderNovaRefeicao } from "@components/CardHeaderNovaRefeicao";
import { Container } from "@components/Loading/styles";
import { TextInputMask } from "react-native-masked-text";
import { BtnAddRefeicao, BtnDieta, CirculoStatus, Context, DivLinha, DivLinha2Colunas, DivLinha2ColunasSemMargem, DivLinhaMetade, Form, Input, Label, TextBtnRefeicao } from "./styles";
import THEME from '../../theme';
import {refeicaoCreate} from '@storage/refeicao/refeicaoCreate';
import { useNavigation } from "@react-navigation/native";

export function NovaRefeicao(){

  const [date, setDate] = useState('');  
  const [hora, setHora] = useState('');
  const [btnSim, setBtnSim] = useState("DEFAULT");
  const [btnNao, setBtnNao] = useState("DEFAULT");
  const [refeicao, setRefeicao] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dentroDieta, setDentroDieta] = useState(false);  

  const navigation = useNavigation();

  async function handleAddRefeicao(){
    try {
      const dados = {
          hora, 
          refeicao, 
          descricao,
          dentroDieta,
          type: dentroDieta  ? "PRIMARY" : "SECONDARY"      
      }
  
      await refeicaoCreate({title: date, hora, refeicao, descricao, dentroDieta, type:  dentroDieta  ? "PRIMARY" : "SECONDARY" });

      navigation.navigate('salvo', {type:  dentroDieta  ? "PRIMARY" : "SECONDARY"});
      
    } catch (error) {
      console.log(error);      
    }
  }  

  function handleSetDentroDieta(){
    if(btnSim === "DEFAULT"){
      setBtnSim("PRIMARY");
      setBtnNao("DEFAULT");
      setDentroDieta(true);
    }else{
      setBtnSim("DEFAULT")
      setDentroDieta(false);
    }
  }

  function handleSetForaDieta(){
    if(btnNao === "DEFAULT"){
      setBtnNao("SECONDARY");
      setBtnSim("DEFAULT");
      setDentroDieta(false);
    }else{
      setBtnNao("DEFAULT")
      setDentroDieta(false);
    }
  }

  return (
    <Container>
      <Context>
        <CardHeaderNovaRefeicao label="Nova Refeição" type="GRAY" />
        <Form>
          <DivLinha>
            <Label>Nome</Label>
            <Input value={refeicao} onChangeText={setRefeicao} />
          </DivLinha>

          <DivLinha>
            <Label>Descrição</Label>
            <Input style={{
              height: 120
            }} multiline={true} numberOfLines={4} value={descricao} onChangeText={setDescricao} />
          </DivLinha>

          <DivLinha2Colunas>
            <DivLinhaMetade>
              <Label>Data</Label>
              <TextInputMask 
                style={styles.input}
                type={'datetime'}
                options={{
                  format: 'DD/MM/YYYY'
                }}
                placeholder={format(new Date(), 'dd/MM/yyyy')}
                keyboardType={"number-pad"}
                value={date}
                onChangeText={setDate}             
            />
            </DivLinhaMetade>
            <DivLinhaMetade>
              <Label>Hora</Label>
              <TextInputMask 
                style={styles.input}
                type={'datetime'}
                options={{
                  format: 'HH:MM'
                }}
                placeholder={format(new Date(), 'HH:MM')}
                value={hora}
                onChangeText={setHora}             
            />
            </DivLinhaMetade>          
          </DivLinha2Colunas>

          <DivLinha>
            <Label>Está dentro da dieta?</Label> 
            <DivLinha2ColunasSemMargem>
              <DivLinhaMetade>
                <BtnDieta type={btnSim} onPress={handleSetDentroDieta}>
                <CirculoStatus type="PRIMARY" />
                  <Label>Sim</Label>
                </BtnDieta>              
              </DivLinhaMetade>
              <DivLinhaMetade>
                <BtnDieta type={btnNao} onPress={handleSetForaDieta}>
                <CirculoStatus type="SECONDARY" />
                  <Label>Não</Label>  
                </BtnDieta>              
              </DivLinhaMetade>
            </DivLinha2ColunasSemMargem>
          </DivLinha>


        </Form>
      </Context>
      <BtnAddRefeicao onPress={handleAddRefeicao}>
        <TextBtnRefeicao>Cadastrar refeição</TextBtnRefeicao>
      </BtnAddRefeicao>
    </Container>
  );  
}

const styles = StyleSheet.create({
  input:{
    width: '100%',
    height: 48,
    borderRadius: 6,
    fontSize: THEME.FONT_SIZE.BODY_M,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.BASE.GRAY[100],
    padding: 14,
    borderColor: THEME.COLORS.BASE.GRAY[500],
    borderWidth: 1,
    marginTop: 20,

  }
})