/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import Header from "@/components/header";
import BookCard from "@/components/bookCard";
import BigCard from "@/components/bigCard";
import { Page, Document } from "@react-pdf/renderer";
import Link from "next/link";
import {
  Bookmarks,
  Books,
  DotsThree,
  Download,
  DownloadSimple,
  Equals,
  Export,
  Eye,
} from "@phosphor-icons/react";
import axios from "axios";
import Head from "next/head";

export const metadata = {
  title: "...",
  description: "...",
};

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

  const [kitap, setKitap] = useState([]);
  const [hakkinda, setHakkinda] = useState([]);

  const getKitap = async () => {
    try {
      const response = await axios.get(
        `https://z.1000kitap.com/kitapCek?id=${bookId}&bolum=genel-bakis&magazaId=&puan=&q=&sayfa=1&kume=-1&z=0&us=0&fr=1&hl=tr`
      );
      setKitap(response.data.kitap);
      setHakkinda(response.data.gonderiler);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getKitap();
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
      <Head>
        <title>{kitap.adi ? kitap.adi : "İçerik Bulunamadı."} | kitaps</title>
      </Head>

      <div className="flex flex-col items-center w-full">
        <Header />
        {kitap.adi ? (
          <main
            className={`flex flex-col pt-8 container items-center w-full max-lg:px-6 px-64`}
          >
            <div className="flex justify-between w-full gap-4">
              <div className="flex w-full gap-6 max-lg:items-center max-lg:flex-col">
                {kitap.resim && (
                  <img
                    src={kitap.resim}
                    alt={kitap.adi}
                    className="bg-gray-100 border-2 rounded-lg w-44"
                  />
                )}
                <div className="flex flex-col justify-between py-2">
                  <div className="flex flex-col gap-1 max-w-96">
                    <h2 className="text-3xl font-bold line-clamp-2">
                      {kitap && kitap.adi}
                    </h2>
                    <div className="flex gap-1">
                      <b>Yazar :</b>
                      <Link
                        href="/yazar/stefan-zweig"
                        className="underline line-clamp-1"
                      >
                        {kitap.ilkYazar}
                      </Link>
                    </div>
                    <div className="flex gap-1">
                      <b>Çevirmen : </b>
                      <Link
                        href="/yazar/stefan-zweig"
                        className="underline line-clamp-1"
                      >
                        {kitap.ilkYazar}
                      </Link>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <div className="flex items-center gap-3 px-3 py-2 bg-gray-100 rounded-full">
                        <Books size={18} />
                        <p className="text-sm">23 Sayfa</p>
                      </div>
                      <div className="flex items-center gap-3 px-3 py-2 bg-gray-100 rounded-full">
                        <Eye size={18} />
                        <p className="text-sm">142 Okuma</p>
                      </div>
                      <div className="flex items-center gap-3 px-3 py-2 bg-gray-100 rounded-full">
                        <Download size={18} />
                        <p className="text-sm">12 İndirme</p>
                      </div>
                    </div>
                  </div>
                  <div className="*:rounded-lg max-lg:mt-4 max-lg:flex-col *:capitalize flex gap-2 ">
                    <Button
                      size="large"
                      disableElevation
                      variant="contained"
                      color="primary"
                      className="bg-[#f9a825] hover:border-black"
                      startIcon={<Books />}
                    >
                      Okumaya Başla
                    </Button>
                    <Button
                      size="large"
                      variant="outlined"
                      className="text-black border-black"
                      startIcon={<DownloadSimple />}
                    >
                      Kitabı İndir
                    </Button>
                    <Button
                      size="large"
                      variant="outlined"
                      className="text-black border-black"
                      startIcon={<Bookmarks />}
                    >
                      Kitaplığına Kaydet
                    </Button>
                    <Button
                      size="large"
                      variant="outlined"
                      className="text-black border-black"
                      startIcon={<Export />}
                    >
                      Paylaş
                    </Button>
                  </div>
                </div>
              </div>
              <div className="w-20 max-lg:hidden"></div>
            </div>

            <div className="w-full mt-6">
              <div className="w-full">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  className="*:capitalize"
                  textColor="inherit"
                  indicatorColor="primary"
                >
                  <Tab label="Hakkında" {...a11yProps(0)} />
                  <Tab label="Özet" {...a11yProps(1)} />
                  <Tab label="İndirme" {...a11yProps(2)} />
                  <Tab label="Benzer Kitaplar" {...a11yProps(3)} />
                </Tabs>
              </div>
              <CustomTabPanel value={value} index={0}>
                <div className="space-y-4">
                  <b className="mb-6 text-xl">{kitap.adi}</b>
                  <div className="flex gap-2 mt-4">
                    <b>Yazar: </b>
                    <Link href="/" className="underline">
                      {kitap.yazarAdi}
                    </Link>
                  </div>
                  <div className="flex gap-2">
                    <b>Okudu: </b>
                    <p> {kitap.okudu}</p>
                  </div>
                  <div className="flex gap-2">
                    <b>Baskı Yılı: </b>
                    <p>{kitap.baskiyili}</p>
                  </div>
                  <div className="flex gap-2">
                    <b>Baskı Sayısı: </b>
                    <p>{kitap.baskiSayisi}</p>
                  </div>
                  <div className="flex gap-2">
                    <b>ISBN: </b>
                    <p>0</p>
                  </div>
                  <div className="flex gap-2">
                    <b>Özet: </b>
                    <Link href="/" className="line-clamp-4">
                      {hakkinda && hakkinda[0] && hakkinda[0].hakkinda.bilgi}{" "}
                      devamını oku...
                    </Link>
                  </div>
                  <div className="flex gap-2">
                    <b>Özet: </b>
                    <p className="line-clamp-4"></p>
                  </div>
                </div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                {hakkinda && hakkinda[0] && hakkinda[0].hakkinda.bilgi}
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <div className="flex gap-3 max-lg:flex-col">
                  <Button
                    size="large"
                    variant="outlined"
                    className="text-black border-black"
                  >
                    PDF İndir
                  </Button>
                  <Button
                    size="large"
                    variant="outlined"
                    className="text-black border-black"
                  >
                    ePub İndir
                  </Button>
                </div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={3}>
                1
              </CustomTabPanel>
            </div>
          </main>
        ) : (
          <div>İçerik Bulunamadı.</div>
        )}
      </div>
    </>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
