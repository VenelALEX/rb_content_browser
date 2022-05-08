/*
author:       Alexander BRENNER
description:  WingBrowser - Small Content browser web application
date:         03/05/22
filename:     firebase-config.js
*/

import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDhdUmrKbIXMxzkxnS4z9mWm4lJMKn1FBM",
    authDomain: "wingbrowser-3573c.firebaseapp.com",
    databaseUrl: "https://wingbrowser-3573c.firebaseio.com",
    projectId: "wingbrowser-3573c",
    storageBucket: "wingbrowser-3573c.appspot.com",
    messagingSenderId: "464524120749",
    appId: "1:464524120749:web:05cd8cbe5aeac1fb76ac24"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;
