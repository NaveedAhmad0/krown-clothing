import { initializeApp } from "firebase/app";
import {
	setDoc,
	getDoc,
	doc,
	onSnapshot,
	getFirestore,
} from "firebase/firestore";
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
const db = getFirestore();
export default onSnapshot;
export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = doc(db, "users", userAuth.uid);
	const snapShot = await getDoc(userRef);
	// const snapShot = await getDoc(userRef).then((doc) => {
	// console.log(userAuth.uid);
	// });
	if (!snapShot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userRef, {
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log("Error creating user", error.message);
		}
	}
	// if (snapShot.exists) {
	// 	// alert("user Already exists");
	// 	console.log("user already exists", snapShot.exists());
	// }
	return userRef;
	// const docRef = doc(db, "users", "uaz4VWyJb3XPPhQ0Y3YZiI87Bph1");

	// const docSnap = await getDocs(colRef)
	// 	.then((snapshot) => {
	// 		let users = [];
	// 		snapshot.docs.forEach((doc) => {
	// 			users.push({ ...doc.data(), id: doc.id });
	// 		});
	// 		console.log(users);
	// 	})
	// 	.catch((err) => {
	// 		console.log(err.message);
	// 	});

	// if (docSnap) {
	// 	console.log("Document data:", docSnap.data());
	// } else {
	// 	// doc.data() will be undefined in this case
	// 	console.log("No such document!");
	// }
};
