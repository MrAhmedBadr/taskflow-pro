import { useEffect, useMemo, useRef, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  CornerDownLeft,
  Search,
  SlidersHorizontal,
} from 'lucide-react';
import { Kbd } from '@/components/ui/kbd';
import { cn } from '@/lib/utils';
import { COMMANDS, type CommandItem } from './mock';

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelect: (item: CommandItem) => void;
}

export function CommandPalette({ open, onOpenChange, onSelect }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COMMANDS;
    return COMMANDS.filter((c) => c.label.toLowerCase().includes(q));
  }, [query]);

  // Group results while preserving a flat index for keyboard navigation.
  const groups = useMemo(() => {
    const map = new Map<string, CommandItem[]>();
    filtered.forEach((c) => {
      const arr = map.get(c.group) ?? [];
      arr.push(c);
      map.set(c.group, arr);
    });
    return Array.from(map.entries());
  }, [filtered]);

  useEffect(() => {
    if (open) {
      setQuery('');
      setActiveIndex(0);
    }
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % Math.max(filtered.length, 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + filtered.length) % Math.max(filtered.length, 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const item = filtered[activeIndex];
      if (item) {
        onSelect(item);
        onOpenChange(false);
      }
    }
  };

  let flatIndex = -1;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="fixed inset-0 z-[80] bg-background/60 backdrop-blur-sm"
              />
            </Dialog.Overlay>
            <Dialog.Content
              asChild
              forceMount
              onKeyDown={handleKeyDown}
              aria-label="Command palette"
            >
              <motion.div
                initial={{ opacity: 0, y: -12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="fixed left-1/2 top-[18%] z-[90] w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 overflow-hidden rounded-2xl border border-border bg-popover shadow-floating"
              >
                <Dialog.Title className="sr-only">Command palette</Dialog.Title>

                {/* Search field */}
                <div className="flex items-center gap-3 border-b border-border px-4">
                  <Search className="size-4 shrink-0 text-muted-foreground" />
                  {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
                  <input
                    autoFocus
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Type a command or search…"
                    className="h-14 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                  />
                  <Kbd>Esc</Kbd>
                </div>

                {/* Results */}
                <div ref={listRef} className="max-h-80 overflow-y-auto p-2">
                  {filtered.length === 0 ? (
                    <div className="flex flex-col items-center gap-2 px-4 py-10 text-center">
                      <SlidersHorizontal className="size-5 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        No commands match “{query}”.
                      </p>
                    </div>
                  ) : (
                    groups.map(([group, items]) => (
                      <div key={group} className="mb-1">
                        <div className="px-2 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                          {group}
                        </div>
                        {items.map((item) => {
                          flatIndex += 1;
                          const isActive = flatIndex === activeIndex;
                          const idx = flatIndex;
                          return (
                            <button
                              key={item.id}
                              onMouseMove={() => setActiveIndex(idx)}
                              onClick={() => {
                                onSelect(item);
                                onOpenChange(false);
                              }}
                              className={cn(
                                'flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-left text-sm transition-colors',
                                isActive ? 'bg-accent text-accent-foreground' : 'text-foreground',
                              )}
                            >
                              <ArrowRight
                                className={cn(
                                  'size-4 transition-opacity',
                                  isActive ? 'opacity-100 text-primary' : 'opacity-40',
                                )}
                              />
                              <span className="flex-1">{item.label}</span>
                              {item.hint && (
                                <span className="font-mono text-[11px] text-muted-foreground">
                                  {item.hint}
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    ))
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between border-t border-border px-4 py-2.5 text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Kbd>↑</Kbd>
                    <Kbd>↓</Kbd>
                    to navigate
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Kbd>
                      <CornerDownLeft className="size-3" />
                    </Kbd>
                    to select
                  </span>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
