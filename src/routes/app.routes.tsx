import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { Estatisticas } from '@screens/Estatisticas';
import { Home } from '@screens/Home';
import { NovaRefeicao } from '@screens/NovaRefeicao';


const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes(){
  return(
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="home" component={Home} />
      <Screen name="estatisticas" component={Estatisticas} />
      <Screen name="refeicao" component={NovaRefeicao} />
    </Navigator>
  );
}



