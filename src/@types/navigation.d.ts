export declare global{
  namespace ReactNavigation{
    interface RootParamList{
      home: undefined;
      estatisticas: {
        percentagem: number;
        type?: string;
      };
      refeicao: undefined;
      salvo: {
        type: 'PRIMARY' | 'SECONDARY'
      }
    }
  }
}