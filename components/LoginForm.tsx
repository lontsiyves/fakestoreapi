"use client";
import Image from "next/image";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { LoginSchema, SignUpSchemaType } from "../app/_lib/loginFormValidation";
import { Ilogin } from "@/interfaces/login";
import { handleSignup } from "../actions/login";

const LoginForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting, isDirty, isValid, errors },
    setError,
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(LoginSchema) });

  const onSubmit = async (formData: Ilogin) => {
    const res = await handleSignup(formData);
    console.log("RESPONCSE: ", res)
    reset();
  };

  return (
    <>
      <div className="max-w-[320] rounded border shadow-md md:grid md:grid-cols-2">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-100 p-10">
          <h1 className="p-10 text-lg uppercase font-bold text-center text-violet-500">
            Connexion
          </h1>

          <label htmlFor="username" className="font-semibold text-gray-700">
            Nom utilisateur
          </label>
          <input
            {...register("username")}
            placeholder="mor_2314"
            className="px-4 py-2 rounded-md w-full text-gray-500 my-4 text-sm shadow"
          />
          {errors.username && (
            <p className="text-sm text-red-500">{errors.username.message}</p>
          )}

          <label htmlFor="password" className="font-semibold text-gray-700">
            Mot de Passe
          </label>
          <input
            {...register("password")}
            type="password"
            placeholder="Mot de passe"
            className="px-4 py-2 rounded-md w-full text-gray-500 my-4 text-sm shadow"
          />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}

          <div className="my-3">
            <button
              type="submit"
              disabled={!isDirty || !isValid || isSubmitting}
              className="rounded p-4 bg-violet-500 text-white uppercase text-sm text-center hover:bg-violet-700 hover:shadow disabled:bg-violet-300"
            >
                {isSubmitting ? 'submitting' : 'Se connecter'}
              
            </button>
          </div>
        </form>
        <div className="hidden md:block md:p-40 md:bg-violet-300">
          <div className="rounded-lg shadow">
            <Image height={500} width={500} src={"/images.jpeg"} alt="login" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
