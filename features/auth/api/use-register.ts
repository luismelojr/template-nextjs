import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUserSchema, RegisterUserType } from "@/_validators/register-validators";

export const useRegister = () => {
  const form = useForm({
    resolver: zodResolver(registerUserSchema),
  });

  const onSubmit = (data: RegisterUserType) => {
    setTimeout(() => {
      console.log(data);
    }, 2000);
  };

  return {
    form,
    onSubmit,
  };
};
