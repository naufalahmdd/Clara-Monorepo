import { GithubIcon, UserAdd01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar"

export default function NavFooter() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton>
          <HugeiconsIcon icon={GithubIcon} strokeWidth={2} /> Connect GitHub
        </SidebarMenuButton>
        <SidebarMenuButton>
          <HugeiconsIcon icon={UserAdd01Icon} strokeWidth={2} /> Invite
          teammates
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
