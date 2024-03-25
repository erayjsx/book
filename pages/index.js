import Image from "next/image";
import slugify from "react-slugify";
import { Rethink_Sans } from "next/font/google";
import { Button, Chip, Grid } from "@mui/material";
import Header from "@/components/header";
import BookCard from "@/components/bookCard";
import BigCard from "@/components/bigCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { SupabaseClient } from "@supabase/supabase-js";
import { createClient } from "@supabase/supabase-js";
import { supabase } from "@/utils/supabase/server";

export default function Home() {
  const list = [
    {
      id: "1614",
      title: "Martin Eden",
      author: "Jack London",
      image: "https://1k-cdn.com/resimler/kitaplar/27823_a8d6c_1611779110.jpg",
      seo: "martin-eden",
    },
    {
      id: "8057",
      title: "Bir Kadının Yaşamından Yirmi Dört Saat",
      author: "Stefan Zweig",
      image: "https://1k-cdn.com/resimler/kitaplar/56586_7Pheo_1647928687.jpg",
      seo: "bir-kadinin-yasamindan-yirmi-dort-saat",
    },
    {
      id: "48832",
      title: "Olağanüstü Bir Gece",
      author: "Stefan Zweig",
      image: "https://1k-cdn.com/resimler/kitaplar/27823_5b2e5_1591134945.jpg",
      seo: "olaganustu-bir-gece",
    },
  ];

  const [neOkusam, setNeOkusam] = useState([]);

  const getNeOkusam = async () => {
    try {
      const response = await axios.get(
        "https://z.1000kitap.com/neOkusam?s=&sayfa=1&kume=-1&z=0&us=0&fr=1&hl=tr"
      );
      setNeOkusam(response.data.gonderiler);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getNeOkusam();
  }, []);

  const [kitaplar, setKitaplar] = useState([]);
  async function fetchBooks() {
    try {
      const { data, error } = await supabase
        .from("kitaplar")
        .select("*")
        .limit(3);

      if (error) {
        throw error;
      }

      setKitaplar(data);
    } catch (error) {
      console.error("Veri çekme sırasında bir hata oluştu:", error.message);
    }
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="flex flex-col items-center w-full font-[{$rethink_Sans}]">
      <Header />
      <main className={`flex flex-col container pt-8 max-lg:px-8 px-32 w-full`}>
        <h2 className="mb-4 text-2xl font-bold">Popüler</h2>
        <div className="flex max-lg:flex-col w-full gap-4 mb-10 *:w-full">
          {kitaplar.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <BigCard
              title={item.adi}
              author={item.yazaradi}
              image={item.resim}
              href={`/kitap/${item.seo_adi}--${item.kitap_id}`}
            />
          ))}
        </div>

        <h2 className="mb-4 text-2xl font-bold">Konular</h2>
        <div className="flex flex-wrap w-full gap-4 mb-10">
          <Chip label="Edebiyat" variant="outlined" onClick={() => <></>} />
          <Chip label="Psikoloji" variant="outlined" onClick={() => <></>} />
          <Chip label="Tarih" variant="outlined" onClick={() => <></>} />
          <Chip label="İnsana Dair" variant="outlined" onClick={() => <></>} />
          <Chip label="Aşk" variant="outlined" onClick={() => <></>} />
        </div>

        <h2 className="mb-4 text-2xl font-bold">Ne Okusam?</h2>
        <div className="max-lg:grid-cols-1 grid grid-cols-4 my-2 flex-wrap gap-4 w-full *:w-full">
          {neOkusam &&
            neOkusam.map(
              (item) =>
                item.id && (
                  // eslint-disable-next-line react/jsx-key
                  <BookCard
                    title={item.adi}
                    author={item.ilkYazar}
                    image={item.resim}
                    href={`/kitap/${slugify(item.seo_adi)}--${item.id}`}
                  />
                )
            )}
        </div>
      </main>
    </div>
  );
}
