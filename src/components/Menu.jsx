// libraries
import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router";

// images
import LogoImg from "../images/logo.png";

// styles
const MenuWrapper = styled.div`
  background-color: #000;
  color: #b3935c;
  padding: 40px 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-right: 1px solid #b3935c;
`;

const Logo = styled.img`
  width: 160px;
  height: auto;
  margin-bottom: 20px;
`;

const Dropdown = styled.div`
  font-size: 18px;
  background-color: transparent;
  border: 1px solid #b3935c;
  padding: 8px 12px;
  border-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  user-select: none;
`;

const MenuSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 6px 0;
  border-radius: 10px;
`;

const MenuItem = styled.div`
  font-size: 16px;
  font-family: "Times New Roman", serif;
  margin-left: 10px;
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover {
    color: white;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #b3935c44;
  margin: 10px 0;
`;

const Divider2 = styled.hr`
  border: none;
  border-top: 0.5px solid #b3935c;
  width: 80%;
  margin: 10px 0;
  margin-left: 20px;
`;

const variants = {
  open: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  collapsed: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const Menu = () => {
  const navigate = useNavigate();
  const [showConcierge, setShowConcierge] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <MenuWrapper>
      <Logo src={LogoImg} alt="Nippon Imperial Logo" />

      <div>
        <Dropdown onClick={() => setShowConcierge(!showConcierge)}>
          Concierge {showConcierge ? "▾" : "▴"}
        </Dropdown>
        <AnimatePresence initial={false}>
          {showConcierge && (
            <motion.div
              key="concierge"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={variants}
              style={{ overflow: "hidden" }}
            >
              <MenuSection>
                <MenuItem onClick={() => navigate("/accommodation")}>
                  1) Accommodation Reservations
                </MenuItem>
                <Divider2 />
                <MenuItem onClick={() => navigate("/restaurant")}>
                  2) Restaurant Bookings
                </MenuItem>
                <Divider2 />
                <MenuItem
                  onClick={() => navigate("/luxurytransport")}
                >
                  3) Luxury Transport
                </MenuItem>
                <Divider2 />
                <MenuItem onClick={() => navigate("/arrangements")}>
                  4) Special Arrangements
                </MenuItem>
                <Divider2 />
                <MenuItem
                  onClick={() => navigate("/travelconsultation")}
                >
                  5) Travel Consultation
                </MenuItem>
                <Divider2 />
                <MenuItem
                  onClick={() => navigate("/tourguidearrangements")}
                >
                  6) Tour Guide Arrangements
                </MenuItem>
              </MenuSection>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Divider />

      {/* Services dropdown */}
      <div>
        <Dropdown onClick={() => setShowServices(!showServices)}>
          Services {showServices ? "▾" : "▴"}
        </Dropdown>
        <AnimatePresence initial={false}>
          {showServices && (
            <motion.div
              key="services"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={variants}
              style={{ overflow: "hidden" }}
            >
              <MenuSection>
                <MenuItem>
                  1) Chauffeur Service
                </MenuItem>
                <Divider2 />
                <MenuItem
                >
                  2) Airport Transfer
                </MenuItem>
                <Divider2 />
                <MenuItem>
                  3) One Day Tours
                </MenuItem>
                <Divider2 />
                <MenuItem>
                  4) Multiple Days Tours
                </MenuItem>
              </MenuSection>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MenuWrapper>
  );
};

export default Menu;
