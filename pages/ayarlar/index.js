import Image from "next/image";
import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Header from "@/components/header";
import { Globe, MoonStars } from "@phosphor-icons/react";

export default function Ayarlar() {
  return (
    <div className="flex flex-col items-center w-full ">
      <Header />
      <main
        className={`flex container items-center w-full pt-8 max-lg:px-6 px-24`}
      >
        <div>
          <h2 className="mb-5 ml-4 text-2xl font-bold">Ayarlar</h2>
          <List className="gap-0 overflow-hidden bg-gray-100 rounded-xl *:w-64 *:p-0">
            <ListItem>
              <ListItemButton className="h-16 pl-6">
                <ListItemIcon>
                  <Globe size={24} />
                </ListItemIcon>
                <ListItemText>Dil</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton className="h-16 pl-6">
                <ListItemIcon>
                  <MoonStars size={24} />
                </ListItemIcon>
                <ListItemText>Koyu Tema</ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </div>

        <div className="pl-8">
          <h3>Dil</h3>
        </div>
      </main>
    </div>
  );
}
