import { DashboardIcon, LaptopIcon } from "@radix-ui/react-icons"
import { Button } from "./components/ui/button"
function App() {
  return (
    <>
      <div className="app">
        <div className="p-4 flex flex-col gap-4 justify-center items-center h-screen shadow-2xl">
          <Button variant={'secondary'} className="bg-red-200 p-4 h-16 w-16 ">
            <div className="flex flex-col">
              <DashboardIcon className="h-10 w-10" />
              <p>Home</p>
            </div>
          </Button>
          <Button variant={'secondary'} className="bg-zinc-200 p-4 h-16 w-16 ">
            <div className="flex flex-col">
              <LaptopIcon className="h-10 w-10" />
              <p>Home</p>
            </div>
          </Button>
         
        </div>
        <div>
          hi
        </div>
      </div>
    </>
  )
}

export default App
