import { CardHeaderNovaRefeicao } from "@components/CardHeaderNovaRefeicao";
import { Container } from "@components/Loading/styles";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { BtnDieta, CirculoStatus, Context, DivLinha, DivLinha2Colunas, DivLinha2ColunasSemMargem, DivLinhaMetade, Form, Input, Label } from "./styles";
import THEME from '../../theme';


export function NovaRefeicao(){

  const [data, setData] = useState('12/12/2022');
  const [hora, setHora] = useState('00:00');
  const [btnSim, setBtnSim] = useState("DEFAULT");
  const [btnNao, setBtnNao] = useState("DEFAULT");
  

  function handleSetDentroDieta(){
    if(btnSim === "DEFAULT"){
      setBtnSim("PRIMARY");
      setBtnNao("DEFAULT");
    }else{
      setBtnSim("DEFAULT")
    }
  }

  function handleSetForaDieta(){
    if(btnNao === "DEFAULT"){
      setBtnNao("SECONDARY");
      setBtnSim("DEFAULT");
    }else{
      setBtnNao("DEFAULT")
    }
  }

  return (
    <Container>
      <Context>
        <CardHeaderNovaRefeicao label="Nova Refeição" type="GRAY" />
        <Form>
          <DivLinha>
            <Label>Nome</Label>
            <Input />
          </DivLinha>

          <DivLinha>
            <Label>Descrição</Label>
            <Input style={{
              height: 120
            }} multiline={true} numberOfLines={4} />
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
              value={data}
              onChangeText={setData}             
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

  }
})