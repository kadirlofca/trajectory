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

export const CardWithForm_StickyNote = ({ projectData }) => {
    return (
        <Card className="w-[350px] ml-4 mb-4">
            <CardHeader>
                <CardTitle>{projectData.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <div>
                    <div>Budget = {projectData.budget}</div>
                    <div>Shopping Cart = </div>
                    <div>Total Spent = </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <div>
                    <Button variant="outline">Delete</Button></div>
                <div><Button>Edit</Button></div>
            </CardFooter>
        </Card>
    )
}
