import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyBdfi1hqFVXFUEf_kFK7IQe-3tW9bzsgw8",
	authDomain: "base-db-a3ad7.firebaseapp.com",
	projectId: "base-db-a3ad7",
	storageBucket: "base-db-a3ad7.appspot.com",
	messagingSenderId: "1019876385692",
	appId: "1:1019876385692:web:072e323eb2a15184695e59",
	measurementId: "G-50HWWTSL1L"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
