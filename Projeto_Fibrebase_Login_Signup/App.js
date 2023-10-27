import { Text, View, StyleSheet, TextInput, TouchableHighlight } from 'react-native';
import {useState, useEffect} from 'react';
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBV0APFfuBZ1NaiBP0yUQe5FCZ1GfpH4RQ',
  authDomain: 'tdspr-31ee8',
  projectId: 'tdspr-31ee8',
  databaseURL: 'tdspr-31ee8-default-rtdb.firebaseio.com'
}

export default function App() {
  if (!firebase.apps.length) firebase.initializeApp(config)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [dtNasc, setDtNasc] = useState('')
  const auth = firebase.auth()
  const db = firebase.database()
  const [newUser, setNewUser] = useState(false)
  const [logado, setLogado] = useState({
      uid: ''
    }
  )

  const onAuthStateChanged = (user) => {
    setLogado(user)
    console.log(user)
  }

  useEffect(() => {
      const subcriber = auth.onAuthStateChanged(onAuthStateChanged)
      return subcriber
  })


  logUser = async () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(user => setLogado(user))
      .catch(error => console.log(error))
  }

  createUser = async (
      nome, sobrenome, telefone, email, dtNasc, password, repeatPassword
    ) => {
      console.log(password, repeatPassword)
      if(password === repeatPassword) {
        auth
          .createUserWithEmailAndPassword(email, password)
          .then(user => saveUserToDataBase(nome, sobrenome, telefone, email, dtNasc, user.user.uid))
          .catch(error => console.log(error))
      } else {
        alert('As senhas não são identicas!')
      }
   
  }

  logoffUser = async () => {
    auth
      .signOut()
      .then(() => console.log('Usuário deslogado'))
      .catch(error => console.log(error))
  }

  saveUserToDataBase = (nome, sobrenome, email, telefone, dtNasc, uid) => {
    db
      .ref(`users/${uid}`)
      .set({
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        telefone: telefone,
        dtNasc: dtNasc
        })
  }

  getUserFromDataBase = (uid) => {
    console.log(uid)
    db
      .ref(`users/${uid}`)
      .once('value', (snapshot) => {
        console.log(snapshot.val())
      })
  }
  
  if(logado) {
    return (
      <View>
        <TouchableHighlight onPress={() => logoffUser()} style={styles.button}>
          <Text style={styles.buttonText}>Deslogar</Text>
        </TouchableHighlight>

      <TouchableHighlight onPress={() => getUserFromDataBase(logado.uid)} style={styles.button}>
          <Text style={styles.buttonText}>Recuperar dados</Text>
        </TouchableHighlight>
      </View>
    )
  } else if(newUser) {
    return(
      <View>
        <TextInput placeholder="Nome" style={styles.textInput} 
        onChangeText={nome => setNome(nome)}/>
        <TextInput placeholder="Sobrenome" style={styles.textInput}
        onChangeText={sobrenome => setSobrenome(sobrenome)}/>
        <TextInput placeholder="Telefone" style={styles.textInput}
        onChangeText={telefone => setTelefone(telefone)}/>
        <TextInput placeholder="Email" style={styles.textInput}     onChangeText={email => setEmail(email)}/>
        <TextInput placeholder="Data de Nascimento" style={styles.textInput}onChangeText={dtNasc => setDtNasc(dtNasc)}/>
        <TextInput placeholder="Senha" style={styles.textInput} secureTextEntry={true} onChangeText={password => setPassword(password)}/>
        <TextInput placeholder="Repita sua senha" style={styles.textInput}
        secureTextEntry={true} 
        onChangeText={password => setRepeatPassword(password)}/>

      <TouchableHighlight onPress={() => createUser(
        nome, sobrenome, telefone, email, dtNasc, password, repeatPassword
      )} style={styles.button}>
        <Text style={styles.buttonText}>Criar usuário</Text>
      </TouchableHighlight>
        <Text>Já tem cadastro? Faça login</Text>
        <TouchableHighlight onPress={() => setNewUser(false)} style={styles.button}>
        <Text style={styles.buttonText}>Fazer login</Text>
      </TouchableHighlight>
      </View>
    )
  } 
  else {
    return (
      <View>
        <TextInput
          onChangeText={text => setEmail(text)}
          style={styles.textInput} placeholder="Email"
        />
        <TextInput 
          onChangeText={text => setPassword(text)}
          style={styles.textInput} placeholder="Senha" 
        />
        <TouchableHighlight onPress={() => logUser()} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => setNewUser(true)} style={styles.button}>
          <Text style={styles.buttonText}>SignUp</Text>
        </TouchableHighlight>
        <Text></Text>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10
  },
  button: {
    backgroundColor: 'blue',
    height: 40,
    marginBottom: 10
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
});
