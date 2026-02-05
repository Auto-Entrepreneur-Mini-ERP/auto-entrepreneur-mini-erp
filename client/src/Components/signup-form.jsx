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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Link } from "react-router"



const items = [
  { label: "Service", value: "SERVICE" },
  { label: "Commerce", value: "COMMERCE" },
  { label: "Mixed", value: "MIXED" },
]


export function SignupForm({
  className,
  ...props
}) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup className="flex flex-col gap-3">
        <div className="flex flex-col items-start gap-1 text-center mb-2">
          <h1 className="text-2xl font-bold text-[#2D3194]">Create Account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Fill in your details to get started
          </p>
        </div>
        <div className="flex flex-row gap-3">
          <Field>
            <FieldLabel htmlFor="name">First Name</FieldLabel>
            <Input name="firstName" type="text" placeholder="John" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="name">Last Name</FieldLabel>
            <Input name="lastName" type="text" placeholder="Doe" required />
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input name="email" type="email" placeholder="john.doe@example.com" required />
          <FieldDescription>
            We&apos;ll use this to contact you. We will not share your email.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="name">Business Name</FieldLabel>
          <Input name="businessName" type="text" placeholder="Business Name" required />
        </Field>

        <Field>
          <FieldLabel htmlFor="activityType">Activity Type</FieldLabel>
          <Select items={items}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Activity Types</SelectLabel>
                {items.map((item) => (
                  <SelectItem key={item.value} value={item.value} name="activityType">
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>

        <Field>
          <FieldLabel htmlFor="name">ICE</FieldLabel>
          <Input name="ice" type="number" placeholder="ICE Number" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input name="password" type="password" placeholder="Password" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
          <Input name="confirm-password" type="password" placeholder="Password Confirmation" required />
        </Field>
        <Field className="mt-5">
          <Button className="bg-[#2D3194] py-5 cursor-pointer hover:bg-[#4d51c9]" type="submit">Create Account</Button>
        </Field>
        <Field>
          <FieldSeparator className="mt-3">Already have an account?</FieldSeparator>
          <FieldDescription className="px-6 text-center">
             <Link className="text-md text-[#2D3194]" to="/login">Sign In Instead</Link>
          </FieldDescription>
        </Field>
        <Field className="mt-3">
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
