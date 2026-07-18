import type { Activity } from '@/types';

/* ------------------------------------------------------------------ */
/*  Realistic demo data for the dashboard shell                        */
/* ------------------------------------------------------------------ */

export interface TeamMember {
  id: string;
  name: string;
  initials: string;
  role: string;
  ring: string;
}

export const TEAM: TeamMember[] = [
  { id: '1', name: 'Sarah Dohan', initials: 'SD', role: 'VP Engineering', ring: 'ring-fuchsia-500' },
  { id: '2', name: 'James Liu', initials: 'JL', role: 'Product Lead', ring: 'ring-blue-500' },
  { id: '3', name: 'Maria Rossi', initials: 'MR', role: 'Design', ring: 'ring-emerald-500' },
  { id: '4', name: 'Ahmed Karim', initials: 'AK', role: 'Frontend', ring: 'ring-violet-500' },
  { id: '5', name: 'Elena Petrova', initials: 'EP', role: 'Backend', ring: 'ring-amber-500' },
];

/* ---- Weekly velocity (created vs. completed) --------------------- */
export const VELOCITY_DATA = [
  { day: 'Mon', created: 12, completed: 8 },
  { day: 'Tue', created: 18, completed: 14 },
  { day: 'Wed', created: 9, completed: 16 },
  { day: 'Thu', created: 22, completed: 19 },
  { day: 'Fri', created: 15, completed: 21 },
  { day: 'Sat', created: 6, completed: 9 },
  { day: 'Sun', created: 4, completed: 7 },
];

/* ---- Status distribution ----------------------------------------- */
export const STATUS_BREAKDOWN = [
  { name: 'Backlog', value: 24, color: 'hsl(240 5% 60%)' },
  { name: 'To Do', value: 18, color: 'hsl(215 90% 60%)' },
  { name: 'In Progress', value: 12, color: 'hsl(38 92% 50%)' },
  { name: 'In Review', value: 7, color: 'hsl(270 70% 62%)' },
  { name: 'Done', value: 39, color: 'hsl(152 62% 42%)' },
];

/* ---- Stat cards with numeric values + sparkline trends ----------- */
export interface StatCard {
  label: string;
  value: number;
  delta: string;
  trend: 'up' | 'down';
  spark: number[];
  color: string;
}

export const STAT_CARDS: StatCard[] = [
  {
    label: 'Total tasks',
    value: 248,
    delta: '+12%',
    trend: 'up',
    color: '245 78% 58%',
    spark: [180, 195, 188, 210, 205, 228, 248],
  },
  {
    label: 'Completed',
    value: 156,
    delta: '+8%',
    trend: 'up',
    color: '152 60% 40%',
    spark: [110, 118, 126, 130, 141, 149, 156],
  },
  {
    label: 'In progress',
    value: 42,
    delta: '+3%',
    trend: 'up',
    color: '33 92% 48%',
    spark: [30, 34, 33, 38, 40, 39, 42],
  },
  {
    label: 'Overdue',
    value: 7,
    delta: '-24%',
    trend: 'down',
    color: '0 72% 54%',
    spark: [16, 14, 13, 11, 10, 9, 7],
  },
];

/* ---- Upcoming deadlines ------------------------------------------ */
export interface Deadline {
  id: string;
  title: string;
  project: string;
  due: string;
  priority: 'urgent' | 'high' | 'medium' | 'low';
  assignee: string;
}

export const DEADLINES: Deadline[] = [
  { id: '1', title: 'Ship real-time presence', project: 'Sprint 24', due: 'Today', priority: 'urgent', assignee: 'JL' },
  { id: '2', title: 'Accessibility audit sign-off', project: 'Platform', due: 'Tomorrow', priority: 'high', assignee: 'MR' },
  { id: '3', title: 'Kanban drag interactions', project: 'Sprint 24', due: 'In 2 days', priority: 'high', assignee: 'SD' },
  { id: '4', title: 'Onboarding flow revamp', project: 'Growth', due: 'In 4 days', priority: 'medium', assignee: 'AK' },
];

