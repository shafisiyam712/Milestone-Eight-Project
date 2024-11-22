import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../Components/Header";

import Categories from "../Components/Categories";
import { Helmet } from "react-helmet";

const Home = () => {
    const categories=useLoaderData()
   
    console.log(categories);
   
    return (
        <div>
            <Helmet>
            <title>Gadgets | Gadget Heaven</title>
            </Helmet>
           <Header></Header>
          {/* <Gadgets gadgets={data}></Gadgets> */}
          <div className="w-11/12 mx-auto flex mt-5 gap-3">

            <div className="w-1/4 border rounded-xl flex flex-col h-96 space-y-3 justify-center items-center shadow-xl overflow-hidden">
                <Categories categories={categories}></Categories>
            </div>

            <div className="w-3/4">
           <Outlet></Outlet>
            </div>

        </div>
       
        
           
        </div>
    );
};

export default Home;