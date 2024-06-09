import {doc, getDoc} from "firebase/firestore";
import {create} from 'zustand'
import {db} from "./firebase";

export const useUserStore = create((set) => ({
    currentUser: null,
    isLoading: true,
    fetchUserInfo: async (uid) => {
        // If there is no user id, the user had logout
        if (!uid) return set({currentUser: null, isLoading: false})
        const docRef = doc(db, "user", uid);
        const docSnap = await getDoc(docRef);

        try {

            if (docSnap.exists()) {
                set({currentUser: docSnap.data(), isLoading: false})
            } else {
                set({currentUser: null, isLoading: false})
            }

        } catch (err) {
            console.log(err)
            return set({currentUser: null, isLoading: false})
        }
    },
}));
