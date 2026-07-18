import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Clock, MessageSquare, Paperclip } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MockTask {
  title: string;
  tag: string;
  tagColor: string;
  priority: 'urgent' | 'high' | 'medium' | 'low';
  assignee: string;
  comments?: number;
  files?: number;
}

const COLUMNS: { title: string; accent: string; tasks: MockTask[] }[] = [
  {
    title: 'To Do',
    accent: 'bg-blue-500',
    tasks: [
      { title: 'Design onboarding flow', tag: 'Design', tagColor: 'bg-fuchsia-500/15 text-fuchsia-500', priority: 'high', assignee: 'AK', comments: 3 },
      { title: 'Audit accessibility on settings', tag: 'A11y', tagColor: 'bg-emerald-500/15 text-emerald-500', priority: 'medium', assignee: 'MR' },
    ],
  },
  {
    title: 'In Progress',
    accent: 'bg-amber-500',
    tasks: [
      { title: 'Build real-time presence', tag: 'Backend', tagColor: 'bg-blue-500/15 text-blue-500', priority: 'urgent', assignee: 'JL', comments: 5, files: 2 },
      { title: 'Kanban drag interactions', tag: 'Frontend', tagColor: 'bg-violet-500/15 text-violet-500', priority: 'high', assignee: 'SD' },
    ],
  },
  {
    title: 'Done',
    accent: 'bg-emerald-500',
    tasks: [
      { title: 'Ship dark mode', tag: 'Design', tagColor: 'bg-fuchsia-500/15 text-fuchsia-500', priority: 'medium', assignee: 'AK', files: 1 },
    ],
  },
];

const priorityDot: Record<MockTask['priority'], string> = {
  urgent: 'bg-red-500',
  high: 'bg-orange-500',
  medium: 'bg-amber-500',
  low: 'bg-blue-500',
};

export function AppMockup() {
  return (
    <div className="glass mx-auto max-w-5xl overflow-hidden rounded-2xl border shadow-elevated">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3">
        <span className="size-3 rounded-full bg-red-400" />
        <span className="size-3 rounded-full bg-amber-400" />
        <span className="size-3 rounded-full bg-emerald-400" />
        <div className="mx-auto flex items-center gap-2 rounded-md bg-muted px-3 py-1 text-xs text-muted-foreground">
          taskflow.pro/board/sprint-24
        </div>
      </div>

      {/* Board */}
      <div className="grid grid-cols-3 gap-3 p-4 sm:gap-4 sm:p-5">
        {COLUMNS.map((col, ci) => (
          <div key={col.title} className="flex flex-col gap-3">
            <div className="flex items-center gap-2 px-1">
              <span className={cn('size-2 rounded-full', col.accent)} />
              <span className="text-xs font-semibold sm:text-sm">{col.title}</span>
              <span className="text-xs text-muted-foreground">{col.tasks.length}</span>
            </div>
            {col.tasks.map((task, ti) => (
              <motion.div
                key={task.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + ci * 0.1 + ti * 0.08, duration: 0.5 }}
                className="group rounded-xl border border-border/70 bg-card p-3 text-left shadow-soft transition-shadow hover:shadow-elevated"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className={cn('rounded-md px-1.5 py-0.5 text-[10px] font-semibold', task.tagColor)}>
                    {task.tag}
                  </span>
                  {col.title === 'Done' ? (
                    <CheckCircle2 className="size-3.5 text-emerald-500" />
                  ) : (
                    <Circle className="size-3.5 text-muted-foreground/50" />
                  )}
                </div>
                <p className="text-[13px] font-medium leading-snug">{task.title}</p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <span className={cn('size-1.5 rounded-full', priorityDot[task.priority])} />
                    </span>
                    {task.comments ? (
                      <span className="flex items-center gap-0.5">
                        <MessageSquare className="size-3" /> {task.comments}
                      </span>
                    ) : null}
                    {task.files ? (
                      <span className="flex items-center gap-0.5">
                        <Paperclip className="size-3" /> {task.files}
                      </span>
                    ) : null}
                    {col.title === 'In Progress' && (
                      <span className="flex items-center gap-0.5">
                        <Clock className="size-3" /> 2d
                      </span>
                    )}
                  </div>
                  <span className="flex size-5 items-center justify-center rounded-full bg-gradient-to-br from-primary to-indigo-500 text-[9px] font-bold text-white">
                    {task.assignee}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
