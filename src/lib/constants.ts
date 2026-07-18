import type { PriorityMeta, StatusMeta } from '@/types';

export const APP_NAME = 'TaskFlow Pro';

export const STATUS_META: Record<string, StatusMeta> = {
  backlog: { value: 'backlog', label: 'Backlog', color: '240 5% 60%' },
  todo: { value: 'todo', label: 'To Do', color: '215 90% 60%' },
  in_progress: { value: 'in_progress', label: 'In Progress', color: '38 92% 50%' },
  in_review: { value: 'in_review', label: 'In Review', color: '270 70% 62%' },
  done: { value: 'done', label: 'Done', color: '152 62% 42%' },
};

export const STATUS_ORDER: Array<keyof typeof STATUS_META> = [
  'backlog',
  'todo',
  'in_progress',
  'in_review',
  'done',
];

export const PRIORITY_META: Record<string, PriorityMeta> = {
  no_priority: { value: 'no_priority', label: 'No priority', color: '240 5% 60%' },
  low: { value: 'low', label: 'Low', color: '215 90% 60%' },
  medium: { value: 'medium', label: 'Medium', color: '38 92% 50%' },
  high: { value: 'high', label: 'High', color: '25 95% 53%' },
  urgent: { value: 'urgent', label: 'Urgent', color: '0 72% 55%' },
};

export const PRIORITY_ORDER: Array<keyof typeof PRIORITY_META> = [
  'urgent',
  'high',
  'medium',
  'low',
  'no_priority',
];
