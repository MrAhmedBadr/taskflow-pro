import {
  BarChart3,
  Bell,
  CalendarDays,
  KanbanSquare,
  Layers,
  Lock,
  MessagesSquare,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react';

export const FEATURES = [
  {
    icon: KanbanSquare,
    title: 'Drag & drop boards',
    description:
      'Fluid Kanban boards with buttery drag-and-drop. Move work across stages and watch everything sync instantly.',
  },
  {
    icon: Zap,
    title: 'Real-time collaboration',
    description:
      'See presence, live cursors, and updates the moment a teammate makes them. No refresh, ever.',
  },
  {
    icon: BarChart3,
    title: 'Analytics that matter',
    description:
      'Burndown, velocity, and workload charts that turn raw activity into decisions you can act on.',
  },
  {
    icon: CalendarDays,
    title: 'Timeline & calendar',
    description:
      'Plan deadlines on a beautiful calendar and roadmap. Drag to reschedule, never miss a due date.',
  },
  {
    icon: MessagesSquare,
    title: 'Threaded comments',
    description:
      'Discuss work in context with mentions, reactions, and attachments — right on every task.',
  },
  {
    icon: Bell,
    title: 'Smart notifications',
    description:
      'Get pinged for what matters and stay silent on what does not. You control the signal.',
  },
] as const;

export const BENTO = [
  {
    icon: Layers,
    title: 'Everything in one place',
    description: 'Projects, tasks, docs, and files — unified so context never gets lost.',
  },
  {
    icon: Lock,
    title: 'Enterprise-grade security',
    description: 'SSO, role-based access, and SOC 2 compliance keep your data protected.',
  },
  {
    icon: Users,
    title: 'Built for teams',
    description: 'Invite members, assign roles, and scale from 2 to 2,000 people.',
  },
  {
    icon: Sparkles,
    title: 'AI that helps',
    description: 'Auto-summaries, smart estimates, and sprint suggestions built in.',
  },
] as const;

export interface PricingPlan {
  name: string;
  price: { monthly: number; yearly: number };
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export const PRICING: PricingPlan[] = [
  {
    name: 'Free',
    price: { monthly: 0, yearly: 0 },
    description: 'For individuals getting started.',
    features: ['Up to 3 projects', 'Unlimited tasks', 'Kanban board', 'Basic analytics', 'Community support'],
    cta: 'Get started',
  },
  {
    name: 'Pro',
    price: { monthly: 12, yearly: 9 },
    description: 'For growing teams that ship fast.',
    features: [
      'Unlimited projects',
      'Advanced analytics',
      'Real-time collaboration',
      'Timeline & calendar',
      'Priority support',
      'Custom labels & filters',
    ],
    cta: 'Start free trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: { monthly: 29, yearly: 24 },
    description: 'For organizations at scale.',
    features: [
      'Everything in Pro',
      'SSO & SAML',
      'Role-based access control',
      'Audit logs',
      'Dedicated success manager',
      '99.99% uptime SLA',
    ],
    cta: 'Contact sales',
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'TaskFlow Pro replaced three tools for us. Our team ships 40% faster and everyone actually enjoys planning now.',
    name: 'Sarah Dohan',
    title: 'VP Engineering, Northwind',
    initials: 'SD',
  },
  {
    quote:
      'The most beautiful project tool I have used. The boards feel alive and the analytics finally tell a story.',
    name: 'James Liu',
    title: 'Product Lead, Vercel-scale startup',
    initials: 'JL',
  },
  {
    quote:
      'Onboarded 120 people in a week. Real-time updates and permissions just worked out of the box.',
    name: 'Maria Rossi',
    title: 'Head of Ops, Lumen',
    initials: 'MR',
  },
  {
    quote:
      'Switching from Jira felt like upgrading from a spreadsheet to a spaceship. Our velocity doubled.',
    name: 'Ahmed Karim',
    title: 'CTO, Meridian Labs',
    initials: 'AK',
  },
  {
    quote:
      'The calendar and timeline views keep our remote team aligned across five time zones effortlessly.',
    name: 'Elena Petrova',
    title: 'Program Manager, Atlas',
    initials: 'EP',
  },
  {
    quote:
      'Support is stellar and the product keeps getting better every single week. Genuinely delightful.',
    name: 'Tom Becker',
    title: 'Founder, Shipfast',
    initials: 'TB',
  },
];

export const FAQS = [
  {
    q: 'Do I need a credit card to start?',
    a: 'No. You can start on the Free plan instantly and upgrade whenever your team is ready. No card required.',
  },
  {
    q: 'Can I import from Jira, Trello, or Asana?',
    a: 'Yes. TaskFlow Pro includes one-click importers for Jira, Trello, Asana, and CSV so you can migrate in minutes.',
  },
  {
    q: 'Is my data secure?',
    a: 'Absolutely. We are SOC 2 Type II compliant, encrypt data in transit and at rest, and support SSO and RBAC on paid plans.',
  },
  {
    q: 'Does it work on mobile?',
    a: 'The web app is fully responsive down to mobile, and native iOS and Android apps are available on paid plans.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Of course. Plans are month-to-month or annual, and you can cancel or change tiers whenever you like — no lock-in.',
  },
  {
    q: 'What kind of support do you offer?',
    a: 'Free plans get community support; Pro gets priority email; Enterprise gets a dedicated success manager and SLA.',
  },
];

export interface Stat {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  format?: boolean;
}

export const STATS: Stat[] = [
  { value: 12, label: 'Teams', suffix: 'k+' },
  { value: 4.9, label: 'Avg. rating', suffix: '/5', decimals: 1 },
  { value: 99.99, label: 'Uptime', suffix: '%', decimals: 2 },
  { value: 2, label: 'Tasks shipped', suffix: 'M+' },
];
