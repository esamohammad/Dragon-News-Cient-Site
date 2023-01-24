import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signIn, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../Firebase/Firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app); //👨‍👨‍👧‍👦👨‍👨‍👧‍👦
//jehetu ache tai no parameter👨‍👨‍👧‍👦👨‍👨‍👧‍👦


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


   //register ar user name and photo store-🌟🌟
   const updateUserProfile = (profile) => {
      return updateProfile(auth.currentUser, profile);
   }


   //send verification mail-👨‍👨‍👧‍👦👨‍👨‍👧‍👦
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
         // 💖💖💖 Nevigation Block

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
      updateUserProfile, //🌟🌟
      verifyEmail,//👨‍👨‍👧‍👦👨‍👨‍👧‍👦
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