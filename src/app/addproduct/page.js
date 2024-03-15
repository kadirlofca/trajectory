"use client";
import Link from "next/link";

import { ComboboxDropdownMenu_Category } from "../components/Category";
import { ComboBoxResponsive } from "../components/DropDown";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { ComboboxDropdownMenu_Part } from "../components/Part";
import { ComboboxDropdownMenu_Product } from "../components/Product";

export default function AddProduct() {
  return (
    <>
      <div>
        <div className="flex flex-wrap justify-center gap-12 max-w-screen-lg mx-auto mb-4 py-4 pl-8 border-b-2 border-gray-400 bg-gray-400">
          <div className="max-w-[29%]">
            <Link href="/">
              Trajectory heps you organize and keep track of your car projects.
            </Link>
          </div>

          <div className="max-w-[29%]">
            JavaScript - React - Nextjs - Tauri - HTML & CSS - Tailwind
          </div>
          <div className="max-w-[29%]">
            Kadir Lofca - Kennedy Ninh - Hayden Perusek
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-left mx-auto max-w-screen-lg">
        <ContextMenu>
          <ContextMenuTrigger>
            <Button>Right Click Here!</Button></ContextMenuTrigger>
          <ContextMenuContent>
            <ComboBoxResponsive />
          </ContextMenuContent>
        </ContextMenu>
      </div>

      <div className="flex flex-wrap pt-5 justify-center mx-auto max-w-screen-lg">
      <ComboboxDropdownMenu_Category />
       <Link href="/addpart"> <Button>Part Page</Button></Link>
      </div>

      <div className="flex flex-wrap pt-5 justify-center mx-auto max-w-screen-lg">
      <ComboboxDropdownMenu_Part />
       <Link href="/addproduct"> <Button>Product Page</Button></Link>
      </div>


      <div className="flex flex-wrap pt-5 justify-center mx-auto max-w-screen-lg">
       <ComboboxDropdownMenu_Product />
      </div>


    </>
  );
}
