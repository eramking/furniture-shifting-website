import React, { useState } from 'react';
import BookingHeader from '../components/BookingHeader';
import BookingForm from '../components/BookingForm';
import BookingSummary from '../components/BookingSummary';
import BookingFooter from '../components/BookingFooter';
import '../components/booking.css';


const Booking = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    pickupLocation: '',
    dropoffLocation: '',
    movingDate: '',
    items: {
      sofaSet: false,
      bed: false,
      diningTable: false,
      wardrobe: false,
      otherFurniture: false
    }
  });

  const handleReset = () => {
    setFormData({
      fullName: '',
      phoneNumber: '',
      pickupLocation: '',
      dropoffLocation: '',
      movingDate: '',
      items: {
        sofaSet: false,
        bed: false,
        diningTable: false,
        wardrobe: false,
        otherFurniture: false
      }
    });
  };

  return (
    <div className="booking-container">
      <BookingHeader />
      <BookingForm formData={formData} setFormData={setFormData} />
      <BookingSummary handleReset={handleReset} />
      <BookingFooter />
    </div>
  );
};

export default Booking;
