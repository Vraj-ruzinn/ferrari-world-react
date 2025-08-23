import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Backlinesection from "./Components/backlineSection/Backlinesection";
import Cardsection from "./Components/cardSection/Cardsection";
import FaqSection from "./Components/faqSection/Faqsection";
import Footersection from "./Components/footersection/Footersection";
import Herosection from "./Components/herosection/Herosection";
import Ratingsection from "./Components/ratingsection/Ratingsection";
import Swippersection from "./Components/swippersection/Swippersection";
import Viewsection from "./Components/viewsection/Viewsection";
import AvailabilityPage from "./Components/availabilityPage/AvailabilityPage"; // we’ll create this
import AboutUs from "./Components/about/AboutUs";
import ContactUs from "./Components/contactus/ContactUs";
import TermsConditions from "./Components/terms/TermsConditions";
import Policy from "./Components/policy/Policy";
import ProductPagae from "./Components/productPagae/ProductPagae";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Herosection />
              <Ratingsection />
              <Cardsection />
              <Viewsection />
              <Swippersection />
              <FaqSection />
              <Backlinesection />
              <Footersection />
            </>
          }
        />

        {/* Availability Page */}
        <Route path="/availability/:dealId" element={<AvailabilityPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/product-pagae" element={<ProductPagae />} />
      </Routes>
    </Router>
  );
}

export default App;

// import './App.css'
// import Backlinesection from './Components/backlineSection/Backlinesection'
// import Cardsection from './Components/cardSection/Cardsection'
// import FaqSection from './Components/faqSection/Faqsection'
// import Footersection from './Components/footersection/Footersection'
// import Herosection from './Components/herosection/Herosection'
// import Ratingsection from './Components/ratingsection/Ratingsection'
// import Swippersection from './Components/swippersection/Swippersection'
// import Viewsection from './Components/viewsection/Viewsection'

// function App() {

//   return (
//     <>
//     <Herosection/>
//     <Ratingsection/>
//     <Cardsection/>
//     <Viewsection/>
//     <Swippersection/>
//     <FaqSection/>
//     <Backlinesection/>
//     <Footersection/>
//     </>
//   )
// }

// export default App
