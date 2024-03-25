import React, { useState } from "react";
import {
  Button,
  Drawer,
  IconButton,
  Input,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Books,
  CaretDown,
  Compass,
  Equals,
  Gear,
  GearSix,
  MagnifyingGlass,
  Pencil,
  Textbox,
  Users,
  X,
} from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HouseSimple } from "@phosphor-icons/react/dist/ssr";

export default function Header() {
  const router = useRouter();
  const menu = [
    {
      title: "Ana Sayfa",
      icon: <HouseSimple size={22} weight="bold" color="#000" />,
      path: "/",
    },
    {
      title: "Keşfet",
      icon: <Compass size={22} weight="bold" color="#000" />,
      path: "/kesfet",
    },
    {
      title: "Konular",
      icon: <Textbox size={22} weight="bold" color="#000" />,
      path: "/konu",
    },
    {
      title: "Kitaplar",
      icon: <Books size={22} weight="bold" color="#000" />,
      path: "/kitap",
    },
    {
      title: "Yazarlar",
      icon: <Pencil size={22} weight="bold" color="#000" />,
      path: "/yazar",
    },
    {
      title: "Alıntılar",
      icon: <Pencil size={22} weight="bold" color="#000" />,
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
  const [searchD, setSearchD] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const searchDrawer = (newOpen) => () => {
    setSearchD(newOpen);
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
                >
                  {item.title}
                  <CaretDown size={22} className="ml-2" />
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMouseLeave}
                  keepMounted
                  className="*:w-56"
                >
                  <MenuItem onClick={handleMouseLeave}>Edebiyat</MenuItem>
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
        <IconButton
          onClick={() => searchDrawer("top", true)}
          size="large"
          className="text-black max-lg:hidden"
        >
          <MagnifyingGlass size={26} />
        </IconButton>
        <IconButton
          onClick={() => router.push("/ayarlar")}
          size="large"
          className="text-black max-lg:hidden"
        >
          <GearSix size={26} />
        </IconButton>

        <Button
          onClick={() => router.push("/kayit")}
          className="h-12 rounded-md"
          color="primary"
        >
          Kayıt Ol
        </Button>
        <Button
          onClick={() => router.push("/giris")}
          variant="contained"
          disableElevation
          className="bg-[#f9a825] h-12 rounded-md"
        >
          Giriş Yap
        </Button>
      </div>
      <div className="items-center hidden max-lg:flex">
        <IconButton
          onClick={toggleDrawer(true)}
          size="large"
          className="text-black"
        >
          <MagnifyingGlass size={28} />
        </IconButton>
        <IconButton
          onClick={toggleDrawer(true)}
          size="large"
          className="text-black"
        >
          <Equals size={28} />
        </IconButton>
      </div>

      <Drawer open={open} onClose={toggleDrawer(false)} className="w-full ">
        <div className="flex items-center justify-between w-full px-4 py-4 min-w-72">
          <Link href="/" className="text-[#f9a825] text-2xl">
            kitap<b>s</b>
          </Link>
          <IconButton
            onClick={toggleDrawer(false)}
            size="large"
            className="text-black"
          >
            <X size={24} />
          </IconButton>
        </div>

        <List className="w-full *:text-xl *:font-bold">
          {menu.map((item, index) => (
            // eslint-disable-next-line react/jsx-key
            <ListItem key={index} disablePadding>
              <ListItemButton
                className="py-4"
                onClick={() => router.push(item.path)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>
                  <p className="text-lg font-bold">{item.title}</p>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <div className="h-full" />

        <div className="flex flex-col gap-2 p-4">
          <Button
            onClick={() => router.push("/ayarlar")}
            variant="contained"
            disableElevation
            className="justify-start gap-1 py-3 pl-5 text-white capitalize bg-black border-black rounded-lg"
            startIcon={<GearSix />}
          >
            Ayarlar
          </Button>
          <Button
            onClick={() => router.push("/kayit")}
            variant="outlined"
            className="py-3 text-base text-black capitalize border-black rounded-lg"
          >
            Kayıt Ol
          </Button>
          <Button
            onClick={() => router.push("/giris")}
            variant="contained"
            disableElevation
            className="bg-[#f9a825] capitalize py-3 text-base rounded-lg"
          >
            Giriş Yap
          </Button>
        </div>
      </Drawer>

      <Drawer
        open={searchD}
        onClose={searchDrawer("top", false)}
        className="w-full "
      >
        arama yap
      </Drawer>
    </header>
  );
}
