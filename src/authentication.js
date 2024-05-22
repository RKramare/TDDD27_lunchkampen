import { app } from "./firebase.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { user } from "./user.js";
import { storeUser, readUser } from "./firestore.js";

const auth = getAuth(app);

onAuthStateChanged(auth, async (firebaseUser) => {
    console.log("User state changed", firebaseUser);
    if (firebaseUser) {
        const userDoc = await readUser(firebaseUser.uid);
        if (userDoc) {
            user.set({...firebaseUser, ...userDoc});
        } else {
            console.error("User not found in Firestore");
            user.set(firebaseUser);
        }
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