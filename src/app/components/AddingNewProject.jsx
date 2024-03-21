'use client'

import * as React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"



const formSchema = z.object({
    year: z.string(),
    make: z.string(),
    model: z.string(),
    budget: z.string()
})

export function CardWithForm_AddingProject() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            budget: "0"
        }
    })

    const onSubmit = (values) => {
        console.log("asdads")
    }

    return (
        <Card>
            <CardContent>
                <Popover>
                    <PopoverTrigger>
                        <div className="pt-5">
                            <Button>Add New Project</Button></div>
                    </PopoverTrigger>
                    <PopoverContent>
                        <div>
                            <h4 className="font-medium text-center leading-none">New Project</h4>
                        </div>


                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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
            </CardContent>
        </Card>
    )
}
