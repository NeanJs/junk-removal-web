import React from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-muted rounded flex items-center justify-center">🗑️</div>
          <h1 className="text-2xl font-semibold">Junk Haul Admin</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-4 py-2 bg-muted rounded">Admin</div>
        </div>
      </header>

      <section className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-lg shadow-sm flex flex-col" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-primary-foreground)' }}>
          <div className="text-sm">Active Bookings</div>
          <div className="text-2xl font-bold mt-2">45</div>
        </div>
        <div className="p-4 rounded-lg shadow-sm flex flex-col" style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-foreground)' }}>
          <div className="text-sm">Confirmed Bookings</div>
          <div className="text-2xl font-bold mt-2">120</div>
        </div>
        <div className="p-4 rounded-lg shadow-sm flex flex-col" style={{ backgroundColor: 'var(--color-destructive)', color: 'var(--color-destructive-foreground)' }}>
          <div className="text-sm">Canceled Bookings</div>
          <div className="text-2xl font-bold mt-2">15</div>
        </div>
        <div className="p-4 rounded-lg shadow-sm flex flex-col" style={{ backgroundColor: 'var(--color-muted)', color: 'var(--color-muted-foreground)' }}>
          <div className="text-sm">Pending Bookings</div>
          <div className="text-2xl font-bold mt-2">30</div>
        </div>
      </section>

      <main>{children}</main>
    </div>
  );
}
