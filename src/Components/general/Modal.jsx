//eslint-disable-next-line
import { motion } from "motion/react";
import { useUi } from "../../services/Uicontext";
import { useEffect, useRef } from "react";

function Modal({ styles, children }) {
  const { setModalCart, setModalTask, setCartToEdit } = useUi();
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalCart(null);
        setModalTask(false);
        setCartToEdit({});
      }
    };
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setModalTask(false);
        setModalCart(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [setModalCart, setModalTask, setCartToEdit]);

  return (
    <motion.div
      ref={modalRef}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      className={`${styles} `}
    >
      {children}
    </motion.div>
  );
}

export default Modal;
