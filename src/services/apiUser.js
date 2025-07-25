import supabase from "./supabase";

export async function signUpLogin({ email, password, username }) {
  const { data: loginData, error: loginError } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  if (loginError) {
    if (loginError.message.includes("Invalid login")) {
      const { data: signUpData, error: signUpError } =
        await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { username },
          },
        });

      if (signUpError) {
        throw new Error(signUpError.message);
      }
      return signUpData;
    } else {
      throw new Error(loginError.message);
    }
  }

  return loginData;
}

export async function logout() {
  let { error } = await supabase.auth.signOut();

  if (error) throw new Error(error?.message);
}
