import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
// shadcn ui
import { Button } from "@/components/ui/button"
import {Form,FormControl,FormField,FormItem} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useContext } from "react"
import { Context, ContextType } from "@/context/ContextApi"

const formSchema = z.object({
    firstName:z.string(),
    lastName:z.string(),
    email:z.string(),
    password:z.string()
})

export function RegistraitionForm() {
    const {students,updateStudent}=useContext(Context) as ContextType
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
           firstName:"",
           lastName:"",
           email:"",
           password:""
        }
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        const present=students.filter((el)=>el.email==values.email);
        if(!present.length){
            const date=new Date();
            updateStudent({...values,id:date.getTime(),totalfees:0,courses:0});
            alert("SuccessFully Registered");
        }else{
            alert("Already Exist")
        }

    }
    return (
        <div className="p-8 m-auto w-2/6 shadow-2xl">
            <h2 className="text-2xl mb-4 text-center">Register</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="First Name" type="text" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Last Name" type="text" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                     <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Email" type="email" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                     <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Password" type="password" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                   
                    <div className="flex justify-center">
                        <Button type="submit" variant={'destructive'}>Register</Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}
