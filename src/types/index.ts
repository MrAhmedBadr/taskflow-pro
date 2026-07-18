/* ------------------------------------------------------------------ */
/*  Domain models — shared across features                             */
/* ------------------------------------------------------------------ */

export type ID = string;

export type TaskStatus = 'backlog' | 'todo' | 'in_progress' | 'in_review' | 'done';

export type TaskPriority = 'no_priority' | 'low' | 'medium' | 'high' | 'urgent';

export interface Label {
  id: ID;
  name: string;
  color: string;
}

export interface User {
  id: ID;
  name: string;
  email: string;
  avatarUrl?: string;
  role: 'owner' | 'admin' | 'member' | 'viewer';
  title?: string;
}

export interface Comment {
  id: ID;
  authorId: ID;
  body: string;
  createdAt: string;
}

export interface Attachment {
  id: ID;
  name: string;
  url: string;
  size: number;
  contentType: string;
  uploadedAt: string;
}

export interface Task {
  id: ID;
  projectId: ID;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  labels: Label[];
  assigneeId?: ID;
  dueDate?: string;
  order: number;
  commentsCount: number;
  attachmentsCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: ID;
  name: string;
  key: string;
  description?: string;
  color: string;
  icon: string;
  status: 'active' | 'paused' | 'completed' | 'archived';
  progress: number;
  memberIds: ID[];
  taskCount: number;
  dueDate?: string;
  createdAt: string;
  updatedAt: string;
}

export type ActivityType =
  | 'task_created'
  | 'task_completed'
  | 'task_moved'
  | 'comment_added'
  | 'member_invited'
  | 'project_created';

export interface Activity {
  id: ID;
  type: ActivityType;
  actorId: ID;
  targetTitle: string;
  projectId?: ID;
  createdAt: string;
}

export interface Notification {
  id: ID;
  title: string;
  body: string;
  read: boolean;
  type: 'mention' | 'assignment' | 'due_soon' | 'comment' | 'system';
  createdAt: string;
}

export interface StatusMeta {
  value: TaskStatus;
  label: string;
  color: string;
}

export interface PriorityMeta {
  value: TaskPriority;
  label: string;
  color: string;
}
