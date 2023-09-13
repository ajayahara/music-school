
import { CourseIf } from "@/InterFaces/Interface"
import { DotsVerticalIcon } from "@radix-ui/react-icons"
// shadcn.ui import
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useContext } from "react";
import { Context, ContextType } from "@/context/ContextApi";
export const CourseList = () => {
    const { courses, statusUpdate } = useContext(Context) as ContextType
    const handleClose = (id: number) => {
        const modifiedCourses = courses.map((el) => {
            if (el.id == id) {
                return { ...el, status: "closed" }
            } else {
                return el
            }
        });
        statusUpdate(modifiedCourses);
    }
    const handleArchive = (id: number) => {
        const modifiedCourses = courses.map((el) => {
            if (el.id == id) {
                return { ...el, status: "archived" }
            } else {
                return el
            }
        });
        statusUpdate(modifiedCourses);
    }
    const handleUnArchive = (id: number) => {
        const modifiedCourses = courses.map((el) => {
            if (el.id == id) {
                return { ...el, status: "open" }
            } else {
                return el
            }
        });
        statusUpdate(modifiedCourses);
    }
    return (
        <div className="p-8 m-auto ml-2 mr-2 shadow-sm">
            <div className="mb-10 mt-3 text-2xl font-bold text-zinc-400">Courses</div>
            <div className="flex justify-between mb-1">
                <h2 className="font-bold uppercase text-md text-zinc-400">Course List</h2>
                <h2 className="text-pink-700 text-sm">Search</h2>
            </div>
            <div className="p-3 bg-white shadow-lg">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Instructor</TableHead>
                            <TableHead>Instrument</TableHead>
                            <TableHead>Day Of Week</TableHead>
                            <TableHead># of Students</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            courses.map((el: CourseIf, i: number) => {
                                return <TableRow key={i}>
                                    <TableCell>
                                        {el.name}
                                    </TableCell>
                                    <TableCell>
                                        {el.description}
                                    </TableCell>
                                    <TableCell>
                                        {el.instructor}
                                    </TableCell>
                                    <TableCell>
                                        {el.instrument}
                                    </TableCell>
                                    <TableCell>
                                        {el.day}
                                    </TableCell>
                                    <TableCell>
                                        {el.students}
                                    </TableCell>
                                    <TableCell>
                                        ${el.price}
                                    </TableCell>
                                    <TableCell>
                                        {el.status === "open" ? <Badge className="bg-green-300">Active</Badge> : null}
                                        {el.status === "closed" ? <Badge variant='destructive' className="bg-red-200 text-gray-400">Closed</Badge> : null}
                                        {el.status === "archived" ? <Badge variant='secondary'>Archived</Badge> : null}
                                    </TableCell>
                                    <TableCell>
                                        <Popover>
                                            <PopoverTrigger>
                                            {/* disabled={el.status==="closed"} */}
                                                <DotsVerticalIcon />
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <div className="flex flex-col gap-2 cursor-pointer">
                                                    {el.status === 'archived' ? <span onClick={() => handleUnArchive(el.id)}>Unarchive Course</span> : <>
                                                        <span>Edit Course</span>
                                                        <span onClick={() => handleClose(el.id)}>Close Course</span>
                                                        <span onClick={() => handleArchive(el.id)}>Archive Course</span>
                                                    </>}
                                                </div>
                                            </PopoverContent>
                                        </Popover>
                                    </TableCell>
                                </TableRow>
                            })
                        }
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
