import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
  Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Config' component={Config} />
        <Stack.Screen name='Update' component={AtualizacaoCadastral} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home({ navigation }) {
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <TouchableHighlight onPress={() => navigation.navigate('Config')}>
       <Text>ir para config</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

function Config({ navigation }) {
  return (
    <SafeAreaView>
      <Text>Configuration</Text>
      <TouchableHighlight onPress={() => navigation.navigate('Update')}>
        <Text>Ir para Update Atualizacao Cadastral</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

function AtualizacaoCadastral({route}) {
  const {nome} = route.params
  return (
    <SafeAreaView>
      <Text>Atualizacao Cadastral</Text>
      <Text>{nome}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});