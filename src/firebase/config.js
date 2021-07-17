import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-Lo2Lrie_5YXLTwIciDUyluqLbiybw30",
  authDomain: "vue-live-chat-e57d2.firebaseapp.com",
  projectId: "vue-live-chat-e57d2",
  storageBucket: "vue-live-chat-e57d2.appspot.com",
  messagingSenderId: "944024687714",
  appId: "1:944024687714:web:6d97c48253c9431691ed3b",
};

// init firebase
firebase.initializeApp(firebaseConfig);

export const projectFirestore = firebase.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const projectAuth = firebase.auth();
