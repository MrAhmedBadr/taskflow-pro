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
import { cn } from '@/lib/utils';

const NAV = [
  { icon: LayoutDashboard, label: 'Overview', active: true },
  { icon: FolderKanban, label: 'Projects' },
  { icon: ListTodo, label: 'Tasks' },
  { icon: KanbanSquare, label: 'Kanban Board' },
  { icon: Calendar, label: 'Calendar' },
  { icon: ActivityIcon, label: 'Activity' },
  { icon: Users, label: 'Team' },
  { icon: MessagesSquare, label: 'Messages' },
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
        {collapsed ? <Logo showWordmark={false} /> : <Link to="/"><Logo /></Link>}
      </div>

      <nav className="flex-1 space-y-1 px-3 py-2">
        {NAV.map((item) => (
          <a
            key={item.label}
            href="#"
            className={cn(
              'group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
              item.active
                ? 'bg-sidebar-accent text-primary'
                : 'text-sidebar-foreground hover:bg-sidebar-accent/60 hover:text-foreground',
            )}
          >
            {item.active && (
              <motion.span
                layoutId="active-nav"
                className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r-full bg-primary"
              />
            )}
            <item.icon className="size-5 shrink-0" />
            {!collapsed && <span className="truncate">{item.label}</span>}
          </a>
        ))}
      </nav>

      <div className="border-t border-sidebar-border p-3">
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent/60 hover:text-foreground"
        >
          <Settings className="size-5 shrink-0" />
          {!collapsed && 'Settings'}
        </a>
      </div>
    </aside>
  );
}
