import { auth } from "@/lib/firebase/firebase";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Profile = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="Profile image"
            aria-label="Profile image"
            aria-hidden="true"
          />
          <AvatarFallback>VN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>Sign up</DropdownMenuItem>
        <Link href={"/auth/login"}>
          <DropdownMenuItem>Sign in</DropdownMenuItem>
        </Link>
        <DropdownMenuItem
          onClick={() => {
            void auth.signOut();
          }}
        >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;
