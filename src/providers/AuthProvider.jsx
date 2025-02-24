import { GoogleAuthProvider } from 'firebase/auth/web-extension';
import React, { createContext, useContext, useEffect, useState } from 'react';
import auth from '../../src/firebase/firebase.config';
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

function AuthProvider({children}) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        // const auth = getAuth();
        // console.log(auth)

        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            console.log(currentUser)
            
            setLoading(false);
            // save current user in db
            // if(currentUser) {
            //     try {
            //        await axios.post(`${import.meta.env.VITE_API_URL}/users/${currentUser?.email}`,{
            //             name: currentUser?.displayName || "Anonymous User",
            //   email: currentUser?.email,
            //   image: currentUser?.photoURL || "",
            //         })
            //         console.log("User saved to database successfully.");
            //     } catch (error) {
            //         console.error("Error saving user to database:", error.message);
            //     }
            // }
            
        });

        return () => unsubscribe(); // Cleanup subscription on unmount
    }, []);



    const authInfo = {
        user,
        loading,
        signInWithGoogle,
        signOutUser,
    }


    return (
        <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
    );
}
export const useAuth = () => {
    return useContext(AuthContext);
  };
export default AuthProvider;