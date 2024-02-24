export const uiConfig = firebase => {
    return {
        signInFlow: 'popup',
        signInSuccessUrl: '/auth/login',
        // tosUrl: '/terms-of-service',
        // privacyPolicyUrl: '/privacy-policy',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ]
    }
}

export const firebaseConfig = {
    apiKey: "AIzaSyCfmdsC8f0ES8JToXaiWUDPA200XvBq8VA",
    authDomain: "teen-patti-amount-calculater.firebaseapp.com",
    databaseURL: "https://teen-patti-amount-calculater-default-rtdb.firebaseio.com",
    projectId: "teen-patti-amount-calculater",
    storageBucket: "teen-patti-amount-calculater.appspot.com",
    messagingSenderId: "955722564662",
    appId: "1:955722564662:web:0fd56cb9bed6f7b9e60497"
};