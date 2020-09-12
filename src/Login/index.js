import React from 'react';
import firebase from '../services/init-firebase'

export default function Login() {

  function showCurrentUser() {
    console.log(firebase.auth().currentUser);
  }

  function handleSignUp() {
    var email = document.getElementById('email-l').value;
    var password = document.getElementById('password-l').value;
    if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }
    if (password.length < 4) {
      alert('Please enter a password.');
      return;
    }
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
  }

  return <>
    <h1>Login</h1>
    <input type="email" id="email-l" placeholder="email" />
    <input type="password" id="password-l" placeholder="password" />
    <button type="submit" onClick={handleSignUp}>Enviar</button>
    <button type="button" onClick={showCurrentUser}>Usuário Logado</button>
  </>
}
