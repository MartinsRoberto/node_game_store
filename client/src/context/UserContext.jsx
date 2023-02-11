import { createContext, useReducer, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const check = useReducer(reducer)

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;

};

const reducer = (state, action) => {
  switch(action.type){
    case 'LOGIN':
      localStorage.setItem("login", user.email)
      navigate("/")
  }
}