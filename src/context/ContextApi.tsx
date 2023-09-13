import { CourseIf, EnrollIf, StudentIf } from "@/InterFaces/Interface";
import { PropsWithChildren, createContext, useEffect, useState } from "react";
export type ContextType = {
    user: StudentIf | null;
    updateUser: (data: StudentIf | null) => void;
    students: StudentIf[];
    updateStudent: (data: StudentIf) => void;
    courses: CourseIf[];
    updateCourses: (data: CourseIf) => void;
    enrollment: EnrollIf[];
    updateEnrollment: (data: EnrollIf) => void;
    statusUpdate:(data:CourseIf[])=>void;
};
export const Context = createContext<ContextType | undefined>(undefined);
export const ContextProvider = ({ children }: PropsWithChildren) => {
    const [user, setUser] = useState<ContextType['user']>(null);
    const [students, setStudents] = useState<ContextType['students']>([]);
    const [enrollment, setEnrollMent] = useState<EnrollIf[]>([]);
    const [courses, setCourses] = useState<ContextType['courses']>([]);
    const updateUser = (data: StudentIf | null) => {
        setUser(data);
    }
    const updateCourses = (data: CourseIf) => {
        setCourses([...courses, data]);
    }
    const statusUpdate=(data:CourseIf[])=>{
        setCourses([...data])
    }
    const updateEnrollment = (data: EnrollIf) => {
        setEnrollMent([...enrollment, data]);
    }
    const updateStudent = (data: StudentIf) => {
        setStudents([...students, data]);
    }
    useEffect(() => {
        const studentsData = localStorage.getItem('students');
        const coursesData = localStorage.getItem('courses');
        const enrollmentsData = localStorage.getItem('enrollments');
        console.log(studentsData,coursesData,enrollmentsData)
        if (studentsData) {
            setStudents(JSON.parse(studentsData));
        } else {
            localStorage.setItem('students', JSON.stringify([]))
        }
        if (coursesData) {
            setCourses(JSON.parse(coursesData));
        } else {
            localStorage.setItem('courses', JSON.stringify([]))
        }
        if (enrollmentsData) {
            setEnrollMent(JSON.parse(enrollmentsData));
        } else {
            localStorage.setItem('enrollments', JSON.stringify([]))
        }
    }, [])
    useEffect(()=>{
        localStorage.setItem('courses', JSON.stringify(courses))
    },[courses]);
    useEffect(()=>{
        localStorage.setItem('students', JSON.stringify(students))
    },[students])
    useEffect(()=>{
        localStorage.setItem('enrollments', JSON.stringify(enrollment))
    },[enrollment])
    return <Context.Provider value={{ user, updateUser, students, enrollment, courses, updateCourses, updateStudent, updateEnrollment,statusUpdate }}>
        {children}
    </Context.Provider>
}