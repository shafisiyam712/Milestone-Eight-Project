import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// min-h-[calc(100vh-800px)]
const MainLayouts = () => {
    return (
       
        <div className="">
           {/* navbar */}
            <Navbar></Navbar>
            <div className=''>
                 {/* dynamic  */}
            <Outlet></Outlet>
            </div>
           

            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;