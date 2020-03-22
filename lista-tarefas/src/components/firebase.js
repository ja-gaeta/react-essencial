import firebase from 'firebase'

//*********************************
// ATENÇÃO: Substitua as configurações abaixo com as do seu projeto
//          pessoal no Firebase.
//

const config = {
  apiKey: 'use sua configuração pessoal',
  authDomain: 'use sua configuração pessoal',
  databaseURL: 'use sua configuração pessoal',
  projectId: 'use sua configuração pessoal',
  storageBucket: 'use sua configuração pessoal',
  messagingSenderId: 'use sua configuração pessoal',
  appId: 'use sua configuração pessoal'
}
// Initialize Firebase
firebase.initializeApp(config)

export default firebase
