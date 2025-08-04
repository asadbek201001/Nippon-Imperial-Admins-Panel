// libraries
import React from "react";
import styled from "styled-components";

// components
import Menu from "../components/Menu";


//styles
const DashboardWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: black;
`;




const Dashboard = () => {
  return (
    <DashboardWrapper>
      <Menu />
    </DashboardWrapper>
  );
};

export default Dashboard;
