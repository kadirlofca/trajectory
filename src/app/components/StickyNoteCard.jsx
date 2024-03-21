'use client'

import * as React from "react"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import deleteProject from "../actions/deleteProject"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

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
                <Button>
                    <Popover>
                        <PopoverTrigger>
                            <div className="pt-5">
                                <Button>Edit</Button></div>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div>
                                <h4 className="font-medium text-center leading-none">New Project</h4>
                            </div>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Edit Name</FormLabel>
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
                                                <FormLabel>Edit Year</FormLabel>
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
                                                <FormLabel>Edit Make</FormLabel>
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
                                                <FormLabel>Edit Model</FormLabel>
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
                                                <FormLabel>Edit Budget</FormLabel>
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
                </Button>
            </CardFooter>
        </Card>
    )
}
