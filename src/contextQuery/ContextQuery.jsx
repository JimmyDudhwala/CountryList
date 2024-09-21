
import  { createContext, useState } from 'react';

export const ContextQuery = createContext();

/* eslint-disable react/prop-types */
export const ContextQueryProvider = ({ children }) => {
  const [query, setQuery] = useState("");

  return (
    <ContextQuery.Provider value={{ query, setQuery }}>
      {children}
    </ContextQuery.Provider>
  );
};