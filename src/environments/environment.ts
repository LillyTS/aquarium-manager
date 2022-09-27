// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const app = initializeApp(environment.firebase);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
