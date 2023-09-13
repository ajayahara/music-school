export interface CourseIf {
    id:number;
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
   id:number;
   firstName:string;
   lastName:string;
   email:string;
   password:string;
   courses:number;
   totalfees:number
}
export interface EnrollIf{
    enrNo:string;
    studentName:string;
    courseName:string;
    fees:number;
    enrDate:string;
}