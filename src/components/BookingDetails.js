import React, { useState, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "../CSS/BookingDetails.css";

const BookingDetails = () => {
  const { busId } = useParams();
  const location = useLocation();
  const bus = location.state?.bus; // Access the bus data passed through state

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const bookingDetailsRef = useRef(null); // Ref for the booking details section

  const handleDownloadPdf = async () => {
    const element = bookingDetailsRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
    });
    const imgProps = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`booking-details-${busId}.pdf`);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the form submission, e.g., store the booking details or send them to an API
    console.log({
      busId,
      name,
      email,
      phoneNumber,
    });
    alert("Booking successful!");
  };

  return (
    <div className="booking-details" ref={bookingDetailsRef}>
      <h2>Booking Details for Bus ID: {busId}</h2>
      {bus && ( // Check if bus data is available
        <div className="bus-route-details">
          <p>From: {bus.from}</p>
          <p>To: {bus.to}</p>
          <p>Price: ₹{bus.price}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter your phone number"
          required
        />
        <button onClick={handleDownloadPdf}>
          Download Booking Details as PDF
        </button>
      </form>
    </div>
  );
};

export default BookingDetails;
