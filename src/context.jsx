import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import {auth} from './firebase'

const MyContext = createContext();

function Context({ children }) {

  const [User, setUser] = useState(null);
  
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
  
      return () => unsubscribe(); 
  },[])

  return (
    <MyContext.Provider value={{ User }}>
      {children}
    </MyContext.Provider>
  );
}

export { MyContext, Context };