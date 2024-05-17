import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import MyBookings from "./pages/MyBookings";
import Help from "./pages/Help";
import BookingDetails from "./components/BookingDetails"; // This is your new booking component

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/mybookings" element={<MyBookings />} />
            <Route path="/help" element={<Help />} />
            <Route path="/booking/:busId" element={<BookingDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
