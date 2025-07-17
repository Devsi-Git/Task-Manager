import supabase from "./supabase";

export async function getCarts() {
  const { data, error } = await supabase
    .from("carts")
    .select("*")
    .order("createdAt", { ascending: false });

  if (error) {
    console.error(error);
    return -1;
  }
  return data;
}

export async function addCart(newCart) {
  const { data, error } = await supabase.from("carts").insert([newCart]);

  if (error) {
    console.error(error);
    return -1;
  }
  return data;
}

export async function delCart(id) {
  const { error, data } = await supabase.from("carts").delete().eq("id", id);

  if (error) {
    console.error(error);
    return -1;
  }
  return data;
}

export async function updateCart(newData, id) {
  const { data, error } = await supabase
    .from("carts")
    .update(newData)
    .eq("id", id)
    .select();

  if (error) {
    console.error(error);
    return -1;
  }
  return data;
}
