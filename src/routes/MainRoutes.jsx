import { BrowserRouter as Router, Routes, Route } from "react-router";
import ROUTES from "./routes";

// Import Pages
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import LoginAfter from "../pages/LoginAfter";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<LogIn />} />
      <Route path={ROUTES.LOGINAFTER} element={<LoginAfter />} />
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
            

      

    </Routes>
  );
};

export default MainRoutes;
