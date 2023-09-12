
import { CourseIf } from "@/InterFaces/Interface"
import { Badge } from "@/components/ui/badge";
// shadcn.ui import
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface CourseListProps {
    data: CourseIf[];
}
export const CourseList: React.FC<CourseListProps> = ({ data }) => {
    return (
        <div>
            <div className="flex justify-between mb-1">
                <h2 className="font-bold uppercase text-md text-zinc-400">Course List</h2>
                <h2 className="text-pink-700 text-sm">View Course List</h2>
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
                            data?.map((el: CourseIf, i: number) => {
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
                                        {el.price}
                                    </TableCell>
                                    <TableCell>
                                        {el.status==="open"?<Badge className="bg-green-300">Active</Badge>:null}
                                        {el.status==="closed"?<Badge variant='destructive'>Closed</Badge>:null}
                                        {el.status==="archived"?<Badge variant='secondary'>Archived</Badge>:null}
                                    </TableCell>
                                    <TableCell>
                                        <Popover>
                                            <PopoverTrigger>
                                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.625 2.5C8.625 3.12132 8.12132 3.625 7.5 3.625C6.87868 3.625 6.375 3.12132 6.375 2.5C6.375 1.87868 6.87868 1.375 7.5 1.375C8.12132 1.375 8.625 1.87868 8.625 2.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM7.5 13.625C8.12132 13.625 8.625 13.1213 8.625 12.5C8.625 11.8787 8.12132 11.375 7.5 11.375C6.87868 11.375 6.375 11.8787 6.375 12.5C6.375 13.1213 6.87868 13.625 7.5 13.625Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <div className="flex flex-col gap-2 cursor-pointer">
                                                    <span>Edit Course</span>
                                                    <span>Archive Course</span>
                                                    <span>Close Course</span>
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
