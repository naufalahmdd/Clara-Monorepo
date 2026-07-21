import {
  CirclePlusIcon,
  InboxIcon,
  Saturn02Icon,
  Search01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"
import { Button } from "@workspace/ui/components/button"
import { Link } from "react-router-dom"

export default function AppTopbar({ children }: { children: React.ReactNode }) {
  return (
    <header className="flex w-full items-center justify-between border-b border-border px-[2%] py-4">
      <div className="flex items-center gap-16">
        {children}
        <div className="flex items-center gap-3">
          <HugeiconsIcon
            icon={Saturn02Icon}
            strokeWidth={2}
            className="size-5"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/overview">Clara</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Overview</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Button type="button" variant="ghost" size="icon">
          <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
        </Button>
        <Button type="button" variant="ghost" size="icon">
          <HugeiconsIcon icon={InboxIcon} strokeWidth={2} />
        </Button>
        <Button type="button" size="sm">
          <HugeiconsIcon icon={CirclePlusIcon} strokeWidth={2} />
          Issue
        </Button>
      </div>
    </header>
  )
}
