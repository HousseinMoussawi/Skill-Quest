import React from 'react'
import { Auth, googlePovider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";

export const LoginWithGoogle = () => {

    const loginWithGoogle = async () => {
        try{
            await signInWithPopup(Auth,googlePovider)
        } catch (err){
            console.log(err)
        }
      }
  return (
    <div>
        <button onClick={loginWithGoogle}>Login with google</button>
    </div>
  )
}
