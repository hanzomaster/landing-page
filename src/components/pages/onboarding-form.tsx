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
import ChooseLocation from "@/app/location/locationselector";
import useLocationForm from "@/app/location/useLocationForm";
import Select from "react-select";

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
  const { state, onCitySelect, onDistrictSelect, onWardSelect } = useLocationForm(false);
  const [isDefault, setIsDefault] = useState(false);
  const {
    cityOptions,
    districtOptions,
    wardOptions,
    selectedCity,
    selectedDistrict,
    selectedWard,
  } = state;
  const [disable, setDisable] = useState(true);
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [idAddress, setIdAddress] = useState("");

  const onSubmit = handleSubmit(async (data) => {
    setIsSubmit(true);
  });

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to complete verification
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
          <Select
                      name="cityId"
                      className="my-react-select-container"
                      classNamePrefix="my-react-select"
                      key={`cityId_${selectedCity?.value}`}
                      isDisabled={cityOptions.length === 0 || isDefault}
                      options={cityOptions}
                      onChange={(option) => {
                        if (option) {
                          onCitySelect({
                            value: option.value,
                            label: option.label,
                          });
                        }
                      }}
                      placeholder="Tỉnh/Thành"
                      defaultValue={selectedCity}
                    />

                    <Select
                      name="districtId"
                      key={`districtId_${selectedDistrict?.value}`}
                      isDisabled={districtOptions.length === 0}
                      options={districtOptions}
                      onChange={(option) => {
                        if (option)
                          onDistrictSelect({
                            value: option.value,
                            label: option.label,
                          });
                      }}
                      placeholder="Quận/Huyện"
                      className="z-5 my-react-select-container"
                      classNamePrefix="my-react-select"
                      defaultValue={selectedDistrict}
                    />

                    <Select
                      name="wardId"
                      key={`wardId_${selectedWard?.value}`}
                      isDisabled={wardOptions.length === 0}
                      options={wardOptions}
                      placeholder="Phường/Xã"
                      className="z-5 my-react-select-container"
                      classNamePrefix="my-react-select"
                      onChange={(option) => {
                        if (option) {
                          setDisable(false);
                          onWardSelect({
                            value: option.value,
                            label: option.label,
                          });
                        }
                      }}
                      defaultValue={selectedWard}
                    />
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
