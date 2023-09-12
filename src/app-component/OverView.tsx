
import { EnrollIf } from "@/InterFaces/interface"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
interface OverViewProps {
    data: EnrollIf[];
}
export const OverView: React.FC<OverViewProps> = ({ data }) => {
    return (
        <div>
            <div className="flex justify-between mb-1">
                <h2 className="font-bold uppercase text-md text-zinc-400">Latest Enrollment</h2>
                <h2 className="text-pink-700 text-sm">View All Courses</h2>
            </div>
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
                        data?.map((el: EnrollIf) => {
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
    )
}
