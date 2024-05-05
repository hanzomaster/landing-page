"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth } from "@/lib/firebase/firebase";
import { cn } from "@/lib/utils";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, type HTMLAttributes } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";

function UserAuthForm({
  className,
  ...props
}: Readonly<HTMLAttributes<HTMLDivElement>>) {
  const [user] = useAuthState(auth);
  const router = useRouter();
  if (user) {
    router.replace("/eateries");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailSigningIn, setIsEmailSigningIn] = useState(false);
  const [isGoogleSigningIn, setIsGoogleSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isEmailSigningIn) {
      setIsEmailSigningIn(true);
      // await doSignInWithEmailAndPassword(email, password);
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          router.replace("/eateries");
        })
        .catch((err) => {
          switch (err.code) {
            case "auth/email-already-in-use":
              setErrorMessage("Email already in use");
              break;
            case "auth/weak-password":
              setErrorMessage("Password is too weak");
              break;
            case "auth/invalid-email":
              setErrorMessage("Invalid email");
              break;
            default:
              setErrorMessage(err.message);
              break;
          }
          setIsEmailSigningIn(false);
        });
    }
  };
  const onGoogleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isGoogleSigningIn) {
      setIsGoogleSigningIn(true);
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then(() => {
          router.replace("/eateries");
        })
        .catch((err) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          setErrorMessage(err.message as string);
          setIsGoogleSigningIn(false);
        });
    }
  };
  return (
    <div className={cn("grid gap-6", className)} {...props}>
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
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Label
          className="text-sm font-light text-foreground/60"
          htmlFor="password"
        >
          Password
        </Label>
        <Input
          id="password"
          type="password"
          autoCapitalize="none"
          autoComplete="new-password"
          autoCorrect="off"
          // disabled={isLoading}
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {errorMessage && (
        <p className="text-center text-sm text-red-500">{errorMessage}</p>
      )}
      <Button onClick={onSubmit}>
        {isEmailSigningIn && <Loader className="mr-2 h-4 animate-spin" />}
        Login with Email
      </Button>
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
      <Button
        variant="secondary"
        className="flex items-center justify-center gap-2"
        onClick={(e) => onGoogleSignIn(e)}
      >
        {isGoogleSigningIn ? (
          <Loader className="mr-2 h-4 animate-spin" />
        ) : (
          <FcGoogle className="h-6 w-6" />
        )}
        Continue with Google
      </Button>
    </div>
  );
}

export default UserAuthForm;
