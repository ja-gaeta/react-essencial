import firebase from 'firebase'

//*********************************
// ATENÇÃO: Substitua as configurações abaixo com as do seu projeto
//          pessoal no Firebase.
//

const config = {
  apiKey: 'AIzaSyAuZ8nxI1H9D-mFZQ9wGL-xLzqsSRDXYBo',
  authDomain: 'react-essencial-745ed.firebaseapp.com',
  databaseURL: 'https://react-essencial-745ed.firebaseio.com',
  projectId: 'react-essencial-745ed',
  storageBucket: 'use sua configuração pessoal',
  messagingSenderId: 'use sua configuração pessoal',
  appId: 'use sua configuração pessoal'
}
// Initialize Firebase
firebase.initializeApp(config)

export default firebase
