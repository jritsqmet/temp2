import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";
import { getAuth} from "firebase/auth";

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDCsynZepPniUAWQsOwP5YLEuiV8jUKZxc",
  authDomain: "app-login-13c72.firebaseapp.com",
  databaseURL: "https://app-login-13c72-default-rtdb.firebaseio.com",
  projectId: "app-login-13c72",
  storageBucket: "app-login-13c72.appspot.com",
  messagingSenderId: "580578977514",
  appId: "1:580578977514:web:97271898b9238fef9e1993"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
//export const auth = getAuth(app);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const storage = getStorage(app);

