import { Button, Field, FormHeading, Input, Label } from "../../components/ui";

const Login = () => {

  return (
    <form className="w-full max-w-md space-y-6">
      <FormHeading>Login to Restaurant</FormHeading>

      <Field>
        <Label>Email</Label>
        <Input name="email" type="email" placeholder="Enter your email" />
      </Field>

      <Field>
        <Label>Password</Label>
        <Input name="password" type="password" placeholder="Enter your password" />
      </Field>

      <Button size={"md"} fullWidth>Login</Button>
    </form>
  )
}

export default Login
