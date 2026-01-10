import { useState } from "react";
import AdminLayout from "../components/admin/AdminLayout";
import RecentBookings from "../components/admin/RecentBookings";
import CalendarWidget from "../components/admin/CalendarWidget";
import EditBookingModal from "../components/admin/EditBookingModal";

export default function Admin() {
  const [bookings, setBookings] = useState(() => [
    {
      id: "11111111-1111-1111-1111-111111111111",
      name: "John Smith",
      phone: "(555) 123-4567",
      email: "john@example.com",
      service_type: "Residential Clearmout",
      address: "123 Main St, Springfield",
      notes: "Leave by back gate",
      booking_date: "2025-11-08",
      booking_time: "09:00",
      status: "confirmed",
      created_at: "2025-01-01T10:00:00Z",
    },
    {
      id: "22222222-2222-2222-2222-222222222222",
      name: "Michael Chen",
      phone: "(555) 987-6543",
      email: "michael@example.com",
      service_type: "Commercial Debris",
      address: "456 Market Ave",
      notes: "Call on arrival",
      booking_date: "2025-11-10",
      booking_time: "13:30",
      status: "new",
      created_at: "2025-01-02T12:00:00Z",
    },
    {
      id: "33333333-3333-3333-3333-333333333333",
      name: "Sarah Lee",
      phone: "(555) 222-1111",
      email: "sarah@example.com",
      service_type: "Appliance Removal",
      address: "789 Elm St",
      notes: "Door code 1234",
      booking_date: "2025-11-12",
      booking_time: "15:00",
      status: "canceled",
      created_at: "2025-01-03T09:00:00Z",
    },
  ]);

  const [editing, setEditing] = useState<null | any>(null);

  function handleEdit(booking: any) {
    setEditing(booking);
  }

  function handleSave(updated: any) {
    setBookings((prev) => prev.map((b) => (b.id === updated.id ? updated : b)));
    setEditing(null);
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-card p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-medium mb-4">Recent Bookings</h2>
            <RecentBookings bookings={bookings} onEdit={handleEdit} />
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-medium mb-4">Upcoming</h2>
            <CalendarWidget bookings={bookings} />
          </div>
        </div>
      </div>

      {editing && (
        <EditBookingModal booking={editing} onClose={() => setEditing(null)} onSave={handleSave} />
      )}
    </AdminLayout>
  );
}
