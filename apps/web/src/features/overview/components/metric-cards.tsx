import { motion } from "framer-motion"
import {
  DollarCircleIcon,
  Layers01Icon,
  PercentCircleIcon,
  TrendingUpDownIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

const MotionCard = motion.create(Card)

export default function MetricCards() {
  return (
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      <MotionCard
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.3, ease: "easeOut" }}
        whileHover={{ y: -3 }}
      >
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">
            Total Portofolio Profit
          </CardTitle>
          <HugeiconsIcon
            icon={DollarCircleIcon}
            strokeWidth={2}
            className="size-5 text-emerald-400"
          />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$50,700</div>
          <p className="mt-3 text-xs">
            <span className="font-medium text-emerald-400">+12.3%</span> vs last month
          </p>
        </CardContent>
      </MotionCard>
      <MotionCard
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.3, ease: "easeOut" }}
        whileHover={{ y: -3 }}
      >
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">
            Avg. Gross Margin
          </CardTitle>
          <HugeiconsIcon
            icon={PercentCircleIcon}
            strokeWidth={2}
            className="size-5 text-amber-400"
          />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">73.6%</div>
          <p className="mt-3 text-xs">Optimal operational efficiency</p>
        </CardContent>
      </MotionCard>
      <MotionCard
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.3, ease: "easeOut" }}
        whileHover={{ y: -3 }}
      >
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">
            Weekly Labor Burn
          </CardTitle>
          <HugeiconsIcon
            icon={TrendingUpDownIcon}
            strokeWidth={2}
            className="size-5 text-indigo-500"
          />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$4,120</div>
          <p className="mt-3 text-xs">Based on approved timesheets</p>
        </CardContent>
      </MotionCard>
      <MotionCard
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.3, ease: "easeOut" }}
        whileHover={{ y: -3 }}
      >
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
          <HugeiconsIcon icon={Layers01Icon} strokeWidth={2} className="size-5 text-rose-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12 / 14</div>
          <p className="mt-3 text-xs">2 projects currently in backlog</p>
        </CardContent>
      </MotionCard>
    </div>
  )
}
