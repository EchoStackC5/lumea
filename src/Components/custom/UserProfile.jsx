import { Button } from "@/Components/ui/button";
import { ChevronDown, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { apiFetcher } from "@/api/client";
import { useNavigate } from "react-router";
import useSWR from "swr";
export default function UserProfile() {
  const navigate = useNavigate();
  // const userId = localStorage.getItem("USER_ID");
  const { data } = useSWR('/users/me/profile/', apiFetcher);

  // function logout(){
  //   localStorage.removeItem("USER_ID"),
  //   navigate("/")
  // }

  return (
    <div className="bg-white max-w-[200px] lg:max-w-2xs py-1 flex items-start text-darkest-heading rounded-full hover:bg-none">
      <DropdownMenu >
        <DropdownMenuTrigger asChild className="ml-auto ">
         <Button variant="ghost" className="flex  hover:bg-transparent border-none">
  {data?.name ? (
    <Avatar className="w-10 ml-[-15px] h-10 border-2 rounded-full border-purple-600">
      <AvatarImage src={data?.profile?.image} alt="userProfile" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ) : (
    <div className="bg-darkest-heading w-10 h-10 flex justify-center items-center rounded-full">
      <User className="w-16 h-16 ml-0 mt-2 text-darkest" />
    </div>
  )}
  <span className="flex text-darkest items-center gap-x-2 text-xs md:text-base font-semibold">
    {data?.name ?? "Unknown User"} <ChevronDown size={16} />
  </span>
</Button>

        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <button><DropdownMenuItem>Logout</DropdownMenuItem></button>

        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}