/* ---- Recent activity --------------------------------------------- */
export const RECENT_ACTIVITY: (Activity & { actorName: string; initials: string })[] = [
  { id: '1', type: 'task_completed', actorId: '1', actorName: 'Sarah Dohan', initials: 'SD', targetTitle: 'Ship dark mode', createdAt: '2026-07-18T09:12:00Z' },
  { id: '2', type: 'comment_added', actorId: '2', actorName: 'James Liu', initials: 'JL', targetTitle: 'Real-time presence', createdAt: '2026-07-18T08:40:00Z' },
  { id: '3', type: 'task_created', actorId: '3', actorName: 'Maria Rossi', initials: 'MR', targetTitle: 'Accessibility audit', createdAt: '2026-07-18T08:05:00Z' },
  { id: '4', type: 'member_invited', actorId: '4', actorName: 'Ahmed Karim', initials: 'AK', targetTitle: 'Elena Petrova', createdAt: '2026-07-17T17:30:00Z' },
  { id: '5', type: 'task_moved', actorId: '1', actorName: 'Sarah Dohan', initials: 'SD', targetTitle: 'Kanban drag interactions', createdAt: '2026-07-17T16:10:00Z' },
  { id: '6', type: 'project_created', actorId: '2', actorName: 'James Liu', initials: 'JL', targetTitle: 'Growth Q3', createdAt: '2026-07-17T14:22:00Z' },
];

export const ACTIVITY_LABEL: Record<string, string> = {
  task_completed: 'completed',
  comment_added: 'commented on',
  task_created: 'created',
  member_invited: 'invited',
  task_moved: 'moved',
  project_created: 'created project',
};

export const ACTIVITY_TIME: Record<string, string> = {
  '1': '2h ago',
  '2': '3h ago',
  '3': '4h ago',
  '4': 'Yesterday',
  '5': 'Yesterday',
  '6': 'Yesterday',
};

/* ---- Active projects --------------------------------------------- */
export interface ProjectCard {
  id: string;
  name: string;
  key: string;
  progress: number;
  tasks: number;
  members: string[];
  color: string;
  status: 'On track' | 'At risk' | 'Ahead';
}

export const PROJECTS: ProjectCard[] = [
  { id: '1', name: 'Sprint 24 · Collaboration', key: 'SPR', progress: 72, tasks: 34, members: ['SD', 'JL', 'AK'], color: '245 78% 58%', status: 'On track' },
  { id: '2', name: 'Platform Reliability', key: 'PLT', progress: 45, tasks: 21, members: ['EP', 'JL'], color: '199 89% 55%', status: 'At risk' },
  { id: '3', name: 'Growth Experiments', key: 'GRW', progress: 88, tasks: 16, members: ['MR', 'AK'], color: '280 82% 62%', status: 'Ahead' },
];

/* ---- Command palette actions ------------------------------------- */
export interface CommandItem {
  id: string;
  label: string;
  hint?: string;
  group: 'Navigate' | 'Create' | 'Preferences';
}

export const COMMANDS: CommandItem[] = [
  { id: 'overview', label: 'Go to Overview', group: 'Navigate', hint: 'G O' },
  { id: 'projects', label: 'Go to Projects', group: 'Navigate', hint: 'G P' },
  { id: 'board', label: 'Go to Kanban Board', group: 'Navigate', hint: 'G B' },
  { id: 'calendar', label: 'Go to Calendar', group: 'Navigate', hint: 'G C' },
  { id: 'new-task', label: 'Create new task', group: 'Create', hint: 'C' },
  { id: 'new-project', label: 'Create new project', group: 'Create' },
  { id: 'invite', label: 'Invite teammate', group: 'Create' },
  { id: 'theme', label: 'Toggle theme', group: 'Preferences', hint: 'T' },
];
