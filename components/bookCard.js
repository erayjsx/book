/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Button, IconButton, Input, Menu, MenuItem } from "@mui/material";
import Link from "next/link";

import { DotsThree } from "@phosphor-icons/react";

export default function BookCard({ title, author, image, href }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Link
      href={href ? href : "/"}
      className="flex items-start justify-between p-4 border-2 border-zinc-100 rounded-2xl"
    >
      <div className="flex gap-4">
        <img src={image} className="object-cover h-24 rounded-lg" />
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="opacity-60">{author}</p>
        </div>
      </div>
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
        <MenuItem onClick={handleMenuClose}>Kitabı Oku</MenuItem>
        <MenuItem onClick={handleMenuClose}>Paylaş</MenuItem>
        <MenuItem onClick={handleMenuClose}>Yeni Sekmede Aç</MenuItem>
        <MenuItem onClick={handleMenuClose}>Bağlantıyı Kopyala</MenuItem>
      </Menu>
    </Link>
  );
}
