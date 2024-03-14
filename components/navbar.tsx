import { BsGithub } from "react-icons/bs";
import { GrMenu } from "react-icons/gr";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Navbar({}): any {
  return (
    <nav
      className="text-white w-full bg-black fixed h-24 flex justify-between 
      items-center py-10 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24"
    >
      <Link href="/" passHref>
        <div className="flex items-center">
          <Image
            alt="logo"
            className="cursor-pointer w-15"
            src="./images/logo.svg"
            height={0}
            width={50}
          />
          <span className="ml-2 text-lg font-semibold">FIL.IO</span>
        </div>
      </Link>
      <div className="hidden md:flex gap-1 md:gap-2 lg:gap-4 ml-auto">
        <Link href="/" passHref>
          <Button
            variant="ghost"
            className="font-semibold text-md transition-all duration-500 ease-in-out hover:text-white hover:bg-white hover:bg-opacity-20"
          >
            Home
          </Button>
        </Link>
        <Link href="/about" passHref>
          <Button
            variant="ghost"
            className="font-semibold text-md transition-all duration-500 ease-in-out hover:text-white hover:bg-white hover:bg-opacity-20"
          >
            About
          </Button>
        </Link>
        <Link href="/Documentation" passHref>
          <Button
            variant="ghost"
            className="font-semibold text-md transition-all duration-500 ease-in-out hover:text-white hover:bg-white hover:bg-opacity-20 mr-10"
          >
            Documentation
          </Button>
        </Link>
      </div>
      <Link href="https://github.com/Anirban-Saha/Filio.git">
        <Button
          variant="default"
          className="rounded-full w-fit bg-slate-800 gap-2 items-center hidden md:flex transition-all duration-500 ease-in-out hover:bg-white hover:bg-opacity-20"
          size="lg"
        >
          <span>Github </span>
          <span className="text-xl ml-1">
            <BsGithub />
          </span>
        </Button>
      </Link>

      {/* MOBILE NAV */}
      <Sheet>
        <SheetTrigger className="block md:hidden p-3">
          <span className="text-2xl">
            <GrMenu />
          </span>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription>
              <div className="w-full space-y-3">
                <Link href="/">
                  <Button
                    variant="link"
                    className="font-semibold text-md w-full transition-all duration-500 ease-in-out text-black  hover:bg-slate-400 hover:bg-opacity-20"
                  >
                    Home
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="link"
                    className="font-semibold text-md w-full transition-all duration-500 ease-in-out  text-black  hover:bg-slate-400 hover:bg-opacity-20"
                  >
                    About
                  </Button>
                </Link>
                <Link href="/Documentation">
                  <Button
                    variant="link"
                    className="font-semibold text-md w-full transition-all duration-500 ease-in-out  text-black hover:bg-slate-400 hover:bg-opacity-20"
                  >
                    Documentation
                  </Button>
                </Link>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
