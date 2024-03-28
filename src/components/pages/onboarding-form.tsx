"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import * as z from "zod";

import { Input } from "@/components/ui/input";
import { phoneRegex } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  firstName: z.string().min(1, {
    message: "First name is required",
  }),
  lastName: z.string().min(1, {
    message: "Last name is required",
  }),
  email: z.string().email({
    message: "Email is required",
  }),
  address: z.string().min(1, {
    message: "Address is required",
  }),
  number: z.string().regex(phoneRegex, "Invalid phone number"),
  type: z.string().min(1, {
    message: "Type is required",
  }),
});

type FormField = z.infer<typeof formSchema>;

function OnboardingForm() {
  const [isSubmit, setIsSubmit] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormField>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      number: undefined,
      type: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    setIsSubmit(true);
    console.log("data", data);
    console.log(isSubmit);
  });

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4" onSubmit={onSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input
                {...register("firstName")}
                id="first-name"
                placeholder="Max"
                required
              />
              {errors.firstName && (
                <p className="text-sm text-destructive">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input
                {...register("lastName")}
                id="last-name"
                placeholder="Robinson"
                required
              />
              {errors.lastName && (
                <p className="text-sm text-destructive">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              {...register("email")}
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="address">Address</Label>
            <Input {...register("address")} id="address" type="text" required />
            {errors.address && (
              <p className="text-sm text-destructive">
                {errors.address.message}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="number">Number</Label>
            <Input
              {...register("number")}
              id="number"
              type="tel"
              required
              placeholder='e.g. "12345678"'
            />
            {errors.number && (
              <p className="text-sm text-destructive">
                {errors.number.message}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="type">Type</Label>
            <Input
              {...register("type")}
              id="type"
              type="text"
              required
              placeholder="e.g. 'Fast food, Cafeterias, Buffets, Casual, ...'"
            />
            {errors.type && (
              <p className="text-sm text-destructive">{errors.type.message}</p>
            )}
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
export default OnboardingForm;
