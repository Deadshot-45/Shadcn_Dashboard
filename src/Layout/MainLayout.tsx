import { AppSidebar } from "@/components/App-Sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setSidebarOpen, toggleSidebar } from "@/redux/sidebarSlice";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const dispatch = useAppDispatch();
  const isSidebar = useAppSelector((state) => state.sidebar.isOpen);

  return (
    <div className="flex w-screen h-screen overflow-hidden ">
      <AppSidebar
        isSidebar={isSidebar}
        setIsSideBar={(cb: boolean) => dispatch(setSidebarOpen(cb))}
      />
      <div className="flex-1 flex flex-col overflow-hidden transition-all duration-300 ">
        {/* Header */}
        <header className="flex justify-between items-center border-b border-zinc-300/90 p-4 max-[350px]:px-2">
          <div className="flex gap-2 p-2 h-10 items-center">
            <SidebarTrigger 
              onClick={() => dispatch(toggleSidebar())}
              className="cursor-pointer"
            />
            <div className="border border-zinc-300/80 h-[70%]" />
            <h1 className="text-sm max-[350px]:text-[12px] font-semibold ">Documents</h1>
          </div>
          <div className="space-x-2">
            <ModeToggle />
            <Button className="px-4 py-2 max-[350px]:px-2 rounded-lg cursor-pointer">
              Github
            </Button>
          </div>
        </header>

        {/* Content area */}
        <main className="flex-1 relative overflow-auto no-scrollbar px-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
