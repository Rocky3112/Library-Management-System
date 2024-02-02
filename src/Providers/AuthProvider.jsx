/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";

 

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const createUser = async (email, password) => {
        setLoading(true);
        try {
          const result = await createUserWithEmailAndPassword(auth, email, password);
          // Additional logic if needed
          return result;
        } catch (error) {
          console.error("Error creating user:", error.message);
          throw error; // Re-throw the error to propagate it to the component
        } finally {
          setLoading(false);
        }
      };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
      // console.log(photo);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

  //   useEffect(() => {
  //     const unsubscribe = onAuthStateChanged(auth, currentUser => {
  //         setUser(currentUser);
  //         console.log('current user', currentUser);

  //         // get and set token
  //         if(currentUser){
  //             axios.post('http://localhost:5000/jwt', {email: currentUser.email})
  //             .then(data =>{
  //                 // console.log(data.data.token)
  //                 localStorage.setItem('access-token', data.data.token)
  //                 setLoading(false);
  //             })
  //         }
          
  //         else{
  //             localStorage.removeItem('access-token')
  //         }

          
  //     });
  //     return () => {
  //         return unsubscribe();
  //     }
  // }, [])
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      // console.log('currentUser',currentUser);
      if (currentUser) {
        axios.post('http://localhost:5000/jwt', { email: currentUser.email })
          .then(data => {
            // console.log(data.data.token);
            localStorage.setItem('access-token', data.data.token)
          }).catch(error => {
            console.log(`Error:`, error.message);
          })
          setLoading(false)
      }
      else {
        localStorage.removeItem('access-token')
        setLoading(false)
      }
    })
    return () => {
      return unsubscribe()
    }
  }, [])

  const authInfo = {
    user,
    createUser,
    loading,
    signIn,
    logOut,
    googleSignIn,
    updateUserProfile
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
