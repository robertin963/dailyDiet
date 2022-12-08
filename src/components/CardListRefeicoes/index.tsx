import { ViewProps } from "react-native";
import { Container, LineVertical, StatusRefeicao, statusRefeicaoStyleProps, TextHora, TextNomeRefeicao } from "./style";

type Props = ViewProps & {
  hora: string;
  nomeRefeicao: string;
  type?: statusRefeicaoStyleProps;  

}

export function CardListRefeicoes({hora, nomeRefeicao, type = 'PRIMARY', ...rest} : Props){
  return (
    <Container>
      <TextHora>{hora}</TextHora>
      <LineVertical />
      <TextNomeRefeicao>{nomeRefeicao}</TextNomeRefeicao>
      <StatusRefeicao type={type} />
    </Container>
  );
}