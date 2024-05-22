// import { writable } from 'svelte/store';
import { app } from "./firebase.js";
import { getFirestore, collection, addDoc, setDoc, getDocs, getDoc, doc } from "firebase/firestore";

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

const readUserRole = async (/** @type {string} */ uid) => {
    const userRoleDoc = await getDoc(doc(db, "roles", uid));
    if (userRoleDoc.exists()) {
        const data = userRoleDoc.data();
        return data ? data.role : "user";
    } else {
        console.error("User has no role");
        return "user";
    }
};

const storeUser = async (
    /** @type {string} */ uid,
    /** @type {string} */ email,
    /** @type {string} */ name
) => {
    try {
        await setDoc(doc(db, "users", uid), {
            uid: uid,
            email: email,
            name: name,
        });
        console.log("User document written with ID: ", uid);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

const readUser = async (/** @type {string} */ uid) => {
    // Get a single user
    const userDoc = await getDoc(doc(db, "users", uid));
    if (!userDoc.exists()) {
        console.log("No such document!");
        return null;
    } else {
        const role = await readUserRole(uid);
        console.log("Document data:", { ...userDoc.data(), role:role });
        return { ...userDoc.data(), role:role };
    }
};

const promoteUser = async (
        // Promote a user to a role
        /** @type {string} */ uid,
        /** @type {string} */ role,
    ) => {
    try {
        
        await setDoc(doc(db, "roles", uid), {
            role: role,
        });
        console.log("User ", uid, " was promoted to: ", role);
    } catch (e) {
        console.error("Error promoting user: ", e);
    }
}

const storeGame = async (
    // Add a game to the database
    /** @type {string} */ gameId,
    /** @type {string} */ uid,
    /** @type {string} */ name,
    /** @type {string} */ url,
    /** @type {boolean} */ isEmbeded = false,
) => {
    try {
        await setDoc(doc(db, "games", gameId), {
            uid: uid,
            name: name,
            url: url,
            isEmbeded: isEmbeded,
        });
        console.log("Document written with ID: ", gameId);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

const readGames = async () => {
    // Get a list of games
    /**
     * @type {import("@firebase/firestore").DocumentData[]}
     */
    const games = [];
    const querySnapshot = await getDocs(collection(db, "games"));
    querySnapshot.forEach((doc) => {
        games.push(doc.data());
    });
    return games;
};

// Export the function
export { storeScores, readScores, storeUser, readUser, promoteUser, storeGame, readGames };
