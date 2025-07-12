import { createContext, useContext, useState } from "react";

const UiContext = createContext();

function UiProvider({ children }) {
  const [modalTask, setModalTask] = useState(false);
  const [modalCart, setModalCart] = useState(null);
  const [menu, setMenu] = useState(false);
  

  return (
    <UiContext.Provider
      value={{
        modalTask,
        modalCart,
        setModalCart,
        menu,
        setModalTask,
        setMenu,
      }}
    >
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
