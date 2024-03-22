import Image from "next/image";
import { Button, Grid } from "@mui/material";
import Header from "@/components/header";
import BookCard from "@/components/bookCard";
import BigCard from "@/components/bigCard";
import { useRouter } from "next/router";

export default function Yazar() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="flex flex-col items-center w-full ">
      <Header />
      <main className={`flex flex-col container items-center w-full`}>
        {slug}
      </main>
    </div>
  );
}
