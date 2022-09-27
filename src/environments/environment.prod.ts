export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyCYBzojhXDAwRe1Y1OIuixZLCJabgTIxT8',
    authDomain: 'aquariummanager-6bf5b.firebaseapp.com',
    databaseURL:
      'https://aquariummanager-6bf5b-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'aquariummanager-6bf5b',
    storageBucket: 'aquariummanager-6bf5b.appspot.com',
    messagingSenderId: '1047656954986',
    appId: '1:1047656954986:web:e093912c4356d7f5d99e13',
    measurementId: 'G-TXPDPMG526',
  },
};
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const app = initializeApp(environment.firebase);
const analytics = getAnalytics(app);
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
