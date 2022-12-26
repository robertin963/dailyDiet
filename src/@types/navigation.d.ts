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
      };
      descricao: {
        title: string;
        refeicao: string;
        descricao: string;
        hora: string;
        dentroDieta: boolean;
        type: 'PRIMARY' | 'SECONDARY';
      }
    }
  }
}