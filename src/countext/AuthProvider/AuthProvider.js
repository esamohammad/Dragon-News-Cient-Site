import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signIn, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../Firebase/Firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app); //π¨βπ¨βπ§βπ¦π¨βπ¨βπ§βπ¦
//jehetu ache tai no parameterπ¨βπ¨βπ§βπ¦π¨βπ¨βπ§βπ¦


const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const providerLogin = (provider) => {
      setLoading(true);
      return signInWithPopup(auth, provider);
   }



   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password)
   }


   const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   }


   //register ar user name and photo store-ππ
   const updateUserProfile = (profile) => {
      return updateProfile(auth.currentUser, profile);
   }


   //send verification mail-π¨βπ¨βπ§βπ¦π¨βπ¨βπ§βπ¦
   const verifyEmail = () => {
      return sendEmailVerification(auth.currentUser);
   }




   const logOut = () => {
      setLoading(true);
      return signOut(auth);
   }



   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         console.log('inside auth state change', currentUser);

         if (currentUser === null || currentUser.emailVerified) {
            setUser(currentUser);
         }
         //email verification hard-tricky.
         // πππ Nevigation Block

         setLoading(false);
      });

      return () => {
         unsubscribe();
      }

   }, [])





   const authInfo = {
      user,
      loading,
      providerLogin,
      logOut,
      updateUserProfile, //ππ
      verifyEmail,//π¨βπ¨βπ§βπ¦π¨βπ¨βπ§βπ¦
      setLoading, // E.V - loading error
      createUser,
      signIn
   };

   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;