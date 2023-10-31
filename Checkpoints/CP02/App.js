import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBATK7Yp_U_xFdES1ERqdmlDha1QtyS9AE',
  authDomain: 'novo-projeto-bb20b',
  projectId: 'novo-projeto-bb20b',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeUser, setActiveUser] = useState(null);

  useEffect(() => {
    retrieveUser();
    const subscription =
      firebaseAuthenticator.onAuthStateChanged(updateAuthState);
    return subscription;
  });

  const firebaseAuthenticator = firebase.auth();

  const retrieveUser = async () => {
    const savedUser = await AsyncStorage.getItem('userStorage');
    if (savedUser) {
      setActiveUser(JSON.parse(savedUser));
    }
  };

  const saveUser = async (usr) => {
    await AsyncStorage.setItem('userStorage', JSON.stringify(usr));
  };

  const updateAuthState = (usr) => {
    setActiveUser(usr);
    if (usr) {
      saveUser(usr);
    }
  };

  const loginUser = async () => {
    try {
      await firebaseAuthenticator.signInWithEmailAndPassword(email, password);
    } catch (err) {
      alert('Erro: ' + err.message);
    }
  };

  const registerUser = async () => {
    try {
      await firebaseAuthenticator.createUserWithEmailAndPassword(
        email,
        password
      );
    } catch (err) {
      alert('Erro: ' + err.message);
    }
  };

  const logOut = async () => {
    await firebaseAuthenticator.signOut();
    await AsyncStorage.removeItem('userStorage');
    setActiveUser(null);
  };

  if (activeUser) {
    return (
      <View style={styles.container}>
      <Text>{activeUser.email}</Text>
      <Text>{activeUser.password}</Text>
        <TouchableOpacity onPress={logOut} style={styles.button}>
          <Text style={styles.buttonText}>Deslogar</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          style={styles.textInput}
          placeholder="Email"
        />
        <TextInput
          onChangeText={(text) => setPassword(text)}
          style={styles.textInput}
          placeholder="Senha"
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={loginUser} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={registerUser} style={styles.switchButton}>
          <Text style={styles.switchButtonText}>Criar conta</Text>
        </TouchableOpacity>
        <Text></Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9', // Adicione seu gradiente de fundo aqui
    padding: 20,
  },
  textInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 8, // Adicione bordas arredondadas
    fontFamily: 'OpenSans-Regular', // Adicione sua fonte personalizada aqui
    width: '100%',
  },
  button: {
    backgroundColor: '#3f51b5',
    height: 40,
    marginBottom: 10,
    borderRadius: 8, // Adicione bordas arredondadas
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'OpenSans-Regular', // Adicione sua fonte personalizada aqui
  },
  switchButton: {
    marginTop: 10,
  },
  switchButtonText: {
    color: '#3f51b5',
    textAlign: 'center',
    fontFamily: 'OpenSans-Regular', // Adicione sua fonte personalizada aqui
  },
});
export default App;
