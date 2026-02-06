import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Mail } from 'lucide-react';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Link } from 'react-router';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Item, ItemContent } from '@/Components/ui/item';

function OTPVerification() {
  return (
    <div className='flex flex-col items-center justify-center h-screen p-0'>
        <div className="min-w-md">
            <Card size="md" className="mx-auto w-full max-w-md pt-0">
                <CardHeader className='flex flex-col gap-1 justify-center items-center bg-[#2D3194] py-12 rounded-t-xl text-center text-white'>
                    <div className=" text-primary-foreground flex size-12 items-center justify-center rounded-2xl w-15 h-15 border-2">
                        <Mail className="size-10 text-[#F8BC00]" />
                    </div>
                    <CardTitle className='text-2xl mt-2'>Vérification par Email</CardTitle>
                    <CardDescription className='text-white mt-2'>Nous avons envoyé un code à 6 chiffres à</CardDescription>
                    <p className='text-[#F8BC00] text-lg'>email@emaple.com</p>
                </CardHeader>
                <CardContent className='py-4'>
                    <form className='flex flex-col gap-1 justify-center items-center'>
                        <FieldGroup>
                            <Field className='min-w-full'>
                                <FieldLabel className='self-center' htmlFor="otp">Entrez le code de vérification</FieldLabel>
                                <InputOTP maxLength={6} nqme="otp" required>
                                    <InputOTPGroup className="gap-2.5 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border">
                                    <InputOTPSlot index={0} />
                                    <InputOTPSlot index={1} />
                                    <InputOTPSlot index={2} />
                                    <InputOTPSlot index={3} />
                                    <InputOTPSlot index={4} />
                                    <InputOTPSlot index={5} />
                                    </InputOTPGroup>
                                </InputOTP>
                                <FieldDescription>
                                    Enter the 6-digit code sent to your email.
                                </FieldDescription>
                            </Field>
                            <Field>
                                <Button className="bg-[#2D3194] py-6 cursor-pointer hover:bg-[#4d51c9]" type="submit">Verifier le code</Button>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
        <div className='min-w-md'>
            <FieldGroup>
                <Field className="mt-8">
                    <FieldDescription className="px-6 text-center">
                        Need help? Contact IT Support at
                        <br />
                        <Link className="text-md text-[#2D3194]" to="#">contact@orange.com</Link>
                    </FieldDescription>
                </Field>
            </FieldGroup>
        </div>
    </div>
  )
}

export default OTPVerification