import firebase from 'firebase'

//*********************************
// ATENÇÃO: Substitua as configurações abaixo com as do seu projeto
//          pessoal no Firebase.
//

const config = {
  apiKey: 'substitua com sua própria configuração',
  authDomain: 'substitua com sua própria configuração',
  databaseURL: 'substitua com sua própria configuração',
  projectId: 'substitua com sua própria configuração',
  storageBucket: 'substitua com sua própria configuração',
  messagingSenderId: 'substitua com sua própria configuração',
  appId: 'substitua com sua própria configuração'
}
// Initialize Firebase
firebase.initializeApp(config)

export default firebase
