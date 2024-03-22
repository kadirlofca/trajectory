'use client'

import * as React from "react"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import deleteProject from "../actions/deleteProject"
import updateProject from "../actions/updateProject"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
    name: z.string(),
    year: z.string(),
    make: z.string(),
    model: z.string(),
    budget: z.string()
})

export const CardWithForm_StickyNote = ({ projectData }) => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: projectData.name,
            year: projectData.year,
            make: projectData.make,
            model: projectData.model,
            budget: projectData.budget
        }
    })

    const onSubmit = (values) => {
        createProject(values)
    }

    return (
        <Card onClick={() => window.open("/pages/" + projectData.id, "_self")} className="w-[350px] ml-4 mb-4 hover:cursor-pointer">
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
                <Popover>
                    <PopoverTrigger>
                        <div className="pt-5">
                            <Button>Edit</Button></div>
                    </PopoverTrigger>
                    <PopoverContent>
                        <div>
                            <h4 className="font-medium text-center leading-none">Edit Project</h4>
                        </div>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="New Project" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="year"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Year</FormLabel>
                                            <FormControl>
                                                <Input placeholder={"1950-" + new Date().getFullYear()} {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="make"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Make</FormLabel>
                                            <FormControl>
                                                <Input placeholder={"Toyota etc."} {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="model"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Model</FormLabel>
                                            <FormControl>
                                                <Input placeholder={"Prius etc."} {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="budget"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Budget</FormLabel>
                                            <FormControl>
                                                <Input placeholder={0} {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit">Submit</Button>
                            </form>
                        </Form>
                    </PopoverContent>
                </Popover>
            </CardFooter>
        </Card>
    )
}
