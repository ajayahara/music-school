export interface CourseIf {
    id:string;
   name:string;
   description:string;
   instructor:string;
   instrument:string;
   day:string;
   students:number;
   status:string;
   price:number
}
export interface StudentIf{
    id:string;
    regdNo:string;
    firstName:string;
    lastName:string;
    courses:string;
    totalFees:string;
    regDate:string;
}
export interface EnrollIf{
    id:string;
    enrNo:string;
    studentName:string;
    courseName:string;
    fees:number;
    enrDate:string;
}