'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Calendar, Clock, Users, MapPin, Mail, Phone, Package, Car, UserMinus, Hotel } from 'lucide-react';

interface BookingAddon {
  id: string;
  quantity: number;
  unit_price: number;
  promo_addons: {
    id: string;
    name: string;
  };
}

interface BookingData {
  id: string;
  booking_ref: string;
  activity_date: string;
  time_slot: string;
  guest_count: number;
  total_amount: number;
  currency: string;
  packages: {
    name: string;
    slug: string;
  };
  booking_customers: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
  } | {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
  }[];
  booking_addons: BookingAddon[];
  booking_transport: {
    transport_type: string;
    hotel_name: string | null;
    room_number: string | null;
    non_players: number;
    private_passengers: number;
  } | {
    transport_type: string;
    hotel_name: string | null;
    room_number: string | null;
    non_players: number;
    private_passengers: number;
  }[] | null;
}

function SuccessContent() {
  const searchParams = useSearchParams();
  const bookingRef = searchParams.get('booking_ref');
  const paymentIntent = searchParams.get('payment_intent');
  
  const [booking, setBooking] = useState<BookingData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookingDetails = async () => {
      if (!bookingRef || !paymentIntent) {
        setError('Invalid booking link');
        setLoading(false);
        return;
      }
      
      try {
        const response = await fetch(`/api/bookings/${bookingRef}?payment_intent=${paymentIntent}`);
        if (response.ok) {
          const data = await response.json();
          setBooking(data);
        } else if (response.status === 401) {
          setError('This booking confirmation link is not valid or has expired.');
        } else {
          setError('Booking not found');
        }
      } catch (err) {
        console.error('Error fetching booking:', err);
        setError('Failed to load booking details');
      }
      setLoading(false);
    };

    fetchBookingDetails();
  }, [bookingRef, paymentIntent]);

  const formatCurrency = (amount: number) => {
    if (isNaN(amount) || amount === null || amount === undefined) return '฿0';
    return new Intl.NumberFormat('th-TH', {
      style: 'currency',
      currency: 'THB',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  if (error) {
    return (
      <main className="min-h-screen bg-[#1a1a1a]">
        <div className="max-w-md mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl p-6 text-center"
          >
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Mail className="w-6 h-6 text-red-500" />
            </div>
            <h1 className="text-lg font-bold text-slate-800 mb-2">Access Denied</h1>
            <p className="text-sm text-slate-600 mb-4">{error}</p>
            <Link href="/" className="block">
              <button className="w-full px-4 py-2.5 bg-[#f2e421] hover:bg-[#d4c91e] text-black font-semibold rounded-xl transition-colors text-sm">
                Back to Home
              </button>
            </Link>
            <p className="mt-3 text-xs text-slate-500">
              Need help? <a href="mailto:support@flyinghanuman.com" className="text-[#1a1a1a] underline">support@flyinghanuman.com</a>
            </p>
          </motion.div>
        </div>
      </main>
    );
  }

  // Helper to get customer data (handle array or object)
  const getCustomer = () => {
    if (!booking?.booking_customers) return null;
    return Array.isArray(booking.booking_customers) 
      ? booking.booking_customers[0] 
      : booking.booking_customers;
  };

  // Helper to get transport data (handle array or object)
  const getTransport = () => {
    if (!booking?.booking_transport) return null;
    return Array.isArray(booking.booking_transport) 
      ? booking.booking_transport[0] 
      : booking.booking_transport;
  };

  const customer = getCustomer();
  const transport = getTransport();
  const hasTransfer = transport && transport.transport_type !== 'self_arrange';
  const nonPlayers = transport?.non_players || 0;

  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <div className="max-w-md mx-auto px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] px-4 py-5 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-12 h-12 bg-[#f2e421] rounded-full flex items-center justify-center mx-auto mb-2"
            >
              <CheckCircle className="w-7 h-7 text-[#1a1a1a]" />
            </motion.div>
            <h1 className="text-lg font-bold text-white font-[family-name:var(--font-trade-winds)]">
              BOOKING CONFIRMED!
            </h1>
            {customer && (
              <p className="text-white/80 text-xs mt-1">
                Thank You <span className="font-semibold text-[#f2e421]">{customer.first_name}</span> for your booking!
              </p>
            )}
          </div>

          <div className="p-4">
            {/* Booking Reference */}
            <div className="bg-[#f2e421]/10 border border-[#f2e421]/30 rounded-lg p-3 mb-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-slate-500 uppercase">Booking Ref</span>
                <span className="text-base font-bold text-[#1a1a1a]">{bookingRef}</span>
              </div>
              {customer?.email && (
                <p className="text-[10px] text-slate-500 mt-1">
                  Confirmation sent to <span className="font-medium text-slate-700">{customer.email}</span>
                </p>
              )}
            </div>

            {!loading && booking && (
              <>
                {/* Booking Details */}
                <div className="mb-3">
                  <h3 className="text-[10px] font-semibold text-slate-500 mb-2 uppercase tracking-wide">Booking Details</h3>
                  
                  {/* Package */}
                  <div className="flex items-center gap-2 p-2 bg-[#f2e421]/10 rounded-lg mb-2">
                    <Package className="w-4 h-4 text-[#1a1a1a]" />
                    <span className="text-sm font-semibold text-slate-800">{booking.packages?.name || 'N/A'}</span>
                  </div>

                  {/* Date, Time, Players in a row */}
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-2 bg-slate-50 rounded-lg">
                      <Calendar className="w-3.5 h-3.5 text-slate-400 mx-auto mb-1" />
                      <p className="text-[10px] text-slate-500">Date</p>
                      <p className="text-xs font-medium text-slate-800">
                        {new Date(booking.activity_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </p>
                    </div>
                    <div className="p-2 bg-slate-50 rounded-lg">
                      <Clock className="w-3.5 h-3.5 text-slate-400 mx-auto mb-1" />
                      <p className="text-[10px] text-slate-500">Time</p>
                      <p className="text-xs font-medium text-slate-800">
                        {booking.time_slot === 'flexible' ? 'Flexible' : booking.time_slot}
                      </p>
                    </div>
                    <div className="p-2 bg-slate-50 rounded-lg">
                      <Users className="w-3.5 h-3.5 text-slate-400 mx-auto mb-1" />
                      <p className="text-[10px] text-slate-500">Players</p>
                      <p className="text-xs font-medium text-slate-800">{booking.guest_count}</p>
                    </div>
                  </div>

                  {/* Non-Players */}
                  {nonPlayers > 0 && (
                    <div className="flex items-center justify-between p-2 bg-slate-50 rounded-lg mt-2">
                      <div className="flex items-center gap-2">
                        <UserMinus className="w-3.5 h-3.5 text-slate-400" />
                        <span className="text-xs text-slate-600">Non-Players</span>
                      </div>
                      <span className="text-xs font-medium text-slate-800">{nonPlayers} person(s)</span>
                    </div>
                  )}
                </div>

                {/* Add-ons */}
                {booking.booking_addons && booking.booking_addons.length > 0 && (
                  <div className="mb-3">
                    <h3 className="text-[10px] font-semibold text-slate-500 mb-2 uppercase tracking-wide">Add-ons</h3>
                    <div className="bg-green-50 border border-green-100 rounded-lg p-2">
                      {booking.booking_addons.map((addon, index) => (
                        <div key={index} className="flex items-center justify-between text-xs py-1">
                          <span className="text-slate-700">{addon.promo_addons?.name || 'Add-on'} × {addon.quantity}</span>
                          <span className="font-medium text-green-700">{formatCurrency((addon.unit_price || 0) * (addon.quantity || 1))}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Transport */}
                {hasTransfer && (
                  <div className="mb-3">
                    <h3 className="text-[10px] font-semibold text-slate-500 mb-2 uppercase tracking-wide">Transport</h3>
                    <div className="flex items-center gap-2 p-2 bg-blue-50 border border-blue-100 rounded-lg">
                      <Car className="w-4 h-4 text-blue-600" />
                      <div>
                        <p className="text-xs font-medium text-blue-800">
                          {transport?.transport_type === 'hotel_pickup' ? 'Hotel Pickup' : 
                           transport?.transport_type === 'private' ? 'Private Transfer' : 'Transfer'}
                        </p>
                        {transport?.hotel_name && (
                          <p className="text-[10px] text-blue-600 flex items-center gap-1">
                            <Hotel className="w-3 h-3" />
                            {transport.hotel_name}{transport.room_number && `, Room ${transport.room_number}`}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Total */}
                <div className="flex items-center justify-between p-3 bg-[#1a1a1a] rounded-lg mb-3">
                  <span className="text-xs text-white/70">Total Paid</span>
                  <span className="text-lg font-bold text-[#f2e421]">{formatCurrency(booking.total_amount)}</span>
                </div>
              </>
            )}

            {/* Important Info */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-2.5 mb-3">
              <h3 className="text-[10px] font-semibold text-amber-800 mb-1.5 uppercase">Important</h3>
              <ul className="space-y-0.5 text-[11px] text-amber-700">
                <li>• {hasTransfer ? 'Be at hotel lobby 15 min before pick-up' : 'Arrive 30 min before scheduled time'}</li>
                <li>• Bring booking confirmation</li>
                <li>• Wear comfortable clothes & closed-toe shoes</li>
                <li>• Weight limit: 120kg for zipline</li>
              </ul>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg mb-3">
              <MapPin className="w-4 h-4 text-[#f2e421]" />
              <div>
                <p className="text-xs font-semibold text-slate-800">Flying Hanuman</p>
                <p className="text-[10px] text-slate-500">89/16 Moo 6, Soi Namtok Kathu, Phuket 83120</p>
              </div>
            </div>

            {/* Button */}
            <Link href="/" className="block">
              <button className="w-full py-2.5 bg-[#f2e421] hover:bg-[#d4c91e] text-black font-semibold rounded-xl transition-colors text-sm">
                Back to Home
              </button>
            </Link>

            {/* Help */}
            <div className="mt-3 pt-3 border-t border-slate-100 text-center">
              <p className="text-[10px] text-slate-400 mb-1">Need help?</p>
              <div className="flex justify-center gap-3 text-[11px]">
                <a href="mailto:support@flyinghanuman.com" className="flex items-center gap-1 text-slate-600 hover:underline">
                  <Mail className="w-3 h-3" /> support@flyinghanuman.com
                </a>
                <a href="tel:+66629795533" className="flex items-center gap-1 text-slate-600 hover:underline">
                  <Phone className="w-3 h-3" /> +66 62 979 5533
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-[#1a1a1a] flex items-center justify-center">
        <div className="text-white text-lg">Loading...</div>
      </main>
    }>
      <SuccessContent />
    </Suspense>
  );
}
