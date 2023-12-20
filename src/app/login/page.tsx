"use client";

import Link from "next/link";
import InputField from "../components/input";
import LogoWeb from "../components/logo-web";
import Button from "../components/button";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import BriefMessage from "../components/brief-message";

type Props = {
  searchParams?: Record<"callbackUrl" | "error", string>;
};

export default function LoginPage(props: Props) {
  const userEmail = React.useRef("");
  const pass = React.useRef("");

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const resp = await signIn("credentials", {
      email: userEmail.current,
      password: pass.current,
      redirect: true,
      callbackUrl: window.location.origin + "/dashboard",
    });

  };

  const authError = props.searchParams && props.searchParams.error;

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="mb-20">
        <LogoWeb width={220} className="mb-4 mx-auto"/>
        <div className="p-8 border container mx-auto max-w-md rounded-md bg-white shadow-sm">
        <h3 className="text-center font-black text-slate-700">Sign in</h3>

          <form onSubmit={submitHandler}>
            <InputField
              name="email"
              type="email"
              label="Email"
              onChange={(e) => (userEmail.current = e.target.value)}
            />
            <InputField
              name="password"
              type="password"
              label="Password"
              onChange={(e) => (pass.current = e.target.value)}
            />

            <div className="flex flex-col gap-3">
              <Button type="submit" className="mr-0" disabled={false}>
                Sign In
              </Button>
              <Link href={"/"} className="text-center text-gray-400">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
      {!!authError && <BriefMessage type="error" text='Authentification failed' />}
    </div>
  );
}


