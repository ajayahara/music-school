import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    name: z.string(),
    description: z.string(),
    instructor: z.string(),
    instrument: z.string(),
    day: z.string(),
    price: z.number()
})

export function CourseForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",
            instructor: "",
            instrument: "",
            day: "Sun",
            price: 0,
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }
    return (
        <div className="p-4 m-auto w-1/3 border-cyan-900">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Course Name" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Description" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="instrument"
                        render={({ field }) => (
                            <FormItem>
                                <Select onValueChange={field.onChange}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Instrument" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="m@example.com">m@example.com</SelectItem>
                                        <SelectItem value="m@google.com">m@google.com</SelectItem>
                                        <SelectItem value="m@support.com">m@support.com</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="day"
                        render={({ field }) => (
                            <FormItem>
                                <Select onValueChange={field.onChange}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Day Of Week" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Sunday">Sunday</SelectItem>
                                        <SelectItem value="Monday">Monday</SelectItem>
                                        <SelectItem value="Tuesday">Tuesday</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-end">
                        <Button type="submit" variant={'ghost'}>Cancel</Button>
                        <Button type="submit" variant={'destructive'}>Submit</Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}
