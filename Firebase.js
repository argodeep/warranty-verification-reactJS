import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
import auth from 'firebase/auth'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    databaseURL: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    projectId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    storageBucket: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    messagingSenderId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;