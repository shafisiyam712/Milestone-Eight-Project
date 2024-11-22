import { Helmet } from "react-helmet";
import DashBanner from "../Components/DashBanner";
import {Outlet} from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <Helmet>
        <title>Dashboard | Gadget Heaven</title>
      </Helmet>
      <DashBanner></DashBanner>
      <Outlet></Outlet>
      

    </div>

  );
};

export default Dashboard;