import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
// shadcn ui
import { Button } from "@/components/ui/button"
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select"
import {Form,FormControl,FormField,FormItem} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useContext } from "react"
import { Context, ContextType } from "@/context/ContextApi"

const formSchema = z.object({
    name: z.string(),
    description: z.string(),
    instructor: z.string(),
    instrument: z.string(),
    day: z.string(),
    price: z.number()
})

export function CourseForm() {
    const {updateCourses}=useContext(Context) as ContextType
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",
            instructor: "",
            instrument: "",
            day: "",
            price: 0,
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        const date=new Date();
        updateCourses({...values,status:"open",students:0,id:date.getTime()})
    }
    return (
        <div className="p-8 m-auto ml-2 mr-2 shadow-sm">
            <h2 className="text-2xl">Add Course</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Course Name" type="text" {...field} />
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
                                    <Input placeholder="Description" type="text" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                     <FormField
                        control={form.control}
                        name="instructor"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Instructor" type="text" {...field} />
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
                                        <SelectItem value="Piano">Piano</SelectItem>
                                        <SelectItem value="Flute">Flute</SelectItem>
                                        <SelectItem value="Tabla">Tabla</SelectItem>
                                        <SelectItem value="Trumpet">Trumpet</SelectItem>
                                        <SelectItem value="Xylophone">Xylophone</SelectItem>
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
                                        <SelectItem value="Wednessday">Wednessday</SelectItem>
                                        <SelectItem value="Thursday">Tuesday</SelectItem>
                                        <SelectItem value="Friday">Thursday</SelectItem>
                                        <SelectItem value="Saturday">Saturday</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )}
                    />
                     <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Price" {...field} onChange={event => field.onChange(+event.target.value)}/>
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-end">
                        <Button variant={'ghost'}>Cancel</Button>
                        <Button type="submit" variant={'secondary'} className="bg-red-200">Add Course</Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}
