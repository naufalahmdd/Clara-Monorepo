import {
  Folder01Icon,
  GaugeIcon,
  HandshakeIcon,
  Task01Icon,
  Timer01Icon,
  UserGroupIcon,
  Wallet01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar"
import { Link } from "react-router-dom"

const data = [
  {
    label: "Workspace",
    subItems: [
      {
        title: "Overview",
        href: "/overview",
        icon: GaugeIcon,
      },
      {
        title: "Projects",
        href: "/projects",
        icon: Folder01Icon,
      },
      {
        title: "Issues",
        href: "/issues",
        icon: Task01Icon,
      },
    ],
  },
  {
    label: "Management",
    subItems: [
      {
        title: "Profitability",
        href: "/profitability",
        icon: Wallet01Icon,
      },
      {
        title: "Timesheets",
        href: "/timesheets",
        icon: Timer01Icon,
      },
    ],
  },
  {
    label: "Collaboration",
    subItems: [
      {
        title: "Team",
        href: "/team",
        icon: UserGroupIcon,
      },
      {
        title: "Clients",
        href: "/clients",
        icon: HandshakeIcon,
      },
    ],
  },
]

export default function NavMain() {
  return (
    <div>
      {data.map((item) => (
        <SidebarGroup key={item.label}>
          <SidebarGroupLabel>{item.label}</SidebarGroupLabel>
          <SidebarMenu>
            {item.subItems.map((subItem) => (
              <SidebarMenuItem key={subItem.title}>
                <SidebarMenuButton asChild>
                  <Link to={subItem.href}>
                    <HugeiconsIcon icon={subItem.icon} strokeWidth={2} />
                    {subItem.title}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      ))}
    </div>
  )
}
