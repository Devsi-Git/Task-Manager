import supabase from "./supabase";

export async function getCarts() {
  const { data, error } = await supabase.from("carts").select("*");

  return data;
}

export async function creatCart(newCart) {
  const { data, error } = await supabase
    .from("carts")
    .insert([newCart])
    .select();

  if (error) {
    console.error(error);
    return -1;
  }
}
