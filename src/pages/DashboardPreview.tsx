import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import {
  ArrowDownRight,
  ArrowUpRight,
  Bell,
  Command,
  Inbox,
  PanelLeftClose,
  PanelLeftOpen,
  Plus,
  Search,
} from 'lucide-react';
import { DashboardSidebar } from '@/features/dashboard/DashboardSidebar';
import { StatusChart, VelocityChart } from '@/features/dashboard/OverviewCharts';
import { DashboardSkeleton } from '@/features/dashboard/DashboardSkeleton';
import { CommandPalette } from '@/features/dashboard/CommandPalette';
import {
  ACTIVITY_LABEL,
  ACTIVITY_TIME,
  DEADLINES,
  PROJECTS,
  RECENT_ACTIVITY,
  STAT_CARDS,
  type CommandItem,
  type StatCard,
} from '@/features/dashboard/mock';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { AnimatedNumber } from '@/components/common/AnimatedNumber';
import { EmptyState } from '@/components/common/EmptyState';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Kbd } from '@/components/ui/kbd';
import { Sparkline } from '@/components/ui/sparkline';
import { SimpleTooltip } from '@/components/ui/tooltip';
import { useThemeStore } from '@/store/theme.store';
import { staggerContainer, staggerItem } from '@/lib/motion';
import { cn } from '@/lib/utils';

const priorityColor: Record<string, string> = {
  urgent: 'bg-red-500',
  high: 'bg-orange-500',
  medium: 'bg-amber-500',
  low: 'bg-blue-500',
};

const projectStatusVariant: Record<string, 'success' | 'warning' | 'default'> = {
  'On track': 'success',
  'At risk': 'warning',
  Ahead: 'default',
};

