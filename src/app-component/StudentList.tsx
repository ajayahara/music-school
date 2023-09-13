
// import { StudentIf } from "@/InterFaces/Interface.ts"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// interface StudentListProps {
//     data: StudentIf[];
// }
// export const StudentList: React.FC<StudentListProps> = ({ data }) => {
//     return (
//         <div>
//             <div className="flex justify-between mb-1">
//                 <h2 className="font-bold uppercase text-md text-zinc-400">Best Student</h2>
//                 <h2 className="text-pink-700 text-sm">View All Students</h2>
//             </div>
//             <Table>
//                 <TableHeader>
//                     <TableRow>
//                         <TableHead>Reg. No</TableHead>
//                         <TableHead>F. Name</TableHead>
//                         <TableHead>L. Name</TableHead>
//                         <TableHead>Course#</TableHead>
//                         <TableHead>Total Fees</TableHead>
//                         <TableHead>Reg. Date</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {
//                         data?.map((el: StudentIf) => {
//                             return <TableRow>
//                                 <TableCell>
//                                     {el.regdNo}
//                                 </TableCell>
//                                 <TableCell>
//                                     {el.firstName}
//                                 </TableCell>
//                                 <TableCell>
//                                     {el.lastName}
//                                 </TableCell>
//                                 <TableCell>
//                                     {el.courses}
//                                 </TableCell>
//                                 <TableCell>
//                                     {el.totalFees}
//                                 </TableCell>
//                                 <TableCell>
//                                     {el.regDate}
//                                 </TableCell>
//                             </TableRow>
//                         })
//                     }
//                 </TableBody>
//             </Table>
//         </div>
//     )
// }
