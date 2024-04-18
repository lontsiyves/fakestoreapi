"use server";

import { Ilogin } from "@/interfaces/login";

export const handleSignup = async (formData: Ilogin) => {
  const { username, password } = formData;
  try {
    const data = await fetch(`${process.env.API_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const res = await data.json();
    return res;
  } catch (error) {
    console.log("error", error);
    //return error;
  }
};
