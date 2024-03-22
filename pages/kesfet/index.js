import Image from "next/image";
import { Inter, Rethink_Sans } from "next/font/google";
import { Button, Grid } from "@mui/material";
import Header from "@/components/header";
import BookCard from "@/components/bookCard";
import BigCard from "@/components/bigCard";

const rethink_Sans = Rethink_Sans({ subsets: ["latin"] });

export default function Kefset() {
  return (
    <div className="flex flex-col items-center w-full font-[{$rethink_Sans}]">
      <Header />
      <main className={`flex flex-col container items-center w-full`}>
        keşfet
      </main>
    </div>
  );
}
