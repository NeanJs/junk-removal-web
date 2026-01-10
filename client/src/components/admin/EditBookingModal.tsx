import React, { useState } from "react";

export default function EditBookingModal({ booking, onClose, onSave }: any) {
  const [form, setForm] = useState({ ...booking });

  function change(e: any) {
    const { name, value } = e.target;
    setForm((f: any) => ({ ...f, [name]: value }));
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-card p-6 rounded shadow-lg w-full max-w-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Edit Booking</h3>
          <button onClick={onClose} className="text-muted-foreground">✕</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <label className="block">
            <div className="text-sm mb-1">Name</div>
            <input name="name" value={form.name || ''} onChange={change} className="w-full p-2 border rounded" />
          </label>
          <label className="block">
            <div className="text-sm mb-1">Phone</div>
            <input name="phone" value={form.phone || ''} onChange={change} className="w-full p-2 border rounded" />
          </label>
          <label className="block">
            <div className="text-sm mb-1">Email</div>
            <input name="email" value={form.email || ''} onChange={change} className="w-full p-2 border rounded" />
          </label>
          <label className="block">
            <div className="text-sm mb-1">Service Type</div>
            <input name="service_type" value={form.service_type || ''} onChange={change} className="w-full p-2 border rounded" />
          </label>
          <label className="block md:col-span-2">
            <div className="text-sm mb-1">Address</div>
            <input name="address" value={form.address || ''} onChange={change} className="w-full p-2 border rounded" />
          </label>
          <label className="block md:col-span-2">
            <div className="text-sm mb-1">Notes</div>
            <textarea name="notes" value={form.notes || ''} onChange={change} className="w-full p-2 border rounded" />
          </label>
          <label className="block">
            <div className="text-sm mb-1">Booking Date</div>
            <input type="date" name="booking_date" value={form.booking_date || ''} onChange={change} className="w-full p-2 border rounded" />
          </label>
          <label className="block">
            <div className="text-sm mb-1">Booking Time</div>
            <input type="time" name="booking_time" value={form.booking_time || ''} onChange={change} className="w-full p-2 border rounded" />
          </label>
          <label className="block">
            <div className="text-sm mb-1">Status</div>
            <select name="status" value={form.status || 'new'} onChange={change} className="w-full p-2 border rounded">
              <option value="new">new</option>
              <option value="confirmed">confirmed</option>
              <option value="canceled">canceled</option>
              <option value="completed">completed</option>
            </select>
          </label>
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <button onClick={onClose} className="px-3 py-1 rounded border">Cancel</button>
          <button onClick={() => onSave(form)} className="px-3 py-1 rounded" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-primary-foreground)' }}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
