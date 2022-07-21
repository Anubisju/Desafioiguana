import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCUaHC3l-0P8u4ldbg6pkjuczWoZy-zqmQ",
    authDomain: "vueauth-32dba.firebaseapp.com",
    projectId: "vueauth-32dba",
    storageBucket: "vueauth-32dba.appspot.com",
    messagingSenderId: "782985823973",
    appId: "1:782985823973:web:7887c571925f03d169f60c"
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }