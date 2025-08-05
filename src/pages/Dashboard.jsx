import React from "react";
import styled from "styled-components";
import Menu from "../components/Menu";
import { Outlet } from "react-router-dom";

const DashboardWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: black;
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

const Dashboard = () => {
    return (
        <DashboardWrapper>
            <Menu />
            <ContentWrapper>
                <Outlet />
            </ContentWrapper>
        </DashboardWrapper>
    );
};

export default Dashboard;
