import * as React from "react"
import Link from "next/link"
import { User } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { ThreadList } from "./assistant-ui/thread-list"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="https://akshhthakkar.github.io/" target="_blank" className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <span className="font-bold text-sm">A</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-semibold">Aksh Thakkar</span>
                    <User className="size-4 text-sidebar-primary-foreground" />
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">
                  Check out my portfolio!
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <ThreadList />
      </SidebarContent>

      <SidebarRail />

      <SidebarFooter>{/* No footer menu now */}</SidebarFooter>
    </Sidebar>
  )
}
