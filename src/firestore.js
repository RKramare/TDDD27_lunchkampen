// import { writable } from 'svelte/store';
import { app } from "./firebase.js";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// Create a Firestore database object
const db = getFirestore(app);

const storeScores = async (
            /** @type {Number} */ score, 
            /** @type {Number} */ minutes, 
            /** @type {Number} */ seconds
        ) => {
    try {
    const docRef = await addDoc(collection(db, "scores"), {
        score: score,
        minutes: minutes,
        seconds: seconds,
    });
    console.log("Document written with ID: ", docRef.id);
    } catch (e) {
    console.error("Error adding document: ", e);
    }
};

const readScores = async () => {
    // Get a list of scores
    /**
     * @type {import("@firebase/firestore").DocumentData[]}
     */
    const scores = [];
    const querySnapshot = await getDocs(collection(db, "scores"));
    querySnapshot.forEach((doc) => {
    scores.push(doc.data());
    });
    return scores;
};

const storeUser = async (
    /** @type {string} */ uid,
    /** @type {string} */ email,
    /** @type {string} */ name
) => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            uid: uid,
            email: email,
            name: name,
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

// Export the function
export { storeScores, readScores, storeUser };
