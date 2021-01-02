import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  rules: {
    '.read': 'now < 1611129600000', // 2021-1-20
    '.write': 'now < 1611129600000', // 2021-1-20
  },
  apiKey: 'AIzaSyAF6UltQdPNx5IXxj5092wo2OSi5ZjU2yM',
  authDomain: 'catch-of-the-day-roo-beanz.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-roo-beanz-default-rtdb.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;
