import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export function CardWithForm_AddingProject() {
    return (
        <Popover>
            <PopoverTrigger>
                <div className="pt-5">
                    <Button>Add New Project</Button></div>
            </PopoverTrigger>
            <PopoverContent>
                <div>
                    <div>
                        <h4 className="font-medium text-center leading-none">New Project</h4>
                    </div>
                    <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4 pt-4">
                            <Label id="year">Year</Label>
                            <Input
                                id="year"
                                className="col-span-2 h-8"
                                placeholder="Required"
                            />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label id="make">Make</Label>
                            <Input
                                id="make"
                                className="col-span-2 h-8"
                                placeholder="Required"
                            />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label id="model">Model</Label>
                            <Input
                                id="model"
                                className="col-span-2 h-8"
                                placeholder="Required"
                            />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label id="budget">Budget</Label>
                            <Input
                                id="budget"
                                className="col-span-2 h-8"
                                placeholder="Optional"
                            />
                        </div>
                    </div>
                    <div className="text-center pt-4">
                        <Button>Add</Button></div>
                </div>
            </PopoverContent>
        </Popover>
    )
}