export default function DashboardPreview() {
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const toggleTheme = useThemeStore((s) => s.toggle);

  // Simulate the initial data fetch so skeletons are visible.
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  // ⌘K / Ctrl+K opens the command palette.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const runCommand = (item: CommandItem) => {
    if (item.id === 'theme') {
      toggleTheme();
      return;
    }
    toast.success(item.label, { description: 'Wired up in the full app.' });
  };

  return (
    <div className="flex min-h-screen bg-muted/20">
      <DashboardSidebar collapsed={collapsed} />

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Topbar */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur-xl sm:px-6">
          <SimpleTooltip label="Toggle sidebar">
            <Button
              variant="ghost"
              size="icon"
              className="hidden lg:inline-flex"
              onClick={() => setCollapsed((v) => !v)}
              aria-label="Toggle sidebar"
            >
              {collapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
            </Button>
          </SimpleTooltip>

          {/* Search opens the command palette */}
          <button
            onClick={() => setPaletteOpen(true)}
            className="group relative hidden h-10 max-w-md flex-1 items-center gap-2 rounded-lg border border-input bg-muted/50 pl-9 pr-2 text-left text-sm text-muted-foreground transition-colors hover:bg-background sm:flex"
          >
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2" />
            <span className="flex-1">Search or jump to…</span>
            <span className="flex items-center gap-1">
              <Kbd>
                <Command className="size-3" />
              </Kbd>
              <Kbd>K</Kbd>
            </span>
          </button>

          <div className="ml-auto flex items-center gap-1.5">
            <Button
              variant="gradient"
              size="sm"
              className="hidden sm:inline-flex"
              onClick={() => toast.success('New task', { description: 'Task composer opens here.' })}
            >
              <Plus /> New task
            </Button>
            <ThemeToggle />
            <SimpleTooltip label="Notifications">
              <Button variant="ghost" size="icon" aria-label="Notifications" className="relative">
                <Bell />
                <span className="absolute right-2 top-2 size-2 rounded-full bg-destructive ring-2 ring-background" />
              </Button>
            </SimpleTooltip>
            <Avatar className="ml-1 ring-2 ring-primary/20">
              <AvatarFallback className="bg-gradient-to-br from-primary to-indigo-500 text-white">
                IO
              </AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Content */}
        <main id="main-content" className="flex-1 p-4 sm:p-6">
          {loading ? (
            <DashboardSkeleton />
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="space-y-6"
            >
              {/* Greeting */}
              <motion.div
                variants={staggerItem}
                className="flex flex-wrap items-center justify-between gap-3"
              >
                <div>
                  <h1 className="text-2xl font-semibold tracking-tight">
                    Good morning, Islam 👋
                  </h1>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Here’s what’s happening across your workspace today.
                  </p>
                </div>
                <Badge variant="secondary" dot pulse className="text-success">
                  Live · synced
                </Badge>
              </motion.div>

              {/* Stat cards */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {STAT_CARDS.map((stat) => (
                  <motion.div key={stat.label} variants={staggerItem}>
                    <StatCardView stat={stat} />
                  </motion.div>
                ))}
              </div>

              {/* Charts */}
              <motion.div variants={staggerItem} className="grid gap-4 lg:grid-cols-3">
                <VelocityChart />
                <StatusChart />
              </motion.div>

              {/* Projects */}
              <motion.div variants={staggerItem} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {PROJECTS.map((p) => (
                  <SpotlightCard key={p.id} className="p-5">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <span
                          className="flex size-9 items-center justify-center rounded-lg text-xs font-bold text-white"
                          style={{ background: `hsl(${p.color})` }}
                        >
                          {p.key}
                        </span>
                        <div>
                          <p className="text-sm font-semibold leading-tight">{p.name}</p>
                          <p className="text-xs text-muted-foreground">{p.tasks} tasks</p>
                        </div>
                      </div>
                      <Badge variant={projectStatusVariant[p.status]}>{p.status}</Badge>
                    </div>
                    <div className="mt-4">
                      <div className="mb-1.5 flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-semibold tabular-nums">{p.progress}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: `hsl(${p.color})` }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${p.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        />
                      </div>
                    </div>
                    <div className="mt-4 flex -space-x-2">
                      {p.members.map((m) => (
                        <span
                          key={m}
                          className="flex size-6 items-center justify-center rounded-full bg-gradient-to-br from-primary to-indigo-500 text-[9px] font-bold text-white ring-2 ring-card"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </SpotlightCard>
                ))}
              </motion.div>

              {/* Activity + Deadlines */}
              <motion.div variants={staggerItem} className="grid gap-4 lg:grid-cols-3">
                <Card className="lg:col-span-2">
                  <CardHeader className="flex-row items-center justify-between space-y-0">
                    <CardTitle className="text-base">Recent activity</CardTitle>
                    <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
                      View all
                    </Button>
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
                        <span className="shrink-0 text-xs text-muted-foreground">
                          {ACTIVITY_TIME[a.id]}
                        </span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Upcoming deadlines</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {DEADLINES.length === 0 ? (
                      <EmptyState
                        icon={Inbox}
                        title="Nothing due"
                        description="You’re all caught up. Enjoy the calm."
                      />
                    ) : (
                      <div className="space-y-1">
                        {DEADLINES.map((d) => (
                          <div
                            key={d.id}
                            className="flex items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-muted/60"
                          >
                            <span
                              className={cn(
                                'size-2 shrink-0 rounded-full',
                                priorityColor[d.priority],
                              )}
                            />
                            <div className="min-w-0 flex-1">
                              <p className="truncate text-sm font-medium">{d.title}</p>
                              <p className="text-xs text-muted-foreground">{d.project}</p>
                            </div>
                            <span
                              className={cn(
                                'shrink-0 text-xs font-medium',
                                d.due === 'Today' ? 'text-destructive' : 'text-muted-foreground',
                              )}
                            >
                              {d.due}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                variants={staggerItem}
                className="rounded-xl border border-dashed border-border bg-card/50 p-5 text-center text-sm text-muted-foreground"
              >
                This is the live dashboard shell. Full CRUD, Kanban drag-and-drop, calendar, and
                real-time Firestore sync are wired next —{' '}
                <Link to="/" className="font-medium text-primary hover:underline">
                  back to landing
                </Link>
                .
              </motion.div>
            </motion.div>
          )}
        </main>
      </div>

      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} onSelect={runCommand} />
    </div>
  );
}

function StatCardView({ stat }: { stat: StatCard }) {
  return (
    <SpotlightCard className="p-5">
      <p className="text-sm text-muted-foreground">{stat.label}</p>
      <div className="mt-2 flex items-end justify-between">
        <span className="text-3xl font-semibold tracking-tight tabular-nums">
          <AnimatedNumber value={stat.value} format />
        </span>
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
      <Sparkline data={stat.spark} color={stat.color} className="mt-3 h-8 w-full" />
    </SpotlightCard>
  );
}
