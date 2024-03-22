import React, { useState } from "react";
import {
  Button,
  Drawer,
  IconButton,
  Input,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { CaretDown, Equals, GearSix, X } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const menu = [
    {
      title: "Ana Sayfa",
      icon: <></>,
      path: "/",
    },
    {
      title: "Keşfet",
      icon: <></>,
      path: "/kesfet",
    },
    {
      title: "Konular",
      icon: <></>,
      path: "/konu",
    },
    {
      title: "Yazarlar",
      icon: <></>,
      path: "/yazar",
    },
  ];

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  /* 
          <img
            src="https://i.ibb.co/9VXbwsP/irge.png"
            className="object-contain h-8"
            ali="irge"
          />
  */

  return (
    <header className="container flex items-center justify-between w-full h-20 max-lg:px-8 px-28">
      <div className="flex items-center gap-16">
        <Link href="/" className="text-[#f9a825] text-3xl">
          kitap<b>s</b>
        </Link>
        <nav className="*:capitalize max-lg:hidden items-center flex *:text-base *:text-black space-x-2 hover:*:bg-gray-100">
          {menu.map((item) =>
            item.path == "/konu" ? (
              // eslint-disable-next-line react/jsx-key
              <>
                <Button
                  size="large"
                  title={item.title}
                  onClick={handleMouseEnter}
                  onMouseEnter={handleMouseEnter}
                >
                  {item.title}
                  <CaretDown size={22} className="ml-2" />
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMouseLeave}
                  keepMounted
                  className="*:w-56 "
                >
                  <MenuItem onClick={handleMouseLeave}>Edebiyat</MenuItem>
                  <MenuItem onClick={handleMouseLeave}>Psikoloji</MenuItem>
                  <MenuItem onClick={handleMouseLeave}>Tarih</MenuItem>
                  <MenuItem onClick={handleMouseLeave}>Edebiyat</MenuItem>
                  <MenuItem onClick={handleMouseLeave}>Psikoloji</MenuItem>
                  <MenuItem onClick={handleMouseLeave}>Tarih</MenuItem>
                  <MenuItem onClick={handleMouseLeave}>Edebiyat</MenuItem>
                  <MenuItem onClick={handleMouseLeave}>Psikoloji</MenuItem>
                  <MenuItem onClick={handleMouseLeave}>Tarih</MenuItem>
                </Menu>
              </>
            ) : (
              // eslint-disable-next-line react/jsx-key
              <Button
                size="large"
                title={item.title}
                onClick={() => router.push(item.path)}
              >
                {item.title}
              </Button>
            )
          )}
        </nav>
      </div>
      <div className="flex max-lg:hidden items-center gap-2 *:text-base *:capitalize">
        <input
          placeholder="Kitap Ara"
          className="h-12 pl-5 mr-4 bg-gray-100 rounded-full outline-none"
        />
        <IconButton
          onClick={() => router.push("/ayarlar")}
          size="large"
          className="text-black max-lg:hidden"
        >
          <GearSix size={28} />
        </IconButton>
        <Button
          onClick={() => router.push("kitap")}
          className="h-10 rounded-lg"
          color="primary"
          size="large"
        >
          Kayıt Ol
        </Button>
        <Button
          onClick={() => router.push("kitap")}
          variant="contained"
          disableElevation
          size="large"
          className="bg-[#f9a825] rounded-lg"
        >
          Giriş Yap
        </Button>
      </div>
      <IconButton
        onClick={toggleDrawer(true)}
        size="large"
        className="hidden text-black max-lg:flex"
      >
        <Equals size={28} />
      </IconButton>

      <Drawer open={open} onClose={toggleDrawer(false)} className="w-full">
        <div className="flex items-center justify-between w-full h-20 px-4 min-w-72">
          <div className="text-xl font-bold">Logo</div>
          <IconButton
            onClick={toggleDrawer(false)}
            size="large"
            className="text-black"
          >
            <X size={28} />
          </IconButton>
        </div>

        <List className="w-full *:text-xl *:font-bold">
          {menu.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <ListItem key={item.title} disablePadding>
              <ListItemButton>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </header>
  );
}
