import Image from "next/image";
import { Button, Grid } from "@mui/material";
import Header from "@/components/header";
import BookCard from "@/components/bookCard";
import BigCard from "@/components/bigCard";

export default function Konu() {
  return (
    <div className="flex flex-col items-center w-full ">
      <Header />
      <main className={`flex flex-col container items-center w-full`}>
        Konu
      </main>
    </div>
  );
}
