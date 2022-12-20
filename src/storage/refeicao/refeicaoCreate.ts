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

    
    if(alimentacoes.length === 0){
      console.log('não tem item');
      return;
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
      const existeData = alimentacoes.filter(alimentacao => alimentacao.title === title);
      console.log(existeData);
      if(existeData.length > 0){
        console.log('Data já existe');
      }else{
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
        
      }

      return;

    }
  } catch (error) {
    throw error;
  }

  

}