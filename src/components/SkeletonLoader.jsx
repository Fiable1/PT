import React from 'react';

export function CardSkeleton() {
  return (
    <div className="glass-panel p-6 rounded-3xl animate-pulse space-y-4 border-dark-border">
      <div className="flex items-center justify-between">
        <div className="w-10 h-10 rounded-xl bg-dark-elevated" />
        <div className="w-20 h-4 rounded-md bg-dark-elevated" />
      </div>
      <div className="w-3/4 h-6 rounded-lg bg-dark-elevated" />
      <div className="space-y-2">
        <div className="w-full h-4 rounded bg-dark-elevated/70" />
        <div className="w-5/6 h-4 rounded bg-dark-elevated/70" />
      </div>
      <div className="flex gap-2 pt-2">
        <div className="w-16 h-6 rounded-md bg-dark-elevated" />
        <div className="w-16 h-6 rounded-md bg-dark-elevated" />
      </div>
    </div>
  );
}

export function SkillsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="glass-panel p-6 rounded-2xl animate-pulse space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-dark-elevated" />
              <div className="w-32 h-5 rounded bg-dark-elevated" />
            </div>
            <div className="w-10 h-5 rounded bg-dark-elevated" />
          </div>
          <div className="w-full h-3 rounded-full bg-dark-base" />
        </div>
      ))}
    </div>
  );
}
