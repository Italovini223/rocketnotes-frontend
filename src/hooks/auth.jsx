import {createContext, useContext, useState, useEffect} from 'react';

import { api } from '../services/api';

const AuthContext= createContext({});

function AuthProvider({children}){
  const [data, setData] = useState({});
 
  async function singIn({email, password}) {
    
    try{
     const response =  await api.post('/sessions', {email, password});

     const {token, user} = response.data;
    
     localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
     localStorage.setItem("@rocketnotes:token",token);

     api.defaults.headers.authorization = `Bearer ${token}`;
     setData({user, token});

    } catch(error){
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível fazer login, Favor tenter novamente!");
      }
      
    }
  }

  function singOut() {
    localStorage.removeItem('@rocketnotes:user');
    localStorage.removeItem('@rocketnotes:token');

    setData({});
  }
  

  useEffect(() => {
    const token = localStorage.getItem("@rocketnotes:token");
    const user = localStorage.getItem("@rocketnotes:user");

    if(user && token) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, [])

  return(
    <AuthContext.Provider value={{singIn, user: data.user, singOut}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context =  useContext(AuthContext);

  return context;
}

export {AuthProvider, useAuth};