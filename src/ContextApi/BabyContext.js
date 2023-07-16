import React, { createContext, useState } from "react";

export const BabyContext = createContext();

const BabyProvider = ({ children }) => {
  const [selectedBabyId, setSelectedBabyId] = useState(null);
  const [selectedBabyDob, setSelectedBabyDob] = useState(null)

  return (
    <BabyContext.Provider value={{ selectedBabyId, setSelectedBabyId,selectedBabyDob, setSelectedBabyDob }}>
      {children}
    </BabyContext.Provider>
  );
};

export default BabyProvider;
