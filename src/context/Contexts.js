import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from '../firebase/Firebase';



export const AuthContext=createContext()
const Contexts = ({children}) => {
    const user={"name":"akash biswas here"}
    const [muser,setMuser]=useState([])
    const Provider= new GoogleAuthProvider()
    const auth=getAuth(app)

    const loginGoogle=()=>{
        return signInWithPopup(auth,Provider);
    }
    const logoutGoogle=()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentstate=>{
            setMuser(currentstate)
        });
        return ()=>{
            return unsubscribe();
        }
    },[])

    const info={user,loginGoogle,muser,logoutGoogle}
    return (
      
            <AuthContext.Provider value={info}>
                {children}
            </AuthContext.Provider>
 
    );
};

export default Contexts;