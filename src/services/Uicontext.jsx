import { createContext, useContext, useState } from "react";

const UiContext = createContext();

function UiProvider({ children }) {
  const [menu, setMenu] = useState(false);
  const [modalTask, setModalTask] = useState(false);
  const [modalCart, setModalCart] = useState(null);
  const [cartToEdit, setCartToEdit] = useState({});

  return (
    <UiContext.Provider
      value={{
        setCartToEdit,
        cartToEdit,
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
