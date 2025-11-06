import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerUserSchema,
  RegisterUserType,
} from "@/_validators/register-validators";

export const useRegister = () => {
  const form = useForm({
    resolver: zodResolver(registerUserSchema),
  });

  const onSubmit = async (data: RegisterUserType) => {
    // Fazer o cadastro do usuario e redirecionar para o dashboard
  };

  return {
    form,
    onSubmit,
  };
};
