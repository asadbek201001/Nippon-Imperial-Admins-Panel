import { BrowserRouter as Router, Routes, Route } from "react-router";
import ROUTES from "./routes";

// Pages
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import LoginAfter from "../pages/LoginAfter";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Accommodation from "../pages/Concierge/Accommodation";
import Arrangements from "../pages/Concierge/Arragements";
import LuxuryTransport from "../pages/Concierge/LuxuryTransport";
import Restaurant from "../pages/Concierge/Restaurant";
import TourGuideArrangements from "../pages/Concierge/TourGuideArrangements";
import TravelConsultation from "../pages/Concierge/TravelConsutation";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<LogIn />} />
      <Route path={ROUTES.LOGINAFTER} element={<LoginAfter />} />
      <Route path={ROUTES.HOME} element={<Home />} />
      
   
      <Route path={ROUTES.DASHBOARD} element={<Dashboard />}>
        <Route path="accommodation" element={<Accommodation />} />
         <Route path="arrangements" element={<Arrangements />} />

        <Route path="luxurytransport" element={<LuxuryTransport />} />
        <Route path="restaurant" element={<Restaurant />} />
        <Route path="travelconsultation" element={<TravelConsultation />} />

        <Route path="tourguidearrangements" element={<TourGuideArrangements />} />


      </Route>
    </Routes>
  );
};

export default MainRoutes;