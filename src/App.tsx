import { SideBar } from "./app-component/SideBar"
import { Home } from "./pages/Home"
import { RegistraitionForm } from "./pages/Registration"
function App() {
  return (
    <>
      {/* <div className="app">
        <SideBar/>
        <div className="overflow-y-scroll h-screen">
        <Home/>
        </div>
      </div> */}
      <RegistraitionForm/>
    </>
  )
}

export default App
