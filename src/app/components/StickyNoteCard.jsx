'use client'

import * as React from "react"
import { Button } from "@/components/ui/button"
import deleteProject from "../actions/deleteProject"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export const CardWithForm_StickyNote = ({ projectData }) => {
    return (
        <Card className="w-[350px] ml-4 mb-4">
            <CardHeader>
                <CardTitle>{projectData.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Budget = {projectData.budget}</p>
                <p>Shopping Cart = </p>
                <p>Total Spent = </p>
            </CardContent>
            <CardFooter className="flex justify-between">
                <button onClick={() => { deleteProject(projectData) }}><Button variant="outline">Delete</Button></button>
                <Button>Edit</Button>
            </CardFooter>
        </Card>
    )
}
