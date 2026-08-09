import { createContext, useState } from "react";

const PartContext = createContext();

export const PartContextProvider = ({ children }) => {
  const [part, setPart] = useState("");

  return (
    <PartContext.Provider value={{ part, setPart }}>
      {children}
    </PartContext.Provider>
  );
};

export default PartContext;