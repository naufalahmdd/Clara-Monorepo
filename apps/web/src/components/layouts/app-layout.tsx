import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar"
import { Outlet } from "react-router-dom"
import AppSidebar from "./app-sidebar"
import AppTopbar from "./app-topbar"

export default function AppLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppTopbar>
          <SidebarTrigger />
        </AppTopbar>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  )
}
