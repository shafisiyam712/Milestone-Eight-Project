import { NavLink } from "react-router-dom";


const DashBanner = () => {
    return (
        <div className="bg-[#9538E2] mt-4 h-80 flex flex-col justify-center text-center w-full space-y-3">
            <h1 className="text-white text-2xl font-bold">Dashboard</h1>
            <p className="text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            <div className="flex justify-center text-center gap-4">
                <button className="">
                    <NavLink to='/dashboard/cart' end className={({ isActive }) =>
                        `btn rounded-full  w-36 ${isActive ? 'bg-white text-purple-700' : 'bg-purple-700 text-white'}`
                    }>
                        Cart
                    </NavLink>
                </button>
                <button className="">
                    <NavLink to='/dashboard/wishlist' end className={({ isActive }) =>
                        `btn rounded-full w-36 ${isActive ? 'bg-white text-purple-700 rounded-full' : 'bg-purple-700 text-white rounded-full'}`
                    }>
                        Wishlist
                    </NavLink>
                </button>
            </div>
        </div>
    );
};

export default DashBanner;