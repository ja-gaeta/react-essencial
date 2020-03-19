import firebase from 'firebase'

//*********************************
// ATENÇÃO: Substitua as configurações abaixo com as do seu projeto
// pessoal no Firebase.
//

const config = {
  apiKey: '<copie suas configurações pessoais>',
  authDomain: '<copie suas configurações pessoais>',
  databaseURL: '<copie suas configurações pessoais>',
  projectId: '<copie suas configurações pessoais>',
  storageBucket: '<copie suas configurações pessoais>',
  messagingSenderId: '<copie suas configurações pessoais>',
  appId: '<copie suas configurações pessoais>'
}
// Initialize Firebase
firebase.initializeApp(config)

export default firebase
