import { CourseList } from "@/app-component/CourseList.tsx"
import { CourseForm } from "./app-component/Form"
function App() {
  return (
    <>
      <div>
        <CourseList data={[{
          id:"245698",
          name: 'ajaya',
          description: 'description',
          instructor: 'string',
          instrument: 'string',
          day: 'mon',
          students: 26,
          status:"archived",
          price: 60
        }]} />
        <CourseForm/>
      </div>
    </>
  )
}

export default App
