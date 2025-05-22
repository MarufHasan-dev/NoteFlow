import { createContext, useContext, useState } from "react";

const MobileMenuContext = createContext();

export default function MobileMenuContextProvider({ children }) {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  return (
    <MobileMenuContext.Provider
      value={{ mobileMenuOpened, setMobileMenuOpened }}
    >
      {children}
    </MobileMenuContext.Provider>
  );
}

function useMobileMenuContext() {
  return useContext(MobileMenuContext);
}
export { useMobileMenuContext, MobileMenuContextProvider };
