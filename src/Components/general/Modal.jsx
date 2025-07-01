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
          className={`${styles} flex flex-col gap-2 w-fitt p-4 z-80 self-center rounded-2xl bg-amber-300`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <VscCloseAll
            className="cursor-pointer"
            onClick={() => setModal(false)}
          />
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
