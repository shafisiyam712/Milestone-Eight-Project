

import { Helmet } from "react-helmet";
import StatBannar from "../Components/StatBannar";



const Statistics = () => {
    return (
        <div>
            <Helmet>
                <title>Statistics | Gadget Heaven</title>
            </Helmet>
            <StatBannar></StatBannar>
             <div className="text-center text-3xl text-purple-700 mt-10">
                <h1>No Data To Show Statistics</h1>
             </div>
        </div>
    );
};

export default Statistics;