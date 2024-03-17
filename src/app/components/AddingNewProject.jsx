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
        <Card className="w-[350px]">
            <CardContent>
                <Popover>
                    <PopoverTrigger>
                        <Button>Add New Project</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                            <div>
                                <div>
                                    <h4 className="font-medium leading-none">New Project</h4>
                                </div>
                                <div className="grid gap-2">
                                    <div className="grid grid-cols-3 items-center gap-4">
                                        <Label id="year">Year</Label>
                                        <Input
                                            id="year"
                                            defaultValue="100%"
                                            className="col-span-2 h-8"
                                        />
                                    </div>
                                    <div className="grid grid-cols-3 items-center gap-4">
                                        <Label id="make">Make</Label>
                                        <Input
                                            id="make"
                                            defaultValue="300px"
                                            className="col-span-2 h-8"
                                        />
                                    </div>
                                    <div className="grid grid-cols-3 items-center gap-4">
                                        <Label id="model">Model</Label>
                                        <Input
                                            id="model"
                                            defaultValue="25px"
                                            className="col-span-2 h-8"
                                        />
                                    </div>
                                    <div className="grid grid-cols-3 items-center gap-4">
                                        <Label id="budget">Budget</Label>
                                        <Input
                                            id="budget"
                                            defaultValue="none"
                                            className="col-span-2 h-8"
                                        />
                                    </div>
                                </div>
                                <Button>Add</Button>
                            </div>
                        </PopoverContent>
                </Popover>
            </CardContent>
        </Card>
    )
}
