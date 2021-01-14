import React from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyDr7pbZUS9bBy7bJxviYjUQzzC-Ta36QLc",
  authDomain: "super-chat-e2378.firebaseapp.com",
  projectId: "super-chat-e2378",
  storageBucket: "super-chat-e2378.appspot.com",
  messagingSenderId: "949858675008",
  appId: "1:949858675008:web:c98738b231cd49e7bf72a5"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const [user] = useAuthState(auth);


function App() {
  return (
    <div className="App">
      <header >

      </header>
      <section>
        {user ? <ChatRoom/> : <SignIn/>}
      </section>
    </div>
  );
}

function SignIn(){
  const signInWithGoogle = () =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return(
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}Sign Out></button>
  )
}

function ChatRoom(){
  const messagesRef = firestore.collection('messages');
  const query = messages.orderBy('createdAt').limit(25);

}

export default App;
