
import { EnrollIf } from "@/InterFaces/Interface"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Context, ContextType } from "@/context/ContextApi";
import { useContext } from "react";
export const OverView= () => {
    const {enrollment}=useContext(Context) as ContextType
    return (
        <div className="p-8 m-auto ml-2 mr-2 shadow-sm">
        <div className="flex justify-between mb-1">
            <h2 className="font-bold uppercase text-md text-zinc-400">Latest Enrollmants</h2>
            <h2 className="text-pink-700 text-sm">View All Enrollments</h2>
        </div>
        <div className="p-3 bg-white shadow-lg">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Enr. No</TableHead>
                        <TableHead>S. Name</TableHead>
                        <TableHead>C. Name</TableHead>
                        <TableHead>Fees</TableHead>
                        <TableHead>Enr. Date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        enrollment.map((el: EnrollIf) => {
                            return <TableRow>
                                <TableCell>
                                    {el.enrNo}
                                </TableCell>
                                <TableCell>
                                    {el.studentName}
                                </TableCell>
                                <TableCell>
                                    {el.courseName}
                                </TableCell>
                                <TableCell>
                                    {el.fees}
                                </TableCell>
                                <TableCell>
                                    {el.enrDate}
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
