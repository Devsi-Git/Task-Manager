import { createContext, useContext, useState } from "react";

const UiContext = createContext();

function UiProvider({ children }) {
  const [modal, setModal] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <UiContext.Provider value={{ modal, menu, setModal, setMenu }}>
      {children}
    </UiContext.Provider>
  );
}

function useUi() {
  const context = useContext(UiContext);
  if (!context) {
    throw new Error("error!!!");
  }
  return context;
}

export { UiProvider, useUi };
