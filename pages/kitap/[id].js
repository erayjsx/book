/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Button, Grid } from "@mui/material";
import Header from "@/components/header";
import BookCard from "@/components/bookCard";
import BigCard from "@/components/bigCard";
import { Page, Document } from "@react-pdf/renderer";

export default function Kefset() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        Yükleniyor...
      </div>
    );
  }

  const [title, bookId] = id.split("--");

  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="flex flex-col items-center w-full">
      <Header />
      <main className={`flex flex-col container items-center w-full`}>
        {title} - {bookId} Page {pageNumber} of {numPages}
        <Document
          file="/file.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          className="w-full h-full"
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </main>
    </div>
  );
}
