import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth } from '../firebase'

export default function useSignup() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const signUp = async (email,password) => {
      try {
        setLoading(true);
        let res = await createUserWithEmailAndPassword(auth, email, password);
        setLoading(false);
        setError(null);
        return res.user;
      } catch (e) {
        setLoading(false);
        setError(e.message);
      }
    };

    return { loading, error, signUp };
}
