import AsyncStorage from "@react-native-async-storage/async-storage";
import { REFEICOES_COLLECTION } from "@storage/storageConfig";
import { refeicoesGetAll } from "./refeicaoGetAll";

type refeicaoProps = {
  title: string;
  data: {
  hora: string, 
  refeicao: string, 
  descricao: string;          
  dentroDieta: boolean,
  type: "PRIMARY" | "SECONDARY"
  }[];
}

export async function  refeicaoCreate({title, hora, refeicao, descricao, dentroDieta, type }: refeicaoProps){
  try {
    
    const alimentacoes = await refeicoesGetAll();      
     console.log(alimentacoes);    

    return;

    
    if(alimentacoes.length === 0){
      console.log('não tem item');
      //return;
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
      if(existeData.length > 0){
        const dados = alimentacoes.filter(alimento => alimento.title !== title);
        let dataFiltrada = alimentacoes.filter(alimento => alimento.title === title);

        dataFiltrada.data.push({
          hora,
          refeicao,
          descricao,
          dentroDieta,
          type,
        })

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
        const novasRefeicoes = [...dados, newRefeicao];
        const storage = JSON.stringify(novasRefeicoes);
        await AsyncStorage.setItem(REFEICOES_COLLECTION, storage);    
        
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
        
        const newDados = [...alimentacoes, newRefeicao];
        const storage = JSON.stringify(newDados);
        await AsyncStorage.setItem(REFEICOES_COLLECTION, storage);    
        //.sort((a, b) => a.idx - b.idx)
        
      }

      return;

    }
  } catch (error) {
    throw error;
  }

  

}