"use client"

import * as React from "react"
import addCategory from "../actions/addCategory"
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


export function CategoryButton({ projectID, categoryData }) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover>
      <PopoverTrigger>
        <div className="pt-5">
          <Button>Add New Category +</Button></div>
      </PopoverTrigger>
      <PopoverContent className="w-[350px] p-0">
        <Command>
          <CommandInput
            placeholder="Search Categories"
            autoFocus={true}
          />
          <CommandList>
            <CommandEmpty>No label found.</CommandEmpty>
            <CommandGroup>
              {categoryData.map((data) => (
                <CommandItem
                  key={data.id}
                  value={data.id}
                  onSelect={(value) => {
                    addCategory(value, projectID)
                  }}
                >
                  {data.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>

  )
}