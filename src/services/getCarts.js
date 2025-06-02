import supabase from "./supabase";

export async function getCarts() {
  const { data, error } = await supabase.from("carts").select("*");

  if (error) {
    console.error(error);
  }
  console.log(data);

  return data;
}
