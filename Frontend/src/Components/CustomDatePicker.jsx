import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Default styles
import "./datepicker-custom.css"; // Global custom styles

export default function CustomDatePicker({ currDates, placeholder, onChangeDate }) {
  return (
    <DatePicker
      selected={currDates}
      onChange={(date) => onChangeDate(date)}
      placeholderText={placeholder}
      className="date_picker_input"
      calendarClassName="customDate"
      dateFormat="dd MMM yyyy"
      minDate={new Date()}
    />
  );
}
