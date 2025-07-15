import { addCart, updateCart } from "../../services/apiCarts";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUi } from "../../services/Uicontext";
import Input from "../general/Input";
import Loader from "../general/Loader";
import Btn from "../general/Btn";

function AddTaskForm() {
  const queryClinet = useQueryClient();
  const { setModalTask, cartToEdit, setCartToEdit } = useUi();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: cartToEdit,
  });

  const { mutate: creatCart, isPending: isCreating } = useMutation({
    mutationFn: addCart,
    onSuccess: () => {
      queryClinet.invalidateQueries({ queryKey: ["carts"] });
      setModalTask(false);
      reset();
    },
  });

  const { mutate: editCart, isPending: isEditing } = useMutation({
    mutationFn: ({ newData, id }) => updateCart(newData, id),
    onSuccess: () => {
      queryClinet.invalidateQueries({ queryKey: ["carts"] });
      setModalTask(false);
      reset();
    },
  });

  function onSubmit(data) {
    let id = cartToEdit.id;
    if (id) {
      editCart({ newData: data, id });
      setCartToEdit({});
    } else {
      creatCart(data);
    }
  }

  function onError(err) {
    console.log(err);
  }

  return (
    <form
      className="flex flex-col gap-2 w-fitt"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <Input
        placeholder={"موضوع فعالیت"}
        type="text"
        {...register("subject", {
          required: "موضوع فعالیت نمیتواند خالی باشد",
          validate: (value) => {
            return (
              value.length <= 35 || "نام فعالیت میتواند حداکثر 35 کرکتر باشد."
            );
          },
        })}
      />
      <textarea
        rows="4"
        className="bg-[#fffdf1] px-3 py-2 rounded-xl focus:outline-0 focus:ring-[#FABB18] focus:ring-1 focus:ring-offset-[#F3F3F3] focus:ring-offset-2 w-70 max-500:w-55 placeholder:text-[#cecece] placeholder:text-xs text-sm transition-all scrollbar-hide"
        {...register("description", {
          validate: (value) => {
            return (
              value.length <= 295 || "نام فعالیت میتواند حداکثر 35 کرکتر باشد."
            );
          },
        })}
        placeholder="توضیحات این  فعالیت"
      ></textarea>
      <label className="flex space-x-3 mt-2 text-sm">
        <input type="radio" value="برای انجام" {...register("status")} />
        <p>برای انجام</p>
      </label>
      <label className="flex space-x-3 text-sm">
        <input type="radio" value="درحال انجام" {...register("status")} />
        <p>درحال انجام</p>
      </label>
      <label className="flex space-x-3 text-sm">
        <input type="radio" value="انجام شده" {...register("status")} />
        <p>انجام شده</p>
      </label>
      {isCreating || isEditing ? <Loader /> : <Btn>ثبت فعالیت</Btn>}
    </form>
  );
}

export default AddTaskForm;
