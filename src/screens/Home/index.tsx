import { CardEstatistica } from "@components/CardEstatistica";
import { CardRefeicaoBtn } from "@components/CardRefeicaoBtn";
import { HeaderHome } from "@components/HeaderHome";
import { CardListRefeicoes } from "@components/CardListRefeicoes";
import { Container } from "./styles";
import { CardListRefeicoesData } from "@components/CardListRefeicaoData";


export function Home(){
  return (
    <Container>
      <HeaderHome />
      <CardEstatistica percentagem={90.86}  type='PRIMARY'/>
      <CardRefeicaoBtn />
      <CardListRefeicoesData />
      
    </Container>
  );
}