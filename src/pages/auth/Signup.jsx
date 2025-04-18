import { Button, Field, FormHeading, Input, Label } from "../../components/ui";

const Signup = () => {
  return (
    <form className="w-full max-w-md space-y-6">
      <FormHeading>Create a New Account</FormHeading>

      {/* Name Field */}
      <Field>
        <Label>Name</Label>
        <Input name="name" type="text" placeholder="Enter your full name" />
      </Field>

      {/* Email Field */}
      <Field>
        <Label>Email</Label>
        <Input name="email" type="email" placeholder="Enter your email" />
      </Field>

      {/* Password Field */}
      <Field>
        <Label>Password</Label>
        <Input name="password" type="password" placeholder="Enter your password" />
      </Field>

      {/* Confirm Password Field */}
      <Field>
        <Label>Confirm Password</Label>
        <Input name="confirmPassword" type="password" placeholder="Confirm your password" />
      </Field>

      {/* Submit Button */}
      <Button size={"md"} fullWidth>
        Sign Up
      </Button>
    </form>
  );
};

export default Signup;
