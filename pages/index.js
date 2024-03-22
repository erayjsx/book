import Image from "next/image";
import slugify from "react-slugify";
import { Rethink_Sans } from "next/font/google";
import { Button, Chip, Grid } from "@mui/material";
import Header from "@/components/header";
import BookCard from "@/components/bookCard";
import BigCard from "@/components/bigCard";

const rethink_Sans = Rethink_Sans({ subsets: ["latin"] });

export default function Home() {
  const list = [
    {
      id: 1,
      title: "Hayvan Çiftliği",
      author: "George Orwell",
      image: "",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full font-[{$rethink_Sans}]">
      <Header />
      <main className={`flex flex-col container pt-8 max-lg:px-8 px-32 w-full`}>
        <h2 className="mb-4 text-2xl font-bold">Popüler</h2>
        <div className="flex max-lg:flex-col w-full gap-4 mb-10 *:w-full">
          {list.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <BigCard
              title={item.title}
              author="George Orwell"
              image="https://r2.1k-cdn.com/sig/size:96/plain/https%3A%2F%2F1k-cdn.com%2Fresimler%2Fkitaplar%2F56085_RXIua_1525561545.jpg"
              href={`/kitap/${slugify(item.title)}--${item.id}`}
            />
          ))}
          <BigCard
            title="Martin Eden"
            author="Jack London"
            image="https://r2.1k-cdn.com/sig/size:96/plain/https%3A%2F%2F1k-cdn.com%2Fresimler%2Fkitaplar%2F27823_a8d6c_1611779110.jpg"
          />
          <BigCard
            title="Olağanüstü Bir Gece"
            author="Stefan Zweig"
            image="https://r2.1k-cdn.com/sig/size:96/plain/https%3A%2F%2F1k-cdn.com%2Fresimler%2Fkitaplar%2F27823_5b2e5_1591134945.jpg"
          />
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
          <BookCard
            title="Martin Eden"
            author="Jack London"
            image="https://r2.1k-cdn.com/sig/size:96/plain/https%3A%2F%2F1k-cdn.com%2Fresimler%2Fkitaplar%2F27823_a8d6c_1611779110.jpg"
          />
          <BookCard
            title="Martin Eden"
            author="Jack London"
            image="https://r2.1k-cdn.com/sig/size:96/plain/https%3A%2F%2F1k-cdn.com%2Fresimler%2Fkitaplar%2F27823_a8d6c_1611779110.jpg"
          />
          <BookCard
            title="Martin Eden"
            author="Jack London"
            image="https://r2.1k-cdn.com/sig/size:96/plain/https%3A%2F%2F1k-cdn.com%2Fresimler%2Fkitaplar%2F27823_a8d6c_1611779110.jpg"
          />
          <BookCard
            title="Martin Eden"
            author="Jack London"
            image="https://r2.1k-cdn.com/sig/size:96/plain/https%3A%2F%2F1k-cdn.com%2Fresimler%2Fkitaplar%2F27823_a8d6c_1611779110.jpg"
          />
          <BookCard
            title="Martin Eden"
            author="Jack London"
            image="https://r2.1k-cdn.com/sig/size:96/plain/https%3A%2F%2F1k-cdn.com%2Fresimler%2Fkitaplar%2F27823_a8d6c_1611779110.jpg"
          />
          <BookCard
            title="Martin Eden"
            author="Jack London"
            image="https://r2.1k-cdn.com/sig/size:96/plain/https%3A%2F%2F1k-cdn.com%2Fresimler%2Fkitaplar%2F27823_a8d6c_1611779110.jpg"
          />
          <BookCard
            title="Martin Eden"
            author="Jack London"
            image="https://r2.1k-cdn.com/sig/size:96/plain/https%3A%2F%2F1k-cdn.com%2Fresimler%2Fkitaplar%2F27823_a8d6c_1611779110.jpg"
          />
          <BookCard
            title="Martin Eden"
            author="Jack London"
            image="https://r2.1k-cdn.com/sig/size:96/plain/https%3A%2F%2F1k-cdn.com%2Fresimler%2Fkitaplar%2F27823_a8d6c_1611779110.jpg"
          />
        </div>
      </main>
    </div>
  );
}
