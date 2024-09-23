import Image from "next/image";
import { Button } from "./ui/button";
import { CalendarIcon, HomeIcon, LogOutIcon } from "lucide-react";

import { quickSearchOptions } from "../_constants/quickSearchItems";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";

const SidebarSheet = () => {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center gap-3 border-b border-solid py-5">
        <Avatar>
          <AvatarImage src="/Torquati_Avatar.jpg" />
        </Avatar>
        <div>
          <p className="font-bold">Osvaldo Torquati</p>
          <p className="text-sm">torquati.osvaldo@outlook.com</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <Button className="justify-start gap-2" variant="ghost" asChild>
          <SheetClose asChild>
            <Link href="/">
              <HomeIcon size={18} />
              Início
            </Link>
          </SheetClose>
        </Button>
        <Button className="justify-start gap-2" variant="ghost">
          <CalendarIcon size={18} />
          Agendamentos
        </Button>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        {quickSearchOptions.map((option) => (
          <Button
            key={option.title}
            className="justify-start gap-2"
            variant="ghost"
          >
            <Image
              alt={option.title}
              src={option.imageurl}
              height={18}
              width={18}
            />
            {option.title}
          </Button>
        ))}
      </div>

      <div className="flex flex-col gap-2 py-5">
        <Button className="justify-start gap-2" variant="ghost">
          <LogOutIcon size={18} />
          Sair da Conta
        </Button>
      </div>
    </SheetContent>
  );
};

export default SidebarSheet;
