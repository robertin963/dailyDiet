import AsyncStorage from "@react-native-async-storage/async-storage";
import { REFEICOES_COLLECTION } from "@storage/storageConfig";

type refeicaoProps = {  
  title: string,
      data: [
        { 
          hora: string, 
          refeicao: string, 
          descricao: string;          
          dentroDieta: boolean,
          type: "PRIMARY" | "SECONDARY"
        }
      ]
}

export async function refeicoesGetAll(){
  try {
    const storage = await AsyncStorage.getItem(REFEICOES_COLLECTION);
    const refeicoes: refeicaoProps[] = storage ? JSON.parse(storage) : []; 
    return refeicoes;    
  } catch (error) {
    throw error;
  }
}