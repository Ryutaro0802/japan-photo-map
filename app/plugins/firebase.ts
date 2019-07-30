import firebase from 'firebase'

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyBUTSm4tcsB4vr6lT8e-jiChZTkNnVzQ9M",
        authDomain: "japanphotomap.firebaseapp.com",
        databaseURL: "https://japanphotomap.firebaseio.com",
        projectId: "japanphotomap",
        storageBucket: "japanphotomap.appspot.com",
        messagingSenderId: "228187084026",
        appId: "1:228187084026:web:e24f0c60ff4c1d22"
    })
}

export default firebase