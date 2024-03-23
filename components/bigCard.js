/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Button, IconButton, Input, Menu, MenuItem } from "@mui/material";
import Link from "next/link";

import { DotsThree } from "@phosphor-icons/react";
import { useRouter } from "next/router";

export default function BigCard({ title, author, image, href }) {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex items-start justify-between p-4 border-2 rounded-2xl border-zinc-100">
      <Link href={href ? href : "/"} className="flex h-full gap-4">
        <img src={image} className="object-cover w-32 rounded-lg" />
        <div className="flex flex-col gap-1 py-2">
          <h3 className="text-2xl font-black">{title}</h3>
          <Link
            href="/yazar/george-orwell"
            className="text-sm underline opacity-60"
          >
            {author}
          </Link>
        </div>
      </Link>
      <div className="flex flex-col items-center justify-between h-full">
        <IconButton
          aria-label="menu"
          aria-controls="menu"
          aria-haspopup="true"
          onClick={handleMenuClick}
        >
          <DotsThree size={28} weight="bold" />
        </IconButton>
        <Menu
          id="menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => router.push(href)}>Kitabı Oku</MenuItem>
          <MenuItem onClick={handleMenuClose}>Paylaş</MenuItem>
          <MenuItem onClick={handleMenuClose}>Yeni Sekmede Aç</MenuItem>
          <MenuItem onClick={handleMenuClose}>Bağlantıyı Kopyala</MenuItem>
        </Menu>

        <Button
          onClick={() => router.push(href)}
          className="text-white capitalize bg-black rounded-full hover:bg-zinc-900"
        >
          Oku
        </Button>
      </div>
    </div>
  );
}
