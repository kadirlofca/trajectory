"use client";
import Link from "next/link";

import {
  ComboboxDropdownMenu,
  ComboboxDropdownMenu_Category,
} from "../components/Category";
import { ComboBoxResponsive } from "../components/DropDown";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

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


export default function AddCategory() {
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
      <div className="flex flex-wrap pt-5 justify-center mx-auto max-w-screen-lg">
        <ComboboxDropdownMenu_Category />
        <Link href="/addpart">
          {" "}
          <Button>Part Page</Button>
        </Link>
      </div>

      
    </>
  );
}
