"use client"

import * as React from "react"
import addCategory from "../../actions/item/addCategory"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function AddCategoryForm({ projectID, categoryData }) {

  const handleCategoryClick = (categoryId) => {
    addCategory(categoryId, projectID);
  }

  return (
    <Popover>
      <PopoverTrigger>
        <div>
          <Button>Add Category</Button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="bg-card shadow-2xl">
        <Command>
          <CommandList>
            <CommandGroup>
              {categoryData.map((data) => (
                <div
                  key={data.id}
                  onClick={() => handleCategoryClick(data.id)}
                  className="cursor-pointer border-b border-gray-200 p-2 hover:bg-gray-100 bg-card"
                >
                  {data.name}
                </div>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
