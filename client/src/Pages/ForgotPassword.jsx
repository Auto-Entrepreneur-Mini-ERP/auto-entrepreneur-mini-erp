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
  Item,
  ItemContent,
} from "@/components/ui/item"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Link } from 'react-router';

function ForgotPassword() {
  return (
    <div className='flex flex-col items-center justify-center h-screen p-0'>
        <div className="min-w-md">
            <Card size="md" className="mx-auto w-full max-w-md pt-0">
                <CardHeader className='flex flex-col gap-1 justify-center items-center bg-[#2D3194] py-12 rounded-t-xl text-center text-white'>
                    <div className=" text-primary-foreground flex size-12 items-center justify-center rounded-2xl w-15 h-15 border-2">
                        <Mail className="size-10 text-[#F8BC00]" />
                    </div>
                    <CardTitle className='text-2xl mt-2'>Mot de passe oublié ?</CardTitle>
                    <CardDescription className='text-white mt-2'>Pas de souci, nous vous enverrons des instructions pour le réinitialiser</CardDescription>
                </CardHeader>
                <CardContent className='py-4'>
                    <form className='flex flex-col gap-1 justify-center items-center '>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="email">Addresse Email</FieldLabel>
                                <Input name="email" type="email" placeholder="m@example.com" required />
                            </Field>
                            <Item variant="outline" className='bg-[#EFF6FF] py-3 text-[#1C398E]' >
                                <ItemContent className='min-w-full'>
                                    <p><span className='font-bold'>Note: </span>Un code de vérification à 6 chiffres sera envoyé à votre adresse email.</p>
                                </ItemContent>
                            </Item>
                            <Field>
                                <Button className="bg-[#2D3194] py-6 cursor-pointer hover:bg-[#4d51c9]" type="submit">Envoyer le code</Button>
                            </Field>
                            <Field>
                                <FieldDescription className="px-6 text-center">
                                    Vous vous souvenez de votre mot de passe ?
                                    <br />
                                    <Link className="text-md text-[#2D3194]" to="/login">Se connecter</Link>
                                </FieldDescription>
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

export default ForgotPassword