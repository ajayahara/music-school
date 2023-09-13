
import { StudentIf } from "@/InterFaces/Interface";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Context, ContextType } from "@/context/ContextApi";
import { useContext } from "react";
export const StudentList = () => {
    const { students } = useContext(Context) as ContextType

    return (
        <div className="p-8 m-auto ml-2 mr-2 shadow-sm">
            <div className="flex justify-between mb-1">
                <h2 className="font-bold uppercase text-md text-zinc-400">Best Students</h2>
                <h2 className="text-pink-700 text-sm">View All Students</h2>
            </div>
            <div className="p-3 bg-white shadow-lg">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Reg. No</TableHead>
                            <TableHead>F. Name</TableHead>
                            <TableHead>L. Name</TableHead>
                            <TableHead>Course#</TableHead>
                            <TableHead>Total Fees</TableHead>
                            <TableHead>Reg. Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            students.map((el: StudentIf, i: number) => {
                                return <TableRow key={i}>
                                    <TableCell>
                                        {el.id}
                                    </TableCell>
                                    <TableCell>
                                        {el.firstName}
                                    </TableCell>
                                    <TableCell>
                                        {el.lastName}
                                    </TableCell>
                                    <TableCell>
                                        {el.courses}
                                    </TableCell>
                                    <TableCell>
                                        {el.totalfees}
                                    </TableCell>
                                    <TableCell>
                                        {el.id}
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
