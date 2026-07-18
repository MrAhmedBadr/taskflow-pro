import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowUpRight,
  Bell,
  PanelLeftClose,
  PanelLeftOpen,
  Plus,
  Search,
} from 'lucide-react';
import { DashboardSidebar } from '@/features/dashboard/DashboardSidebar';
import { StatusChart, VelocityChart } from '@/features/dashboard/OverviewCharts';
import { ACTIVITY_LABEL, RECENT_ACTIVITY, STAT_CARDS } from '@/features/dashboard/mock';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export default function DashboardPreview() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-muted/20">
      <DashboardSidebar collapsed={collapsed} />

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Topbar */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur-xl sm:px-6">
          <Button
            variant="ghost"
            size="icon"
            className="hidden lg:inline-flex"
            onClick={() => setCollapsed((v) => !v)}
            aria-label="Toggle sidebar"
          >
            {collapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
          </Button>

          <div className="relative hidden max-w-md flex-1 sm:block">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              placeholder="Search tasks, projects, people…"
              className="h-10 w-full rounded-lg border border-input bg-muted/50 pl-9 pr-4 text-sm outline-none transition-colors focus:border-primary focus:bg-background"
            />
          </div>

          <div className="ml-auto flex items-center gap-1.5">
            <Button variant="gradient" size="sm" className="hidden sm:inline-flex">
              <Plus /> New task
            </Button>
            <ThemeToggle />
            <Button variant="ghost" size="icon" aria-label="Notifications" className="relative">
              <Bell />
              <span className="absolute right-2 top-2 size-2 rounded-full bg-destructive ring-2 ring-background" />
            </Button>
            <Avatar className="ml-1">
              <AvatarFallback className="bg-gradient-to-br from-primary to-indigo-500 text-white">
                IO
              </AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 space-y-6 p-4 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">Good morning, Islam 👋</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Here’s what’s happening across your workspace today.
              </p>
            </div>
            <Badge variant="secondary" className="gap-1.5">
              <span className="size-2 animate-pulse rounded-full bg-success" />
              Live · synced
            </Badge>
          </div>

          {/* Stat cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STAT_CARDS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Card className="p-5">
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <div className="mt-2 flex items-end justify-between">
                    <span className="text-3xl font-semibold tracking-tight">{stat.value}</span>
                    <span
                      className={cn(
                        'flex items-center gap-0.5 text-xs font-medium',
                        stat.trend === 'up' ? 'text-success' : 'text-destructive',
                      )}
                    >
                      {stat.trend === 'up' ? (
                        <ArrowUpRight className="size-3.5" />
                      ) : (
                        <ArrowDownRight className="size-3.5" />
                      )}
                      {stat.delta}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid gap-4 lg:grid-cols-3">
            <VelocityChart />
            <StatusChart />
          </div>

          {/* Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Recent activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1">
              {RECENT_ACTIVITY.map((a) => (
                <div
                  key={a.id}
                  className="flex items-center gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-muted/60"
                >
                  <Avatar className="size-8">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-indigo-500 text-[10px] text-white">
                      {a.initials}
                    </AvatarFallback>
                  </Avatar>
                  <p className="min-w-0 flex-1 truncate text-sm">
                    <span className="font-medium">{a.actorName}</span>{' '}
                    <span className="text-muted-foreground">{ACTIVITY_LABEL[a.type]}</span>{' '}
                    <span className="font-medium">{a.targetTitle}</span>
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="rounded-xl border border-dashed border-border bg-card/50 p-5 text-center text-sm text-muted-foreground">
            This is the live dashboard shell. Full CRUD, Kanban drag-and-drop, calendar, and
            real-time Firestore sync are wired next —{' '}
            <Link to="/" className="font-medium text-primary hover:underline">
              back to landing
            </Link>
            .
          </div>
        </main>
      </div>
    </div>
  );
}
