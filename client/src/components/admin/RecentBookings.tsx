import React from "react";

function formatDate(d?: string) {
  if (!d) return "-";
  try {
    return new Date(d).toLocaleDateString();
  } catch {
    return d;
  }
}

export default function RecentBookings({ bookings, onEdit }: { bookings: any[]; onEdit: (b:any)=>void }) {
  return (
    <div className="overflow-x-auto max-h-96 overflow-y-auto">
      <table className="w-full text-left table-auto">
        <thead>
          <tr className="text-sm text-muted-foreground">
            <th className="px-3 py-2">ID</th>
            <th className="px-3 py-2">Name</th>
            <th className="px-3 py-2">Phone</th>
            <th className="px-3 py-2">Email</th>
            <th className="px-3 py-2">Service</th>
            <th className="px-3 py-2">Date</th>
            <th className="px-3 py-2">Time</th>
            <th className="px-3 py-2">Status</th>
            <th className="px-3 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b.id} className="border-t border-color-border hover:bg-muted">
              <td className="px-3 py-2 text-sm">{b.id.slice(0,8)}</td>
              <td className="px-3 py-2 text-sm">{b.name}</td>
              <td className="px-3 py-2 text-sm">{b.phone}</td>
              <td className="px-3 py-2 text-sm">{b.email || '-'}</td>
              <td className="px-3 py-2 text-sm">{b.service_type}</td>
              <td className="px-3 py-2 text-sm">{formatDate(b.booking_date)}</td>
              <td className="px-3 py-2 text-sm">{b.booking_time || '-'}</td>
              <td className="px-3 py-2 text-sm">
                <span className="inline-block px-2 py-0.5 rounded text-xs" style={{ backgroundColor: 'var(--color-muted)', color: 'var(--color-muted-foreground)' }}>{b.status}</span>
              </td>
              <td className="px-3 py-2 text-sm">
                <button className="px-3 py-1" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-primary-foreground)', borderRadius: 6 }} onClick={()=>onEdit(b)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
