// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCFkxIgRk-LB1VUkwVyv62GwrvqfcYXZFM",
    authDomain: "connectrrapp.firebaseapp.com",
    projectId: "connectrrapp",
    storageBucket: "connectrrapp.appspot.com",
    messagingSenderId: "454878561916",
    appId: "1:454878561916:web:af9ea18c2ce5f8b38eebf9"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
