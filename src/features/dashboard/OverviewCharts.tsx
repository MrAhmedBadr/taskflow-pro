import {
  Area,
  AreaChart,
  CartesianGrid,
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

interface TooltipPayload {
  name: string;
  value: number;
  color?: string;
  fill?: string;
}

function ChartTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: TooltipPayload[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-popover/95 px-3 py-2 text-xs shadow-elevated backdrop-blur">
      {label && <p className="mb-1.5 font-semibold">{label}</p>}
      {payload.map((p) => (
        <p key={p.name} className="flex items-center gap-2 capitalize text-muted-foreground">
          <span className="size-2 rounded-full" style={{ background: p.color || p.fill }} />
          {p.name}: <span className="font-semibold text-foreground">{p.value}</span>
        </p>
      ))}
    </div>
  );
}

export function VelocityChart() {
  return (
    <Card className="lg:col-span-2">
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <div className="space-y-1">
          <CardTitle className="text-base">Weekly velocity</CardTitle>
          <p className="text-xs text-muted-foreground">Tasks created vs. completed</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <span className="size-2 rounded-full bg-primary" /> Created
          </span>
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <span className="size-2 rounded-full bg-success" /> Completed
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={264}>
          <AreaChart data={VELOCITY_DATA} margin={{ left: -18, right: 8, top: 4 }}>
            <defs>
              <linearGradient id="created" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(245 78% 58%)" stopOpacity={0.35} />
                <stop offset="100%" stopColor="hsl(245 78% 58%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="completed" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(152 62% 42%)" stopOpacity={0.35} />
                <stop offset="100%" stopColor="hsl(152 62% 42%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              vertical={false}
              stroke="hsl(var(--border))"
              strokeDasharray="4 4"
              opacity={0.6}
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
              dy={6}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
              width={36}
            />
            <Tooltip
              content={<ChartTooltip />}
              cursor={{ stroke: 'hsl(var(--border))', strokeWidth: 1 }}
            />
            <Area
              type="monotone"
              dataKey="created"
              stroke="hsl(245 78% 58%)"
              strokeWidth={2.5}
              fill="url(#created)"
              animationDuration={900}
              activeDot={{ r: 4, strokeWidth: 2, stroke: 'hsl(var(--background))' }}
            />
            <Area
              type="monotone"
              dataKey="completed"
              stroke="hsl(152 62% 42%)"
              strokeWidth={2.5}
              fill="url(#completed)"
              animationDuration={900}
              activeDot={{ r: 4, strokeWidth: 2, stroke: 'hsl(var(--background))' }}
            />
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
        <p className="text-xs text-muted-foreground">Distribution across stages</p>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={STATUS_BREAKDOWN}
                dataKey="value"
                nameKey="name"
                innerRadius={62}
                outerRadius={88}
                paddingAngle={2}
                strokeWidth={0}
                animationDuration={900}
              >
                {STATUS_BREAKDOWN.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<ChartTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-semibold tabular-nums">{total}</span>
            <span className="text-xs text-muted-foreground">total tasks</span>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2.5">
          {STATUS_BREAKDOWN.map((d) => (
            <div key={d.name} className="flex items-center justify-between gap-2 text-xs">
              <span className="flex items-center gap-2 text-muted-foreground">
                <span className="size-2.5 rounded-full" style={{ background: d.color }} />
                {d.name}
              </span>
              <span className="font-semibold tabular-nums">
                {Math.round((d.value / total) * 100)}%
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
