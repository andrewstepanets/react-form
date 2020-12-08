import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();
/*eslint-disable */
export function DataProvider({ children }) {
  const [data, setData] = useState({});

  const setValues = (values) => {
    setData((prevData) => ({
      ...prevData,
      ...values,
    }));
  };

  return (
    <DataContext.Provider value={{ data, setValues }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);
