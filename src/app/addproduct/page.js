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
import { ComboboxDropdownMenu_HowTo } from "../components/HowTo";
import { CollapsibleDemo } from "../components/Collapse";
import { CardWithForm_CurntProj } from "../components/CurrentProjectCard";

export default function AddProduct() {
  return (
    <>
      <div>
        <div className="flex flex-wrap justify-center gap-12 max-w-screen-lg mx-auto mb-4 py-4 pl-8 border-b-2 border-gray-400 bg-gray-400">
          <div className="max-w-[29%]">
            <Link href="/">
              Trajectory helps you organize and keep track of your car projects.
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
      <div className="flex flex-wrap justify-center mx-auto max-w-screen-lg">
        <CardWithForm_CurntProj />
        <ComboboxDropdownMenu_Category />
      </div>

      <div className="flex flex-wrap justify-center mx-auto max-w-screen-lg">
        <ComboboxDropdownMenu_Part />
      </div>

      <div className="flex flex-wrap justify-center mx-auto max-w-screen-lg">
        <ComboboxDropdownMenu_Product />
      </div>

      <div className="flex flex-wrap justify-right mx-auto max-w-screen-lg">
        <CollapsibleDemo />
      </div>

      <div className="flex flex-wrap justify-center mx-auto max-w-screen-lg">
        <ComboboxDropdownMenu_HowTo />
      </div>
    </>
  );
}
