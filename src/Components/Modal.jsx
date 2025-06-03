import { VscCloseAll } from "react-icons/vsc";
//eslint-disable-next-line
import { AnimatePresence, motion } from "motion/react";
import { useUi } from "../services/Uicontext";

function Modal({styles}) {
  const { modal, setModal } = useUi();
  return (
    <AnimatePresence>
      {modal && (
        <motion.div
          className={`top-2 ${styles} z-80 self-center bg-amber-500`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <VscCloseAll onClick={() => setModal(false)} />
       
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
