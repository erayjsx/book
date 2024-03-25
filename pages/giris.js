import Image from "next/image";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import Header from "@/components/header";

export default function Giris() {
  return (
    <div className="flex flex-col items-center w-full ">
      <Header />
      <main
        className={`flex items-center pt-44 flex-col gap-4 container  w-full`}
      >
        <h1 className="w-full mb-8 text-3xl font-bold max-w-96">Giriş Yap</h1>

        <div className="*:w-full max-w-96 w-full flex flex-col gap-4">
          <TextField label="Email" />
          <TextField label="Şifre" />
        </div>

        <Button
          size="large"
          variant="contained"
          disableElevation
          className="w-full h-12 bg-yellow-500 max-w-96"
        >
          Giriş Yap
        </Button>
      </main>
    </div>
  );
}
