import { BrowserRouter as Router, Routes, Route } from "react-router";
import ROUTES from "./routes";

// Pages
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import LoginAfter from "../pages/LoginAfter";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Accommodation from "../pages/Concierge/Accommodation";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<LogIn />} />
      <Route path={ROUTES.LOGINAFTER} element={<LoginAfter />} />
      <Route path={ROUTES.HOME} element={<Home />} />
      
      {/* Dashboard va uning ichki sahifalari */}
      <Route path={ROUTES.DASHBOARD} element={<Dashboard />}>
        <Route path="accommodation" element={<Accommodation />} />
        {/* boshqa nested sahifalarni ham shu yerga qo‘shishingiz mumkin */}
      </Route>
    </Routes>
  );
};

export default MainRoutes;