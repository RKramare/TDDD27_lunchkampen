import { app } from "./firebase.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { user } from "./user.js";
import { storeUser } from "./firestore.js";

const auth = getAuth(app);

onAuthStateChanged(auth, (/** @type {any} */ firebaseUser) => {
    if (firebaseUser) {
        user.set(firebaseUser);
    } else {
        user.set(null);
    }
});


/**
 * @param {string} email
 * @param {string} password
 * @param {string} name
 */
async function register(email, password, name) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password
        );
        console
            .log("User registered: ", userCredential.user.uid);

        const doc = await storeUser(
            userCredential.user.uid,
            email,
            name
        );
        console.log("User stored: ", doc);
        return userCredential;
    }   
    catch (e) {
        console.error(e);
        return null;
    }
}


/**
 * @param {string} email
 * @param {string} password
 */
async function login(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in: ", userCredential.user.uid);
        return userCredential;
    }
    catch (e) {
        console.error(e);
        return null;
    }
}


async function logout() {
    try {
        await signOut(auth);
        console.log("User logged out");
    }
    catch (e) {
        console.error(e);
    }
}


export { register, login, logout };