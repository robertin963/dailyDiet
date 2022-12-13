import AsyncStorage from "@react-native-async-storage/async-storage";
import { REFEICOES_COLLECTION } from "@storage/storageConfig";
import { refeicoesGetAll } from "./refeicaoGetAll";

type refeicaoProps = {
  title: string;
  hora: string, 
  refeicao: string, 
  descricao: string;          
  dentroDieta: boolean,
  type: "PRIMARY" | "SECONDARY"
}

export async function  refeicaoCreate({title, hora, refeicao, descricao, dentroDieta, type }: refeicaoProps){
  try {
    
    const alimentacoes = await refeicoesGetAll();
    const refeicoes = await JSON.stringify(alimentacoes);

    console.log(refeicoes.length);


    return;

    
    if(refeicoes.length === 0){
      const newRefeicao = {
        title,
        data: [{
          hora,
          refeicao,
          descricao,
          dentroDieta,
          type,
        }]
      }
      const storage = JSON.stringify([newRefeicao]);
      await AsyncStorage.setItem(REFEICOES_COLLECTION, storage);    
    }else{

    }
  } catch (error) {
    throw error;
  }

  

}