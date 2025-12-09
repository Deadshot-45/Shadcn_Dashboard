import {
  BarChart,
  CopyPlusIcon,
  File,
  Home,
  ListChecksIcon,
  PanelsTopLeft,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavLink } from "react-router-dom";

// Menu items.
const items = [
  {
    title: "Quick Create",
    url: "/quickcreate",
    icon: CopyPlusIcon,
  },
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Lifecycles",
    url: "/lifecycle",
    icon: ListChecksIcon,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: BarChart,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: File,
  },
  {
    title: "Team",
    url: "/team",
    icon: PanelsTopLeft,
  },
];

interface AppSidebarProps {
  isSidebar: boolean;
  setIsSideBar: (cb: boolean) => void;
}

export function AppSidebar({ isSidebar }: AppSidebarProps) {
  return (
    <Sidebar
      className={`bg-[#fbfbfb]  ${
        isSidebar ? "block md:block lg:block xl:block" : "hidden"
      }`}
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-bold text-sm flex items-center gap-2">
            <ListChecksIcon />
            <span>Acme Inc.</span>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="font-normal">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        isActive ? "text-blue-600 font-medium" : ""
                      }
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>

                    {/* <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link> */}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
