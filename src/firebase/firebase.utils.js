import { initializeApp } from "firebase/app";

// import "firebase/firestore";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDO1yYG_Dc1sKRXW3HUNaNuR1N04rZB1Cs",

	authDomain: "krwn-db-75e28.firebaseapp.com",

	projectId: "krwn-db-75e28",

	storageBucket: "krwn-db-75e28.appspot.com",

	messagingSenderId: "675429162750",

	appId: "1:675429162750:web:a3e4394369a2c571f34faf",

	measurementId: "G-0LDXK4QTES",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
// export const firestore = firebase.firestore();

// provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
	const provider = new GoogleAuthProvider();
	signInWithPopup(auth, provider)
		.then((result) => {
			console.log(result);
		})
		.catch((error) => {
			console.log(error);
		});
};
