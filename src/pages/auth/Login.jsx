import { useForm } from "react-hook-form";
import { Button, Field, FormHeading, Input, InputErrorMessage, Label } from "../../components/ui";
import { loginSchema } from "../../validation/loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onChange"
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-6">
      <FormHeading>Login to Restaurant</FormHeading>

      <Field>
        <Label>Email</Label>
        <Input
          {...register("email")}
          isError={!!errors["email"]}
          type="email"
          placeholder="Enter your email"
        />
        {errors.email && <InputErrorMessage>{errors.email.message}</InputErrorMessage>}
      </Field>

      <Field>
        <Label>Password</Label>
        <Input
          {...register("password")}
          isError={!!errors["password"]}
          type="password"
          placeholder="Enter your password"
        />
        {errors.password && <InputErrorMessage>{errors.password.message}</InputErrorMessage>}
      </Field>

      <Button size={"md"} fullWidth type="submit">
        Login
      </Button>
    </form>
  );
};

export default Login;
