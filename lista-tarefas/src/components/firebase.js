import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAuZ8nxI1H9D-mFZQ9wGL-xLzqsSRDXYBo',
  authDomain: 'react-essencial-745ed.firebaseapp.com',
  databaseURL: 'https://react-essencial-745ed.firebaseio.com',
  projectId: 'react-essencial-745ed',
  storageBucket: 'react-essencial-745ed.appspot.com',
  messagingSenderId: '447708156828',
  appId: '1:447708156828:web:acc4fab9c7c7ef125aee59'
}
// Initialize Firebase
firebase.initializeApp(config)

export default firebase
