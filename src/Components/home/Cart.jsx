import { useMutation, useQueryClient } from "@tanstack/react-query";
import { delCart } from "../../services/apiCarts";
import { useUi } from "../../services/Uicontext";
import { AnimatePresence } from "motion/react";
import { TiDeleteOutline, TiInputChecked } from "react-icons/ti";
import {
  BiCheckbox,
  BiCheckboxChecked,
  BiEdit,
  BiSolidCheckboxChecked,
} from "react-icons/bi";
import Loader from "../general/Loader";
import Modal from "../general/Modal";
import { IoIosCheckboxOutline, IoMdCheckboxOutline } from "react-icons/io";
import { MdCheckBox } from "react-icons/md";

function Cart({ data }) {
  const queryClinet = useQueryClient();
  const { setModalCart, modalCart, setModalTask, setCartToEdit } = useUi();
  const { isPending, mutate } = useMutation({
    mutationFn: delCart,
    onSuccess: () => {
      queryClinet.invalidateQueries({ queryKey: ["carts"] });
    },
  });

  return (
    <div className="flex flex-col bg-sky-200 hover:shadow-[0_0_10px] hover:shadow-sky-200 px-3 py-2 rounded-2xl rounded-tr-md min-w-50">
      <span className="flex justify-between items-center">
        <button
          className="hover:bg-[#ececec90] px-1 rounded-2xl transition-all cursor-pointer"
          onClick={() => {
            setModalCart(data.id);
          }}
        >
          ◦◦◦
        </button>
        <AnimatePresence>
          {modalCart === data.id && (
            <Modal styles="absolute p-2 flex flex-col items-center w-33 z-80 shadow-lg rounded-2xl bg-amber-200">
              {isPending ? (
                <Loader />
              ) : (
                <>
                  <span
                    onClick={() => {
                      mutate(data.id);
                    }}
                    className="flex justify-between items-center p-1 w-full hover:w-[96%] text-gray-700 text-sm transition-all cursor-pointer"
                  >
                    <p>حذف فعالیت</p>
                    <TiDeleteOutline />
                  </span>

                  <span className="flex bg-[#d2d17b] rounded-2xl w-[93%] h-px"></span>

                  <span
                    onClick={() => {
                      setCartToEdit(data);
                      setModalCart(null);
                      setModalTask(true);
                    }}
                    className="flex justify-between items-center p-1 w-full hover:w-[96%] text-gray-700 text-sm transition-all cursor-pointer"
                  >
                    <p>ویرایش فعالیت</p>
                    <BiEdit />
                  </span>
                </>
              )}
            </Modal>
          )}
        </AnimatePresence>
        <h3 className="text-[#929292] 320:text-xs 740:text-sm text-end">
          {data.createdAt.slice(0, 10)}
        </h3>
      </span>

      <h4 className="mr-3 text-gray-800 320:text-sm 740:text-base">
        {data.subject}
      </h4>

      <p className="my-2 text-gray-800 320:text-[13px] 740:text-sm">
        {data.description}
      </p>

      <span className="flex justify-end -space-x-0.5">
        <BiCheckbox className="text-gray-800" />
        <TiInputChecked className="text-gray-800" />
        <TiInputChecked className="text-gray-800" />
        <TiInputChecked className="text-gray-800" />
      </span>
    </div>
  );
}

export default Cart;
