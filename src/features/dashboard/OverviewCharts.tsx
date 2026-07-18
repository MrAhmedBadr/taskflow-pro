import {
  Area,
  AreaChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { STATUS_BREAKDOWN, VELOCITY_DATA } from './mock';

function ChartTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-popover px-3 py-2 text-xs shadow-elevated">
      {label && <p className="mb-1 font-medium">{label}</p>}
      {payload.map((p: any) => (
        <p key={p.name} className="flex items-center gap-2 capitalize text-muted-foreground">
          <span className="size-2 rounded-full" style={{ background: p.color || p.fill }} />
          {p.name}: <span className="font-medium text-foreground">{p.value}</span>
        </p>
      ))}
    </div>
  );
}

export function VelocityChart() {
  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle className="text-base">Weekly velocity</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={VELOCITY_DATA} margin={{ left: -20, right: 8 }}>
            <defs>
              <linearGradient id="created" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(245 75% 60%)" stopOpacity={0.35} />
                <stop offset="100%" stopColor="hsl(245 75% 60%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="completed" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(152 62% 42%)" stopOpacity={0.35} />
                <stop offset="100%" stopColor="hsl(152 62% 42%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
            <Tooltip content={<ChartTooltip />} />
            <Area type="monotone" dataKey="created" stroke="hsl(245 75% 60%)" strokeWidth={2.5} fill="url(#created)" />
            <Area type="monotone" dataKey="completed" stroke="hsl(152 62% 42%)" strokeWidth={2.5} fill="url(#completed)" />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export function StatusChart() {
  const total = STATUS_BREAKDOWN.reduce((s, d) => s + d.value, 0);
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Task status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={STATUS_BREAKDOWN} dataKey="value" nameKey="name" innerRadius={62} outerRadius={88} paddingAngle={2} strokeWidth={0}>
                {STATUS_BREAKDOWN.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<ChartTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-semibold">{total}</span>
            <span className="text-xs text-muted-foreground">tasks</span>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {STATUS_BREAKDOWN.map((d) => (
            <div key={d.name} className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="size-2.5 rounded-full" style={{ background: d.color }} />
              {d.name}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
