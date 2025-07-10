import { VscCloseAll } from "react-icons/vsc";
//eslint-disable-next-line
import { AnimatePresence, motion } from "motion/react";
import { useUi } from "../../services/Uicontext";

function Modal({ styles, children }) {
  const { modal, setModal } = useUi();
  return (
    <AnimatePresence>
      {modal && (
      
        <motion.div
          className={`${styles} `}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <VscCloseAll
            className="mb-2 cursor-pointer"
            onClick={() => setModal(false)}
          />
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
