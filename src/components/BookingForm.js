import React from 'react';
import { MapPin } from 'lucide-react';
import './booking.css';

const BookingForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleCheckboxChange = (key) => {
    setFormData({...formData, items: { ...formData.items, [key]: !formData.items[key] }});
  };

  return (
    <section className="booking-form">
      <h1>Book Your Move</h1>

      {/* Personal Info */}
      <div className="form-section">
        <h2>Personal Information</h2>
        <div className="form-row">
          <input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
          <input name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />
        </div>
      </div>

      {/* Location */}
      <div className="form-section">
        <h2>Location Details</h2>
        <input name="pickupLocation" placeholder="Pick-Up Location" value={formData.pickupLocation} onChange={handleChange} />
        <input name="dropoffLocation" placeholder="Drop-Off Location" value={formData.dropoffLocation} onChange={handleChange} />
      </div>

      {/* Items & Date */}
      <div className="form-section">
        <h2>Items & Schedule</h2>
        <div className="items-checklist">
          {Object.entries(formData.items).map(([key, value]) => (
            <label key={key}>
              <input type="checkbox" checked={value} onChange={() => handleCheckboxChange(key)} />
              {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            </label>
          ))}
        </div>
        <input type="date" name="movingDate" value={formData.movingDate} onChange={handleChange} />
      </div>
    </section>
  );
};

export default BookingForm;
