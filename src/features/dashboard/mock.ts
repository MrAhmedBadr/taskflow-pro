import type { Activity } from '@/types';

export const VELOCITY_DATA = [
  { day: 'Mon', created: 12, completed: 8 },
  { day: 'Tue', created: 18, completed: 14 },
  { day: 'Wed', created: 9, completed: 16 },
  { day: 'Thu', created: 22, completed: 19 },
  { day: 'Fri', created: 15, completed: 21 },
  { day: 'Sat', created: 6, completed: 9 },
  { day: 'Sun', created: 4, completed: 7 },
];

export const STATUS_BREAKDOWN = [
  { name: 'Backlog', value: 24, color: 'hsl(240 5% 60%)' },
  { name: 'To Do', value: 18, color: 'hsl(215 90% 60%)' },
  { name: 'In Progress', value: 12, color: 'hsl(38 92% 50%)' },
  { name: 'In Review', value: 7, color: 'hsl(270 70% 62%)' },
  { name: 'Done', value: 39, color: 'hsl(152 62% 42%)' },
];

export const STAT_CARDS = [
  { label: 'Total tasks', value: '248', delta: '+12%', trend: 'up' as const },
  { label: 'Completed', value: '156', delta: '+8%', trend: 'up' as const },
  { label: 'In progress', value: '42', delta: '+3%', trend: 'up' as const },
  { label: 'Overdue', value: '7', delta: '-24%', trend: 'down' as const },
];

export const RECENT_ACTIVITY: (Activity & { actorName: string; initials: string })[] = [
  { id: '1', type: 'task_completed', actorId: '1', actorName: 'Sarah Dohan', initials: 'SD', targetTitle: 'Ship dark mode', createdAt: '2026-07-18T09:12:00Z' },
  { id: '2', type: 'comment_added', actorId: '2', actorName: 'James Liu', initials: 'JL', targetTitle: 'Real-time presence', createdAt: '2026-07-18T08:40:00Z' },
  { id: '3', type: 'task_created', actorId: '3', actorName: 'Maria Rossi', initials: 'MR', targetTitle: 'Accessibility audit', createdAt: '2026-07-18T08:05:00Z' },
  { id: '4', type: 'member_invited', actorId: '4', actorName: 'Ahmed Karim', initials: 'AK', targetTitle: 'Elena Petrova', createdAt: '2026-07-17T17:30:00Z' },
  { id: '5', type: 'task_moved', actorId: '1', actorName: 'Sarah Dohan', initials: 'SD', targetTitle: 'Kanban drag interactions', createdAt: '2026-07-17T16:10:00Z' },
];

export const ACTIVITY_LABEL: Record<string, string> = {
  task_completed: 'completed',
  comment_added: 'commented on',
  task_created: 'created',
  member_invited: 'invited',
  task_moved: 'moved',
  project_created: 'created project',
};
