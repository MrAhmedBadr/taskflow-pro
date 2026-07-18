import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Bell,
  Calendar,
  LayoutDashboard,
  KanbanSquare,
  ListTodo,
  MessagesSquare,
  Settings,
  FolderKanban,
  Users,
  Activity as ActivityIcon,
} from 'lucide-react';
import { Logo } from '@/components/common/Logo';
import { SimpleTooltip } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { spring } from '@/lib/motion';

interface NavItem {
  icon: typeof LayoutDashboard;
  label: string;
  active?: boolean;
  badge?: string | null;
}

const NAV: NavItem[] = [
  { icon: LayoutDashboard, label: 'Overview', active: true },
  { icon: FolderKanban, label: 'Projects', badge: '3' },
  { icon: ListTodo, label: 'Tasks', badge: '42' },
  { icon: KanbanSquare, label: 'Kanban Board' },
  { icon: Calendar, label: 'Calendar' },
  { icon: ActivityIcon, label: 'Activity' },
  { icon: Users, label: 'Team' },
  { icon: MessagesSquare, label: 'Messages', badge: '5' },
  { icon: Bell, label: 'Notifications' },
];

export function DashboardSidebar({ collapsed }: { collapsed: boolean }) {
  return (
    <aside
      className={cn(
        'sticky top-0 hidden h-screen shrink-0 flex-col border-r border-sidebar-border bg-sidebar transition-[width] duration-300 lg:flex',
        collapsed ? 'w-[76px]' : 'w-64',
      )}
    >
      <div className="flex h-16 items-center px-5">
        {collapsed ? (
          <Logo showWordmark={false} />
        ) : (
          <Link to="/">
            <Logo />
          </Link>
        )}
      </div>

      <nav className="flex-1 space-y-1 px-3 py-2">
        {NAV.map((item) => {
          const link = (
            <a
              key={item.label}
              href="#"
              aria-current={item.active ? 'page' : undefined}
              className={cn(
                'group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                collapsed && 'justify-center',
                item.active
                  ? 'bg-sidebar-accent text-primary'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent/60 hover:text-foreground',
              )}
            >
              {item.active && (
                <motion.span
                  layoutId="active-nav"
                  className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r-full bg-primary"
                  transition={spring.soft}
                />
              )}
              <item.icon className="size-5 shrink-0" />
              {!collapsed && <span className="flex-1 truncate">{item.label}</span>}
              {!collapsed && item.badge && (
                <span className="rounded-full bg-muted px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
                  {item.badge}
                </span>
              )}
            </a>
          );

          return collapsed ? (
            <SimpleTooltip key={item.label} label={item.label} side="right">
              {link}
            </SimpleTooltip>
          ) : (
            link
          );
        })}
      </nav>

      <div className="space-y-1 border-t border-sidebar-border p-3">
        <a
          href="#"
          className={cn(
            'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-foreground transition-colors hover:bg-sidebar-accent/60 hover:text-foreground',
            collapsed && 'justify-center',
          )}
        >
          <Settings className="size-5 shrink-0" />
          {!collapsed && 'Settings'}
        </a>

        {/* User profile */}
        <div
          className={cn(
            'flex items-center gap-3 rounded-lg px-3 py-2',
            collapsed && 'justify-center px-0',
          )}
        >
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-indigo-500 text-xs font-bold text-white">
            IO
          </span>
          {!collapsed && (
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">Islam Osama</p>
              <p className="truncate text-xs text-muted-foreground">Pro workspace</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
