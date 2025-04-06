
export interface Booking {
  id: string;
  spaceId: string;
  userId: string;
  date: string;
  startTime: string;
  endTime: string;
  totalPrice: number;
  status: BookingStatus;
  guestCount: number;
  createdAt: string;
}

export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';

// Sample bookings
export const sampleBookings: Booking[] = [
  {
    id: 'b1',
    spaceId: '1',
    userId: 'u1',
    date: '2025-04-15',
    startTime: '09:00',
    endTime: '17:00',
    totalPrice: 200,
    status: 'confirmed',
    guestCount: 2,
    createdAt: '2025-04-01T12:00:00Z'
  },
  {
    id: 'b2',
    spaceId: '3',
    userId: 'u1',
    date: '2025-04-20',
    startTime: '10:00',
    endTime: '12:00',
    totalPrice: 150,
    status: 'pending',
    guestCount: 1,
    createdAt: '2025-04-02T15:30:00Z'
  }
];

// User's bookings
export const getUserBookings = (userId: string): Booking[] => {
  return sampleBookings.filter(booking => booking.userId === userId);
};

// Create a new booking
export const createBooking = (bookingData: Omit<Booking, 'id' | 'createdAt'>): Booking => {
  const newBooking: Booking = {
    ...bookingData,
    id: `b${sampleBookings.length + 1}`,
    createdAt: new Date().toISOString()
  };
  
  sampleBookings.push(newBooking);
  return newBooking;
};
