import { CardEstatistica } from "@components/CardEstatistica";
import { CardRefeicaoBtn } from "@components/CardRefeicaoBtn";
import { HeaderHome } from "@components/HeaderHome";
import { Container } from "./styles";

export function Home(){
  return (
    <Container>
      <HeaderHome />
      <CardEstatistica percentagem={90.86}  type='PRIMARY'/>
      <CardRefeicaoBtn />
    </Container>
  );
}