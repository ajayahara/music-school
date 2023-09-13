import { SideBar } from "./app-component/SideBar"
import {Course} from "./pages/Course"
function App() {
  return (
    <>
      <div className="app">
        <SideBar/>
        <div className="overflow-y-scroll h-screen">
        <Course/>
        </div>
      </div>
    </>
  )
}

export default App
