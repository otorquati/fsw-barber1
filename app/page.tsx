import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";
import BookingItem from "./_components/booking-item";

interface QuickSearchOption {
  imageurl: string;
  title: string;
}

const quickSearchOptions: QuickSearchOption[] = [
  {
    imageurl: "/cabelo.svg",
    title: "Cabelo",
  },
  {
    imageurl: "/barba.svg",
    title: "Barba",
  },
  {
    imageurl: "/hidratacao.svg",
    title: "Hidratação",
  },
  {
    imageurl: "/sobrancelha.svg",
    title: "Sobrancelha",
  },
  {
    imageurl: "/massagem.svg",
    title: "Massagem",
  },
  {
    imageurl: "/acabamento.svg",
    title: "Acabemento",
  },
];

const Home = async () => {
  // chamar banco de dados
  const barbershops = await db.barbershop.findMany({});
  const popularbarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Ola, Osvaldo</h2>
        <p>Quinta-feira, 12 de setembro</p>

        {/* Busca */}
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/* BUSCA RÁPIDA - CATEGORIAS */}
        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button className="gap-2" variant="secondary" key={option.title}>
              <Image
                src={option.imageurl}
                alt={option.title}
                width={16}
                height={16}
              />
              {option.title}
            </Button>
          ))}
        </div>
        {/* IMAGEM */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende com os melhores FSW Barber"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/*AGENDAMENTO */}
        <BookingItem />

        {/* RECOMENDADOS */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        {/* POPULARES */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularbarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
        {/* RODAPÉ*/}
        <footer>
          <Card>
            <CardContent className="px-5 py-6">
              <p className="text-sm text-gray-400">
                © Copyright <span className="font-bold">FSW-Barber</span>
              </p>
            </CardContent>
          </Card>
        </footer>
      </div>
    </div>
  );
};

export default Home;
