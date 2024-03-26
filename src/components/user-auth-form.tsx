"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn, isVariableValid } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { type HTMLAttributes } from "react";
import { FcGoogle } from "react-icons/fc";

function UserAuthForm({
  className,
  ...props
}: Readonly<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <TryComponents />
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      {/* TODO: Implement Google login with Firebase*/}
      <Button
        variant="secondary"
        className="flex items-center justify-center gap-2"
        onClick={() => console.log("Google login")}
      >
        <FcGoogle className="h-6 w-6" />
        Continue with Google
      </Button>
    </div>
  );
}

function TryComponents() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const method = searchParams.get("method");
  const email = searchParams.get("email");
  const phone = searchParams.get("phone");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));

    params.set("email", event.target.value);
    const search = params.toString();
    const query = search ? `?${search}` : "";

    router.replace(`${pathname}${query}`, {
      scroll: false,
    });
  };

  if (method === "phone")
    return (
      <>
        <div className="grid gap-1">
          <Label
            className="text-sm font-light text-foreground/60"
            htmlFor="email"
          >
            Phone
          </Label>
          <Input
            id="phone"
            placeholder="+989123456789"
            type="phone"
            autoCapitalize="none"
            autoComplete="phone"
            autoCorrect="off"
            // disabled={isLoading}
            // onChange={handlePhoneChange}
            required
          />
          {isVariableValid(phone) && (
            <p className="mt-2 text-sm text-red-700">
              Phone Number is not valid.
            </p>
          )}
        </div>
        <Button
          type={"button"}
          // onClick={onSubmitPhone}
          // disabled={isLoading || !isIranianPhoneNumberValid(phone)}
        >
          {/*{isLoading && <Loader className="mr-2 h-4 animate-spin" />}*/}
          Login with Phone
        </Button>
      </>
    );

  return (
    <>
      <div className="grid gap-1">
        <Label
          className="text-sm font-light text-foreground/60"
          htmlFor="email"
        >
          Email
        </Label>
        <Input
          id="email"
          placeholder="name@example.com"
          type="email"
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect="off"
          // disabled={isLoading}
          onChange={handleEmailChange}
          required
        />
      </div>
      <Button
      // onClick={onSubmitEmail}
      // disabled={isLoading || !isEmailValid(email)}
      >
        {/*{isLoading && <Loader className="mr-2 h-4 animate-spin" />}*/}
        Login with Email
      </Button>
    </>
  );
}
function VerifyComponents() {
  return (
    <>
      <div className="grid gap-1">
        <Label
          className="text-sm font-light text-foreground/60"
          htmlFor="email"
        >
          One-Time Password
        </Label>
        <Input
          placeholder="12345"
          // disabled={isLoading}
          // onChange={handleOTPChange}
          required
        />
      </div>
      <Button
      // onClick={onVerifyOTP}
      // disabled={isLoading}
      >
        {/*{isLoading && <Loader className="mr-2 h-4 animate-spin" />}*/}
        Submit
      </Button>
    </>
  );
}

export default UserAuthForm;
