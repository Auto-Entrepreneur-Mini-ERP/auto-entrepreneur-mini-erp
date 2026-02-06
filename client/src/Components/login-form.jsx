import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Link } from "react-router";

export function LoginForm({
  className,
  ...props
}) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup className="flex flex-col gap-3">
        <div className="flex flex-col items-start gap-1 text-center">
          <h1 className="text-2xl font-bold text-[#2D3194]">Sign In</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your credentials to access your account
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Link to="/forgot-password" className="ml-auto text-sm underline-offset-4 hover:underline">
              Forgot your password?
            </Link>
          </div>
          <Input id="password" type="password" required />
        </Field>
        <Field className="mt-5">
          <Button className="bg-[#2D3194] py-5 cursor-pointer hover:bg-[#4d51c9]" type="submit">Sign In</Button>
        </Field>
        <Field className="mt-2">
          <FieldSeparator className="mt-3">New to ICSA Group?</FieldSeparator>
          <FieldDescription className="px-6 text-center">
             <Link className="text-md text-[#2D3194]" to="/register">Create an Account</Link>
          </FieldDescription>
        </Field>
        <Field className="mt-8">
          <FieldDescription className="px-6 text-center">
             Need help? Contact IT Support at
             <br />
             <Link className="text-md text-[#2D3194]" to="#">contact@orange.com</Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
