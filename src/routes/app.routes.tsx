import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { DetalhesRefeicao } from '@screens/DetalhesRefeicao';
import { EditarRefeicao } from '@screens/EditarRefeicao';
import { Estatisticas } from '@screens/Estatisticas';
import { Home } from '@screens/Home';
import { NovaRefeicao } from '@screens/NovaRefeicao';
import { RefeicaoSalvo } from '@screens/RefeicaoSalvo';


const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes(){
  return(
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="home" component={Home} />
      <Screen name="estatisticas" component={Estatisticas} />
      <Screen name="refeicao" component={NovaRefeicao} />
      <Screen name="salvo" component={RefeicaoSalvo} />
      <Screen name="descricao" component={DetalhesRefeicao} />
      <Screen name="editar" component={EditarRefeicao} />
    </Navigator>
  );
}



