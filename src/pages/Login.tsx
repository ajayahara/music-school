import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
// shadcn ui
import { Button } from "@/components/ui/button"
import {Form,FormControl,FormField,FormItem} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useContext } from "react"
import { Context, ContextType } from "@/context/ContextApi"
import { StudentIf } from "@/InterFaces/Interface"

const formSchema = z.object({
    email:z.string(),
    password:z.string()
})

export function LoginForm() {
    const {students,updateUser}=useContext(Context) as ContextType
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
           email:"",
           password:""
        }
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        const present:StudentIf[]=students.filter((el)=>el.email==values.email&&el.password===values.password);
        if(!present.length){
            updateUser(present[0])
            alert("SuccessFully Loggedin");
        }else{
            alert("Invalid Credential")
        }

    }
    return (
        <div className="p-8 m-auto w-2/6 shadow-2xl">
            <h2 className="text-2xl mb-4 text-center">Login</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
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
