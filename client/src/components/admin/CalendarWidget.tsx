import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function CalendarWidget({ bookings = [] }: { bookings?: any[] }) {
  const booked = bookings
    .map((b) => b.booking_date)
    .filter(Boolean)
    .map((d) => new Date(d));

  return (
    <div className="text-sm text-muted-foreground">
      <div className="max-h-96 overflow-auto p-2 bg-card rounded">
        <DayPicker
          mode="single"
          defaultMonth={booked[0] || new Date()}
          disabled={{ before: new Date(2024, 0, 1) }}
          modifiers={{ booked }}
          modifiersClassNames={{ booked: 'rdp-booked' }}
          className="w-full"
        />
      </div>
      <div className="mt-3 text-xs text-muted-foreground">
        <div>
          <span className="inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: 'var(--color-primary)' }}></span>
          Booked
        </div>
      </div>

      <style>{`
        .rdp-booked {
          box-shadow: inset 0 0 0 2px var(--color-primary);
          background-color: var(--color-primary-foreground);
          color: var(--color-primary);
          border-radius: 6px;
        }
      `}</style>
    </div>
  );
}
