import { DashboardIcon, LaptopIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
export const SideBar = () => {
  return (
    <div className="p-4 flex flex-col gap-4 justify-center items-center h-screen shadow-2xl">
          <Button variant={'secondary'} className="bg-red-200 p-4 h-16 w-16 ">
            <div className="flex flex-col items-center">
              <DashboardIcon className="h-8 w-8  text-gray-500" />
              <p>Home</p>
            </div>
          </Button>
          <Button variant={'secondary'} className="bg-zinc-200 p-4 h-16 w-16 ">
            <div className="flex flex-col items-center">
              <LaptopIcon className="h-8 w-8 text-gray-500" />
              <p>Courses</p>
            </div>
          </Button>
        </div>
  )
}
